import React from 'react';

const TextWithBackground = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`text-transparent bg-clip-text inline-block ${className ? className : ''}`}
      style={{
        background: "url('/images/colorPalette.png') no-repeat center center",
        backgroundSize: '100%',
        WebkitBackgroundClip: 'text',
      }}
    >
      {children}
    </div>
  );
};

export default TextWithBackground;
