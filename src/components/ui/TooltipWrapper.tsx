import { useState, useEffect, useRef } from 'react';

interface TooltipWrapperProps {
  children: React.ReactNode;
  text: string;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Closes tooltip when touching somewhere else
    const handleTouchOutside = (e: TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setShow(false);
    };
    document.addEventListener('touchstart', handleTouchOutside);
    // Clean up
    return () => document.removeEventListener('touchstart', handleTouchOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative group inline-block" onTouchStart={() => setShow(prev => !prev)}>
      {children}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-menu text-foreground text-sm py-1 px-2 rounded ${show ? 'block' : 'hidden'} group-hover:block`}>
        {text}
      </div>
    </div>
  );
};

export default TooltipWrapper;