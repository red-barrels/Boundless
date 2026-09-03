import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GracefulImage({ src, alt, style, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onLoad={() => setIsLoaded(true)}
      {...props} 
    />
  );
}