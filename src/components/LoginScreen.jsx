import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LoginScreen({ handleLogin, passwordInput, setPasswordInput, loginError }) {
  return (
    <motion.form 
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleLogin} 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '20px',
        padding: '40px',
        borderRadius: '16px',
        background: 'var(--bg-taskbar)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid var(--window-border)',
        boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
        width: '320px'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 600 }}>Welcome</h2>
      </div>

      <div style={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '13px', fontWeight: 500, opacity: 0.8 }}>
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
            color: 'var(--text-main)',
            fontSize: '15px',
            boxSizing: 'border-box',
            outline: 'none',
            transition: 'border-color 0.2s',
            textAlign: 'center',
            letterSpacing: '2px'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--text-main)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--window-border)'}
        />
        {loginError && (
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ position: 'absolute', bottom: '-24px', left: 0, width: '100%', textAlign: 'center', color: '#ff4444', fontSize: '13px' }}
          >
            Incorrect password
          </motion.span>
        )}
      </div>

      <button type="submit" className="taskbar-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
        Login <ArrowRight size={18} />
      </button>
    </motion.form>
  );
}