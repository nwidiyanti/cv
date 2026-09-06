import React, { useEffect, useState } from 'react';

const emojis = ['🌸', '🌺', '🌷', '🌻', '🌼', '🌹', '✨', '🦋', '💫', '💖'];

const AnimatedBackground = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate flowers and sparkles
    const newElements = Array.from({ length: 70 }).map((_, i) => {
      const size = Math.random() * 25 + 15;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 20 + 15; // 15s to 35s
      const animationDelay = Math.random() * -30; // Negative delay so they start immediately
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const isAlt = Math.random() > 0.5;
      
      return (
        <div 
          key={`emoji-${i}`} 
          className={`flower ${isAlt ? 'alt-anim' : ''}`}
          style={{
            left: `${left}%`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
            fontSize: `${size}px`,
            filter: `hue-rotate(${Math.random() * 30}deg)` // slight color variation
          }}
        >
          {emoji}
        </div>
      );
    });

    // Add glowing background orbs
    const orbs = Array.from({ length: 4 }).map((_, i) => {
      const size = Math.random() * 40 + 30; // 30vw to 70vw
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const animationDuration = Math.random() * 40 + 40; // very slow
      const colors = ['rgba(217, 70, 239, 0.15)', 'rgba(37, 99, 235, 0.15)', 'rgba(236, 72, 153, 0.15)'];
      const color = colors[i % colors.length];

      return (
        <div 
          key={`orb-${i}`}
          style={{
            position: 'absolute',
            width: `${size}vw`,
            height: `${size}vw`,
            left: `${left}%`,
            top: `${top}%`,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            borderRadius: '50%',
            animation: `floatProfile ${animationDuration}s ease-in-out infinite`,
            animationDelay: `-${Math.random() * 20}s`,
            zIndex: -2,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }}
        />
      );
    });

    setElements([...orbs, ...newElements]);
  }, []);

  return (
    <div className="animated-background">
      {elements}
    </div>
  );
};

export default AnimatedBackground;
