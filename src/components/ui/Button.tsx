'use client';

import React, { useRef, useState, useCallback } from 'react';
import Link from 'next/link';

interface RippleItem {
  id: number;
  x: number;
  y: number;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_STYLES: Record<string, React.CSSProperties> = {
  primary: {
    background: 'linear-gradient(135deg, #e63946 0%, #ff006e 100%)',
    color: '#ffffff',
    border: 'none',
    boxShadow: '0 2px 8px rgba(230, 57, 70, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
  },
  secondary: {
    background: 'transparent',
    color: '#00d4ff',
    border: '2px solid #00d4ff',
    boxShadow: '0 0 0px rgba(0, 212, 255, 0)',
  },
  ghost: {
    background: 'rgba(255,255,255,0.04)',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: 'none',
  },
};

const VARIANT_HOVER_STYLES: Record<string, React.CSSProperties> = {
  primary: {
    transform: 'translateY(-2px) scale(1.04)',
    boxShadow: '0 8px 24px rgba(230, 57, 70, 0.55), 0 2px 8px rgba(230, 57, 70, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
    filter: 'brightness(1.08)',
  },
  secondary: {
    transform: 'translateY(-2px) scale(1.04)',
    background: 'rgba(0, 212, 255, 0.08)',
    boxShadow: '0 8px 24px rgba(0, 212, 255, 0.35), 0 0 0 1px rgba(0,212,255,0.5)',
  },
  ghost: {
    transform: 'translateY(-2px) scale(1.04)',
    background: 'rgba(255,255,255,0.09)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
  },
};

const VARIANT_ACTIVE_STYLES: Record<string, React.CSSProperties> = {
  primary: {
    transform: 'translateY(1px) scale(0.97)',
    boxShadow: '0 1px 4px rgba(230, 57, 70, 0.3), inset 0 2px 4px rgba(0,0,0,0.2)',
    filter: 'brightness(0.95)',
  },
  secondary: {
    transform: 'translateY(1px) scale(0.97)',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
  },
  ghost: {
    transform: 'translateY(1px) scale(0.97)',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15)',
  },
};

const SIZE_CLASSES: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className = '', onClick, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [ripples, setRipples] = useState<RippleItem[]>([]);
    const rippleIdRef = useRef(0);

    const addRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = ++rippleIdRef.current;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    }, []);

    const currentStyle: React.CSSProperties = {
      ...VARIANT_STYLES[variant],
      ...(isActive
        ? VARIANT_ACTIVE_STYLES[variant]
        : isHovered
        ? VARIANT_HOVER_STYLES[variant]
        : {}),
      transition: 'all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      outline: 'none',
    };

    const rippleColor =
      variant === 'primary'
        ? 'rgba(255,255,255,0.25)'
        : variant === 'secondary'
        ? 'rgba(0, 212, 255, 0.25)'
        : 'rgba(255,255,255,0.15)';

    const baseClass = `inline-flex items-center justify-center rounded-xl whitespace-nowrap ${SIZE_CLASSES[size]} ${className}`;

    const interactiveProps = {
      style: currentStyle,
      className: baseClass,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => { setIsHovered(false); setIsActive(false); },
      onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
        setIsActive(true);
        addRipple(e);
      },
      onMouseUp: () => setIsActive(false),
      onTouchStart: () => setIsActive(true),
      onTouchEnd: () => setIsActive(false),
    };

    const rippleElements = ripples.map(({ id, x, y }) => (
      <span
        key={id}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: rippleColor,
          transform: 'translate(-50%, -50%) scale(0)',
          animation: 'ripple-expand 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
          pointerEvents: 'none',
        }}
      />
    ));

    const content = (
      <>
        {rippleElements}
        <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(interactiveProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          onClick={(e) => {
            addRipple(e as unknown as React.MouseEvent<HTMLElement>);
            (onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined)?.(e);
          }}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
        {...(interactiveProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
        onMouseDown={(e) => {
          setIsActive(true);
          addRipple(e as unknown as React.MouseEvent<HTMLElement>);
          props.onMouseDown?.(e);
        }}
        onMouseUp={(e) => { setIsActive(false); props.onMouseUp?.(e); }}
        onClick={(e) => { addRipple(e as unknown as React.MouseEvent<HTMLElement>); onClick?.(e); }}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
