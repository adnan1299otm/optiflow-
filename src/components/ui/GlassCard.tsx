'use client';

import React, { useRef, useState, useCallback } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  interactive = false,
  style = {},
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animRef = useRef<number>(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const currentTilt = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    cancelAnimationFrame(animRef.current);
    const animate = () => {
      currentTilt.current.x = lerp(currentTilt.current.x, -y * 6, 0.12);
      currentTilt.current.y = lerp(currentTilt.current.y, x * 6, 0.12);
      setTilt({ x: currentTilt.current.x, y: currentTilt.current.y });
      const dist = Math.sqrt(
        Math.pow(currentTilt.current.x - (-y * 6), 2) +
        Math.pow(currentTilt.current.y - x * 6, 2)
      );
      if (dist > 0.01) animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  }, [interactive]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    cancelAnimationFrame(animRef.current);
    const animate = () => {
      currentTilt.current.x = lerp(currentTilt.current.x, 0, 0.1);
      currentTilt.current.y = lerp(currentTilt.current.y, 0, 0.1);
      setTilt({ x: currentTilt.current.x, y: currentTilt.current.y });
      if (Math.abs(currentTilt.current.x) > 0.01 || Math.abs(currentTilt.current.y) > 0.01) {
        animRef.current = requestAnimationFrame(animate);
      }
    };
    animRef.current = requestAnimationFrame(animate);
  }, []);

  const baseStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 20,
    // Layer 1: tight contact shadow (card base on surface)
    // Layer 2: soft elevation glow (card floating)
    // Layer 3: ambient outer glow
    boxShadow: isHovered && interactive
      ? '0 1px 2px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(0,212,255,0.06), inset 0 1px 1px rgba(255,255,255,0.08)'
      : '0 1px 2px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.05)',
    transform: interactive
      ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? -6 : 0}px)`
      : undefined,
    transition: interactive ? 'box-shadow 0.3s ease, border-color 0.3s ease' : 'all 0.3s ease',
    borderColor: isHovered && interactive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
    ...style,
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={baseStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Subtle inner highlight — top edge */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
};
