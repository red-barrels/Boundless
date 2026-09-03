import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Moon, Sun } from 'lucide-react';

export default function Taskbar({ 
  toggleStart, 
  windows, 
  taskbarRefs, 
  handleAppClick, 
  playingVideoId, 
  isMuted, 
  setIsMuted, 
  isDarkMode, 
  setIsDarkMode,
  isVisible = true
}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = dayNames[date.getDay()];
    const dateNum = date.getDate();
    const month = monthNames[date.getMonth()];
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12 || 12;
    return `${day} ${dateNum} ${month} ${hours}:${minutes} ${ampm}`;
  };

  return (
    <motion.div 
      className="taskbar"
      initial={{ y: 80, opacity: 0, scaleX: 0.8 }}
      animate={isVisible ? { y: 0, opacity: 1, scaleX: 1 } : { y: 80, opacity: 0, scaleX: 0.8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1, overflow: 'hidden' }}>
        <button className="taskbar-btn" onClick={toggleStart} aria-label="Toggle Start Menu">
          Start
        </button>
        
        <div style={{ width: '1px', height: '28px', background: 'var(--window-border)', margin: '0 12px', flexShrink: 0 }} />
        
        <div className="taskbar-apps-container">
          {windows.map(win => {
            const activeWindows = windows.filter(w => !w.isMinimized);
            const highestZ = activeWindows.length > 0 ? Math.max(...activeWindows.map(w => w.zIndex)) : -1;
            const isActive = !win.isMinimized && win.zIndex === highestZ;

            return (
              <button 
                key={win.id} 
                ref={(el) => (taskbarRefs.current[win.id] = el)}
                onClick={() => handleAppClick(win.id)}
                className={`taskbar-app-btn ${isActive ? 'active' : ''}`}
                aria-label={`Toggle ${win.title}`}
              >
                {win.icon}
                <span className="app-title">{win.title}</span>
                <AnimatePresence>
                  {playingVideoId === win.id && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      exit={{ scale: 0 }}
                      style={{ display: 'flex', alignItems: 'center', marginLeft: '6px' }}
                    >
                      <Volume2 size={22} color="var(--text-color)" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>

      <div className="desktop-sys-tray" style={{ gap: '6px', alignItems: 'center' }}>
        <button 
          className="sys-tray-btn" 
          onClick={() => setIsMuted(!isMuted)}
          data-tooltip={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <button 
          className="sys-tray-btn" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          data-tooltip={isDarkMode ? 'Light mode' : 'Dark mode'}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          padding: '0 10px',
          fontSize: '14px',
          fontWeight: 500,
          opacity: 0.85
        }}>
          {formatDateTime(currentTime)}
        </div>
      </div>
    </motion.div>
  );
}