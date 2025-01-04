import React, { useEffect, useRef } from 'react';

interface SpotlightTextProps {
  text: string;
  className?: string;
}

export default function SpotlightText({ text, className = '' }: SpotlightTextProps) {
  const words = text.split(' ');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.getElementsByClassName('spotlight-word');
    let currentIndex = 0;

    const animate = () => {
      // Remove spotlight from all words
      Array.from(spans).forEach(span => {
        span.classList.remove('spotlight');
      });

      // Add spotlight to current word
      spans[currentIndex]?.classList.add('spotlight');

      // Move to next word
      currentIndex = (currentIndex + 1) % spans.length;
    };

    const intervalId = setInterval(animate, 2000);
    animate(); // Initial animation

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={`spotlight-word inline-block transition-all duration-1000 ease-in-out
            ${index > 0 ? 'ml-4' : ''}`}
          style={{
            textShadow: `-2px -2px 0 #000, 
                         2px -2px 0 #000,
                        -2px 2px 0 #000,
                         2px 2px 0 #000`
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}