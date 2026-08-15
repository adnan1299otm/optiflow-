'use client';

import React from 'react';
import { InteractiveSpline } from './InteractiveSpline';

interface SplineSceneProps {
  url?: string;
  followCursor?: boolean;
  followStrength?: number;
  interactive?: boolean;
  growOnProximity?: boolean;
  mobileOptimized?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Placeholder wrapper for the proprietary 3D scene.
 * No external Spline URL is loaded from this component.
 */
export const SplineScene: React.FC<SplineSceneProps> = ({
  interactive = false,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ background: 'transparent', ...style }}
    >
      <InteractiveSpline interactive={interactive} />
    </div>
  );
};
