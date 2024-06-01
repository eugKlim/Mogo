import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyBg = ({ src, className, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView && !loaded) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    }
  }, [inView, loaded, src]);

  return (
    <div
      ref={ref}
      className={`${className} ${loaded ? 'bg-loaded' : 'bg-loading'}`}
      style={{
        backgroundImage: loaded ? `url(${src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default LazyBg;
