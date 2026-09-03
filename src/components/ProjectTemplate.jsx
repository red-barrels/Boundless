import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GracefulImage from './GracefulImage';

function CarouselBlock({ images, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          boxSizing: 'border-box'
        }}
      >
      {description && (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 16px auto', textAlign: 'left' }}>
          <p style={{ 
            margin: 0, 
            opacity: 0.6, 
            fontSize: '15px', 
            fontStyle: 'italic', 
            lineHeight: '1.5' 
          }}>
            {description}
          </p>
        </div>
        )}
        <div 
          onClick={() => setIsZoomed(true)}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            aspectRatio: '1/1',
            background: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-in'
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={images[currentIndex].url} 
              alt={images[currentIndex].caption || 'Project Image'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '16px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 4px', maxWidth: '1000px' }}>
          <span style={{ fontSize: '14px', opacity: 0.8, fontStyle: 'italic' }}>
            {images[currentIndex].caption}
          </span>
          <span style={{ fontSize: '13px', opacity: 0.6 }}>
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsZoomed(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'zoom-out',
              padding: '24px',
              boxSizing: 'border-box'
            }}
          >
            <GracefulImage
              src={images[currentIndex].url} 
              alt={images[currentIndex].caption || 'Zoomed Project Image'}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function VideoBlock({ src, poster, appId, playingVideoId, onToggleVideo, description, isMuted }) {
  const videoRef = useRef(null);

  // Sync video element's muted state with global system mute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    if (playingVideoId !== appId && videoRef.current) {
      videoRef.current.pause();
    }
  }, [playingVideoId, appId]);

  const videoSrc = src.includes('#t=') ? src : `${src}#t=0.1`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {description && (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 16px auto', textAlign: 'left' }}>
          <p style={{ 
            margin: 0, 
            opacity: 0.6, 
            fontSize: '15px', 
            fontStyle: 'italic', 
            lineHeight: '1.5' 
          }}>
            {description}
          </p>
        </div>
      )}
      <video 
        ref={videoRef}
        src={videoSrc} 
        poster={poster}
        preload="metadata"
        controls 
        onPlay={() => onToggleVideo(appId, true)}
        onPause={() => onToggleVideo(appId, false)}
        style={{ 
          width: '100%', 
          maxWidth: '1000px', 
          borderRadius: '12px', 
          background: '#000',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)' 
        }} 
      />
    </motion.div>
  );
}

function IframeBlock({ title, srcDoc, description }) {
  const iframeRef = useRef(null);

  const adjustHeight = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        const height = iframeRef.current.contentWindow.document.documentElement.scrollHeight;
        iframeRef.current.style.height = `${height}px`;
      } catch (e) {
        // Silently fail if cross-origin rules prevent reading the height
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {description && (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 16px auto', textAlign: 'left' }}>
          <p style={{ 
            margin: 0, 
            opacity: 0.6, 
            fontSize: '15px', 
            fontStyle: 'italic', 
            lineHeight: '1.5' 
          }}>
            {description}
          </p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        title={title || "Interactive content"}
        srcDoc={srcDoc}
        scrolling="no"
        onLoad={() => {
          adjustHeight();
          try {
            const doc = iframeRef.current.contentWindow.document;
            const observer = new MutationObserver(adjustHeight);
            observer.observe(doc.body, { childList: true, subtree: true, attributes: true });
          } catch (e) {}
        }}
        style={{
          width: '100%',
          minHeight: '600px',
          border: 'none',
          borderRadius: '12px',
          background: 'transparent',
          transition: 'height 0.2s ease'
        }}
        sandbox="allow-scripts allow-same-origin"
      />
    </motion.div>
  );
}

export default function ProjectTemplate({ brandColor, logoUrl, blocks, appId, playingVideoId, onToggleVideo, isMuted }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', boxSizing: 'border-box', paddingBottom: '64px' }}>
      <div style={{ 
        width: '100%',
        boxSizing: 'border-box',
        background: brandColor, 
        padding: '30px 20px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottom: '1px solid var(--window-border)',
        marginBottom: '48px'
      }}>
        {logoUrl ? (
          <GracefulImage src={logoUrl} alt="Logo" style={{ height: '60px', objectFit: 'contain' }} />
        ) : (
          <h2 style={{ color: '#fff', margin: 0 }}>LOGO</h2>
        )}
      </div>

      <div style={{ 
        padding: '0 32px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '48px',
        width: '100%',
        maxWidth: '1000px',
        boxSizing: 'border-box'
      }}>
        {blocks && blocks.map((block, idx) => {
          if (block.type === 'text') {
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}
              >
                {/* The title renders first, followed by the optional image, then the text */}
                <h3 style={{ margin: '0 0 16px 0', fontSize: '22px' }}>{block.title}</h3>
                
                {block.image && (
                  <GracefulImage 
                    src={block.image} 
                    alt="Project visual" 
                    style={{ width: '100%', maxWidth: '250px', borderRadius: '12px', marginBottom: '16px', display: 'block' }} 
                  />
                )}
                
                <p style={{ margin: 0, opacity: 0.8, lineHeight: '1.6' }}>{block.text}</p>
              </motion.div>
            );
          }
          if (block.type === 'carousel') {
            return <CarouselBlock key={idx} images={block.images} description={block.description} />;
          }
          if (block.type === 'video') {
            return (
              <VideoBlock 
                key={idx} 
                src={block.src} 
                poster={block.poster} 
                description={block.description} 
                appId={appId} 
                playingVideoId={playingVideoId} 
                onToggleVideo={onToggleVideo} 
                isMuted={isMuted} 
              />
            );
          }
          if (block.type === 'iframe') {
            return <IframeBlock key={idx} title={block.title} srcDoc={block.srcDoc} description={block.description} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}