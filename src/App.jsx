import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Window from './components/Window';
import LoginScreen from './components/LoginScreen';
import WelcomeModal from './components/WelcomeModal';
import StartMenu from './components/StartMenu';
import Taskbar from './components/Taskbar';
import { APP_DATA } from './data/appsData';

const publicUrl = process.env.PUBLIC_URL || '';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [windows, setWindows] = useState(() => {
    // Get current browser dimensions safely (fallback to standard sizes if SSR/initial load)
    const clientWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const clientHeight = typeof window !== 'undefined' ? window.innerHeight : 900;

    // Define proportional percentage positions or grid fractions based on screen size
    const initialApps = [
      { id: 'about', x: clientWidth * 0.05, y: clientHeight * 0.08, width: 520, height: 700 }
  

    ];

    return initialApps.map((item, index) => {
      const appTemplate = APP_DATA.find(a => a.id === item.id);
      return {
        ...appTemplate,
        isMinimized: false,
        zIndex: 10 + index,
        width: item.width,
        height: item.height,
        initialPos: { 
          x: item.x, 
          y: item.y 
        },
        exitAction: 'minimize'
      };
    });
  });

  const [activeZIndex, setActiveZIndex] = useState(10);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasShownHintOnce, setHasShownHintOnce] = useState(false);
  const [spawnCount, setSpawnCount] = useState(0); 
  
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const [taskbarVisible, setTaskbarVisible] = useState(() => {
    try {
      return sessionStorage.getItem('showWelcomeModal') !== 'true';
    } catch (e) {
      return true; // Fallback to visible if storage is blocked
    }
  });

  const taskbarRefs = useRef({});

  useEffect(() => {

    const coreAssets = [
      `${publicUrl}/Backgrounds/flow.jpg`, `${publicUrl}/Backgrounds/tidal.jpg`,
      `${publicUrl}/Icons/alffie_icon.png`, `${publicUrl}/Icons/OC_icon.png`, `${publicUrl}/Icons/NAB_icon.png`, 
      `${publicUrl}/Icons/chep_icon.png`, `${publicUrl}/Icons/leap_icon.png`, `${publicUrl}/Icons/about_icon.png`, `${publicUrl}/Icons/ai_icon.png`,
      `${publicUrl}/Logos/oc_logo.png`, `${publicUrl}/Logos/NAB_logo.png`, `${publicUrl}/Logos/alffie_logo.png`, `${publicUrl}/Logos/leap_logo.png`, `${publicUrl}/Logos/CHEP_logo.png`
    ];
    
    const allAssets = [
      ...coreAssets

    ];

    allAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // HINT LOGIC 1: Only start the 5-second timer AFTER the taskbar has animated into view
  useEffect(() => {
    if (!isAuthenticated || !taskbarVisible || hasShownHintOnce) return;
    
    const hintTimer = setTimeout(() => {
      if (!isStartOpen) {
        setShowHint(true);
      }
    }, 5000);
    
    return () => clearTimeout(hintTimer);
  }, [isAuthenticated, taskbarVisible, hasShownHintOnce, isStartOpen]);

  // HINT LOGIC 2: Permanently kill the hint the first time Start is clicked
  useEffect(() => {
    if (isStartOpen) {
      setShowHint(false);
      setHasShownHintOnce(true);
    }
  }, [isStartOpen]);

  // Tracks and normalizes mouse position for the 3D warp grid
  useEffect(() => {
    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      
      document.documentElement.style.setProperty('--mouse-x-norm', normX);
      document.documentElement.style.setProperty('--mouse-y-norm', normY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isStartOpen) {
          setIsStartOpen(false);
        } else {
          setWindows(currentWindows => {
            const activeWindows = currentWindows.filter(w => !w.isMinimized);
            if (activeWindows.length === 0) return currentWindows;
            
            const topWindow = activeWindows.reduce((prev, current) => 
              (prev.zIndex > current.zIndex) ? prev : current
            );
            
            return currentWindows.map(w => 
              w.id === topWindow.id ? { ...w, isMinimized: true, exitAction: 'minimize' } : w
            );
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStartOpen]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'LV-117') {
      setIsAuthenticated(true);
      setLoginError(false);
      setPasswordInput('');
      
      try {
        sessionStorage.setItem('showWelcomeModal', 'true');
      } catch (e) {
        // Handle restricted storage gracefully
      }
      
      setTaskbarVisible(false);
    } else {
      setLoginError(true);
      setPasswordInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsStartOpen(false);
    setWindows([]);
    setPlayingVideoId(null);
  };

  const handleAppClick = (appId) => {
    setIsStartOpen(false);
    setShowHint(false);
    const existingWindow = windows.find(w => w.id === appId);
    
    // Calculate the absolute highest z-index currently active on the desktop
    const currentMaxZ = windows.length > 0 ? Math.max(...windows.map(w => w.zIndex || 1)) : 10;
    
    if (!existingWindow) {
      const appTemplate = APP_DATA.find(a => a.id === appId);
      
      /* Cascades new windows diagonally so they form an overlapping mosaic */
      const cascadeOffset = (windows.length * 35) % 180;
      const spawnX = 80 + cascadeOffset;
      const spawnY = 60 + cascadeOffset;
      
      setWindows([...windows, { 
        ...appTemplate, 
        isMinimized: false, 
        zIndex: currentMaxZ + 1,
        initialPos: { x: spawnX, y: spawnY },
        width: appTemplate.width || 680,
        height: appTemplate.height || 540,
        exitAction: 'minimize'
      }]);
      
      setSpawnCount(prev => prev + 1);
    } else if (existingWindow.isMinimized) {
      focusWindow(appId);
    } else {
      const activeWindows = windows.filter(w => !w.isMinimized);
      const highestZIndex = activeWindows.length > 0 ? Math.max(...activeWindows.map(w => w.zIndex)) : 10;
      
      if (existingWindow.zIndex < highestZIndex) {
        focusWindow(appId);
      } else {
        setWindows(windows.map(w => w.id === appId ? { ...w, isMinimized: true, exitAction: 'minimize' } : w));
      }
    }
  };

  const closeWindow = (id) => {
    setWindows(windows.map(w => w.id === id ? { ...w, exitAction: 'close' } : w));
    if (playingVideoId === id) setPlayingVideoId(null);
    
    setTimeout(() => {
      setWindows(current => current.filter(w => w.id !== id));
    }, 50);
  };

const focusWindow = (id) => {
    // Dynamically calculate the highest z-index across all windows + 1
    const currentMaxZ = windows.length > 0 ? Math.max(...windows.map(w => w.zIndex || 1)) : 10;
    
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: currentMaxZ + 1, isMinimized: false, exitAction: 'minimize' } : w
    ));
  };

  const toggleVideo = (id, isPlaying) => {
    if (isPlaying) {
      setPlayingVideoId(id);
    } else if (playingVideoId === id) {
      setPlayingVideoId(null);
    }
  };

  const toggleStart = () => {
    setIsStartOpen(!isStartOpen);
  };

  const getButtonPosition = (id) => {
    const el = taskbarRefs.current[id];
    if (el) {
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }
    return null;
  };

  // Calculate which window is currently active (on top)
  const activeWindows = windows.filter(w => !w.isMinimized);
  const topWindow = activeWindows.length > 0 
    ? activeWindows.reduce((prev, current) => (prev.zIndex > current.zIndex ? prev : current))
    : null;
  
  const activeAppId = topWindow ? topWindow.id : 'desktop';

  // Automatically update the global CSS colour variable when the active window changes
  useEffect(() => {
    const activeColor = topWindow?.themeColor || '#1a1aff';
    document.documentElement.style.setProperty('--active-accent', activeColor);
  }, [topWindow]);


  return (
    <>
      {/* HEAVY BLUR OVERLAY FOR LOGIN SCREEN */}
      <AnimatePresence>
        {!isAuthenticated && (
          <motion.div
            key="login-blur"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              inset: 0,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              background: 'rgba(0, 0, 0, 0.25)',
              zIndex: 0
            }}
          />
        )}
      </AnimatePresence>
      
      <WelcomeModal 
        isLoggedIn={isAuthenticated} 
        isDarkMode={isDarkMode} 
        onExplore={() => {
          setTimeout(() => setTaskbarVisible(true), 400); 
        }} 
      />
    
    <div className="desktop" style={{ position: 'relative', zIndex: 1, justifyContent: !isAuthenticated ? 'center' : 'flex-start', alignItems: !isAuthenticated ? 'center' : 'stretch' }}>
      
{/* AMBIENT AURORA BACKGROUND */}
<div className="ambient-background">
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '15%', '-10%', '0%'], y: ['0%', '-10%', '15%', '0%'], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '-10%', left: '-10%', width: '80vw', height: '80vw', background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 65%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '-15%', '10%', '0%'], y: ['0%', '15%', '-15%', '0%'], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ top: '20%', right: '-20%', width: '75vw', height: '75vw', background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 65%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '10%', '-15%', '0%'], y: ['0%', '-15%', '10%', '0%'], scale: [1, 1.15, 0.85, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          style={{ bottom: '-30%', left: '10%', width: '90vw', height: '90vw', background: 'radial-gradient(circle, var(--orb-3) 0%, transparent 65%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '12%', '-8%', '0%'], y: ['0%', '10%', '-12%', '0%'], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ top: '30%', left: '20%', width: '65vw', height: '65vw', background: 'radial-gradient(circle, var(--orb-4) 0%, transparent 60%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '-12%', '8%', '0%'], y: ['0%', '-12%', '12%', '0%'], scale: [1, 0.95, 1.15, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ top: '-15%', right: '15%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, var(--orb-5) 0%, transparent 60%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '-10%', '14%', '0%'], y: ['0%', '12%', '-10%', '0%'], scale: [1, 1.05, 0.9, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{ bottom: '10%', right: '-10%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, var(--orb-6) 0%, transparent 65%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '8%', '-14%', '0%'], y: ['0%', '-8%', '14%', '0%'], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          style={{ top: '40%', left: '-15%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--orb-7) 0%, transparent 65%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '-14%', '10%', '0%'], y: ['0%', '14%', '-8%', '0%'], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          style={{ top: '5%', left: '30%', width: '55vw', height: '55vw', background: 'radial-gradient(circle, var(--orb-8) 0%, transparent 60%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '10%', '-12%', '0%'], y: ['0%', '-14%', '10%', '0%'], scale: [1, 0.95, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          style={{ bottom: '-10%', right: '25%', width: '75vw', height: '75vw', background: 'radial-gradient(circle, var(--orb-9) 0%, transparent 65%)' }} 
        />
        <motion.div 
          className="ambient-orb" 
          animate={{ x: ['0%', '-8%', '12%', '0%'], y: ['0%', '10%', '-14%', '0%'], scale: [1, 1.1, 0.85, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          style={{ top: '50%', right: '5%', width: '65vw', height: '65vw', background: 'radial-gradient(circle, var(--orb-10) 0%, transparent 65%)' }} 
        />
      </div>


      {!isAuthenticated ? (
        <LoginScreen 
          handleLogin={handleLogin}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
          loginError={loginError}
        />
      ) : (
        <>
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }} onClick={() => setIsStartOpen(false)}>
            <AnimatePresence>
              {windows.map(win => !win.isMinimized && (
                <Window 
                  key={win.id} 
                  title={win.title}
                  themeColor={win.themeColor}
                  icon={win.icon}
                  onClose={() => closeWindow(win.id)}
                  onMinimize={() => handleAppClick(win.id)}
                  onFocus={() => focusWindow(win.id)}
                  zIndex={win.zIndex}
                  targetPosition={getButtonPosition(win.id)}
                  initialPos={win.initialPos}
                  defaultWidth={win.width}
                  defaultHeight={win.height}
                  exitAction={win.exitAction}
                >
                  {win.content({ 
                    appId: win.id, 
                    playingVideoId, 
                    onToggleVideo: toggleVideo,
                    isMuted 
                  })}
                </Window>
              ))}
            </AnimatePresence>
          </div>

          {showHint && !isStartOpen && (
            <div className="start-hint">
              Click here to explore
            </div>
          )}

          <AnimatePresence>
            {isStartOpen && (
              <StartMenu 
                handleAppClick={handleAppClick}
                handleLogout={handleLogout}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            )}
          </AnimatePresence>

          {taskbarVisible && (
            <Taskbar 
              toggleStart={toggleStart}
              windows={windows}
              taskbarRefs={taskbarRefs}
              handleAppClick={handleAppClick}
              playingVideoId={playingVideoId}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
          )}
        </>
      )}
    </div>
  </>
);
}