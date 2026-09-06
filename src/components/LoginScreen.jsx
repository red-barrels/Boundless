import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LoginScreen({ handleLogin, passwordInput, setPasswordInput, loginError }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatLoginDate = (date) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]}`;
  };

  const formatLoginTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    hours = hours % 12 || 12;
    return `${hours}:${minutes}`;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '15vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '22px',
          fontWeight: 600,
          letterSpacing: '0.4px',
          marginBottom: '8px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3))'
        }}>
          {formatLoginDate(currentTime)}
        </div>
        <div style={{
          fontSize: '110px',
          fontWeight: 600,
          letterSpacing: '-3px',
          lineHeight: '1',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.25))'
        }}>
          {formatLoginTime(currentTime)}
        </div>
      </div>

      <motion.form 
        className="login-screen" 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleLogin} 
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '24px',
          padding: '40px',
          borderRadius: '16px',
          background: 'var(--window-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--window-border)',
          borderTop: '1px solid var(--glass-shine)',
          boxShadow: 'inset 0 1px 0 0 var(--glass-shine), 0 24px 48px var(--glass-shadow)',
          width: '340px',
          boxSizing: 'border-box',
          position: 'absolute',
          top: '56vh'
        }}
      >
        <div style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '16px', fontWeight: 500, opacity: 0.8, color: 'var(--text-color)' }}>
            Enter password
          </label>
          <input 
            type="password"
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: loginError ? '1px solid #ff4444' : '1px solid var(--window-border)',
              background: 'var(--window-bg)',
              color: 'var(--text-color)',
              fontSize: '15px',
              boxSizing: 'border-box',
              outline: 'none',
              transition: 'border-color 0.2s',
              textAlign: 'center',
              letterSpacing: '2px'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--text-color)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--window-border)'}
          />
          {loginError && (
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ position: 'absolute', bottom: '-24px', left: 0, width: '100%', textAlign: 'center', color: '#ff4444', fontSize: '16px' }}
            >
              Incorrect password
            </motion.span>
          )}
        </div>

        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '8px', 
            marginTop: '8px',
            padding: '12px 20px',
            borderRadius: '8px',
            border: 'none',
            background: 'var(--text-color)',
            color: 'var(--window-bg)',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            boxSizing: 'border-box',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Login <ArrowRight size={18} />
        </button>
      </motion.form>
    </div>
  );
}