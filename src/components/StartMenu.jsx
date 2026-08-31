import { motion } from 'framer-motion';
import { LogOut, Volume2, VolumeX, Moon, Sun } from 'lucide-react';
import { APP_DATA } from '../data/appsData';

export default function StartMenu({ handleAppClick, handleLogout, isMuted, setIsMuted, isDarkMode, setIsDarkMode }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 10 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="start-menu glass-panel"
    >
      {APP_DATA.map(app => (
        <button key={app.id} className="start-item" onClick={() => handleAppClick(app.id)}>
          {app.icon}
          {app.title}
        </button>
      ))}

      <div style={{ height: '1px', background: 'var(--window-border)', margin: '4px 0' }} />
      
      <button className="start-item" onClick={handleLogout} style={{ color: 'var(--text-main)' }}>
        <LogOut size={20} color="var(--text-main)" />
        Log out
      </button>

      <div className="mobile-sys-tray">
        <button 
          className="sys-tray-btn" 
          onClick={() => setIsMuted(!isMuted)}
          data-tooltip={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <button 
          className="sys-tray-btn" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          data-tooltip={isDarkMode ? 'Light mode' : 'Dark mode'}
        >
          {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </motion.div>
  );
}