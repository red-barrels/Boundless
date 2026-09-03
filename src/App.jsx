import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Window from './components/Window';
import LoginScreen from './components/LoginScreen';
import WelcomeModal from './components/WelcomeModal';
import StartMenu from './components/StartMenu';
import Taskbar from './components/Taskbar';
import { APP_DATA, leapImages, alffieImages } from './data/appsData';


const loginAudio = new Audio((process.env.PUBLIC_URL || '') + '/Audio/login.mp3');
const logoutAudio = new Audio((process.env.PUBLIC_URL || '') + '/Audio/logout.mp3');

const publicUrl = process.env.PUBLIC_URL || '';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [windows, setWindows] = useState([]);
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
    loginAudio.load();
    logoutAudio.load();

    const coreAssets = [
      `${publicUrl}/Backgrounds/flow.jpg`, `${publicUrl}/Backgrounds/tidal.jpg`,
      `${publicUrl}/Icons/alffie_icon.png`, `${publicUrl}/Icons/OC_icon.png`, `${publicUrl}/Icons/NAB_icon.png`, 
      `${publicUrl}/Icons/chep_icon.png`, `${publicUrl}/Icons/leap_icon.png`, `${publicUrl}/Icons/about_icon.png`, `${publicUrl}/Icons/ai_icon.png`,
      `${publicUrl}/Logos/oc_logo.png`, `${publicUrl}/Logos/NAB_logo.png`, `${publicUrl}/Logos/alffie_logo.png`, `${publicUrl}/Logos/leap_logo.png`, `${publicUrl}/Logos/CHEP_logo.png`
    ];
    
    const allAssets = [
      ...coreAssets, 
      ...leapImages.map(img => img.url), 
      ...alffieImages.map(img => img.url)
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
  
      if (!isMuted) {
        loginAudio.currentTime = 0;
        loginAudio.play().catch(() => {});
      }
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
    if (!isMuted) {
      logoutAudio.currentTime = 0;
      logoutAudio.play().catch(() => {});
    }
  };

  const handleAppClick = (appId) => {
    setIsStartOpen(false);
    setShowHint(false);
    const existingWindow = windows.find(w => w.id === appId);
    
    if (!existingWindow) {
      const appTemplate = APP_DATA.find(a => a.id === appId);
      const spawnX = 24 + (spawnCount % 10) * 32;
      const spawnY = 24 + (spawnCount % 10) * 32;
      
      setWindows([...windows, { 
        ...appTemplate, 
        isMinimized: false, 
        zIndex: activeZIndex,
        initialPos: { x: spawnX, y: spawnY },
        exitAction: 'minimize'
      }]);
      
      setActiveZIndex(activeZIndex + 1);
      setSpawnCount(prev => prev + 1);
    } else if (existingWindow.isMinimized) {
      focusWindow(appId);
    } else {
      const activeWindows = windows.filter(w => !w.isMinimized);
      const highestZIndex = Math.max(...activeWindows.map(w => w.zIndex));
      
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
    setWindows(windows.map(w => 
      w.id === id ? { ...w, zIndex: activeZIndex, isMinimized: false, exitAction: 'minimize' } : w
    ));
    setActiveZIndex(activeZIndex + 1);
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

  return (
    <>
      <div className="desktop-bg-light" style={{ backgroundImage: `url(${publicUrl}/Backgrounds/flow.jpg)` }} />
      <div className="desktop-bg-dark" style={{ backgroundImage: `url(${publicUrl}/Backgrounds/tidal.jpg)` }} />
      
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
          // Delay taskbar animation to wait for Modal's blur to fade out
          setTimeout(() => setTaskbarVisible(true), 400); 
        }} 
      />
      
      <div className="desktop" style={{ position: 'relative', zIndex: 1, justifyContent: !isAuthenticated ? 'center' : 'flex-start', alignItems: !isAuthenticated ? 'center' : 'stretch' }}>
        
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
                      isMuted // Pass system mute state down
                    })}
                  </Window>
                ))}
              </AnimatePresence>
            </div>

            {showHint && !isStartOpen && (
              <div className="start-hint">
                Click here to begin
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
              isVisible={taskbarVisible}
            />
          </>
        )}
      </div>
    </>
  );
}