import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, X } from 'lucide-react';

export default function WelcomeModal({ isLoggedIn, isDarkMode, onExplore }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      try {
        const showModal = sessionStorage.getItem('showWelcomeModal');
        if (showModal === 'true') {
          setIsOpen(true);
        }
      } catch (e) {
        // Fallback: show modal if storage is restricted
        setIsOpen(true);
      }
    }
  }, [isLoggedIn]);

  const handleClose = () => {
    try {
      sessionStorage.removeItem('showWelcomeModal');
    } catch (e) {}
    
    setIsOpen(false);
    if (onExplore) onExplore();
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.12)', /* Undarkened background */
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100000,
          padding: '16px'
        }}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            style={{
              background: 'var(--window-bg)',
              color: 'var(--text-color)',
              border: '1px solid var(--window-border)',
              borderRadius: '16px',
              padding: '32px',
              width: '100%',
              maxWidth: '420px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Compass size={24} />
                <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>Welcome to tomOS</h2>
              </div>
              <button 
                onClick={handleClose}
                className="window-control-btn"
                aria-label="Close welcome modal"
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.5, opacity: 0.9 }}>
            {isMobile 
                ? "This portfolio is built as an interactive operating system environment. It changes when viewed on a mobile device, or using a larger desktop browser window." 
                : "This portfolio is built as an interactive desktop environment."}
            </p>

            {isMobile ? (
                /* --- MOBILE LIST --- */
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', lineHeight: 1.5, flexDirection: 'column', gap: '20px', fontSize: '16px', opacity: 0.85 }}>
                  <li>Tap the <strong>Start</strong> button to browse applications.</li>
                  <li>Scroll through windows to view my projects.</li>
                  <li>Toggle light/dark mode or mute audio using the system icons in the start menu.</li>
                </ul>
              ) : (
                /* --- DESKTOP LIST --- */
                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', lineHeight: 1.5, flexDirection: 'column', gap: '20px', fontSize: '16px', opacity: 0.85 }}>
                  <li>Click the <strong>Start</strong> button in the taskbar to browse applications.</li>
                  <li>Drag, minimize, or close windows freely just like a real operating system (like Windows or macOS).</li>
                  <li>Toggle light/dark mode or mute audio using the system tray on the bottom right.</li>
                </ul>
              )}

            <button
              onClick={handleClose}
              style={{
                marginTop: '16px',
                padding: '12px 20px',
                borderRadius: '8px',
                border: 'none',
                background: 'var(--text-color)',
                color: isDarkMode ? '#000000' : '#ffffff',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
              }}
            >
              Explore
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}