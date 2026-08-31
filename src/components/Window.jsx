import { useRef, useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Window({ title, icon, children, onClose, onMinimize, zIndex, onFocus, targetPosition, initialPos, defaultWidth, defaultHeight, exitAction }) {
  const windowRef = useRef(null);
  const [offsets, setOffsets] = useState({ x: 0, y: window.innerHeight });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (targetPosition && windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      const windowCenterX = rect.left + rect.width / 2;
      const windowCenterY = rect.top + rect.height / 2;

      setOffsets({
        x: targetPosition.x - windowCenterX,
        y: targetPosition.y - windowCenterY,
      });
    }
  }, [targetPosition]);

  return (
    <Rnd
      default={{
        x: initialPos ? initialPos.x : 60,
        y: initialPos ? initialPos.y : 60,
        width: defaultWidth || 900,
        height: defaultHeight || 700,
      }}
      position={isMobile ? { x: 0, y: 0 } : undefined}
      size={isMobile ? { width: '100vw', height: 'calc(100vh - 80px)' } : undefined}
      disableDragging={isMobile}
      enableResizing={!isMobile}
      minWidth={isMobile ? '100vw' : 600}
      minHeight={isMobile ? '100vh' : 400}
      maxWidth="100vw"
      bounds="parent"
      dragHandleClassName="window-header"
      onMouseDown={onFocus}
      style={{ zIndex, position: 'absolute' }}
    >
      <motion.div 
        ref={windowRef}
        initial={{ scale: 0.1, opacity: 0, x: offsets.x, y: offsets.y }}
        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
        exit={exitAction === 'close' ? { scale: 0.95, opacity: 0, y: 10 } : { scale: 0.1, opacity: 0, x: offsets.x, y: offsets.y }}
        transition={exitAction === 'close' ? { duration: 0.2 } : { duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%',
          background: 'var(--window-bg)', 
          border: '1px solid var(--window-border)',
          borderRadius: isMobile ? '0' : '12px', 
          overflow: 'hidden', 
          boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
      >
        <div className="window-header" style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 14px', 
          background: 'rgba(0,0,0,0.04)', 
          cursor: isMobile ? 'default' : 'grab',
          borderBottom: '1px solid var(--window-border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '4px' }}>
            {icon && <div className="window-header-icon">{icon}</div>}
            <span style={{ fontSize: '15px', fontWeight: 600 }}>{title}</span>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {!isMobile && (
              <button onClick={onMinimize} className="window-control-btn" aria-label="Minimize Window">
                <Minus size={18} />
              </button>
            )}
            <button onClick={onClose} className="window-control-btn close" aria-label="Close Window">
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
          {children}
        </div>
      </motion.div>
    </Rnd>
  );
}