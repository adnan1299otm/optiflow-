'use client';

interface InteractiveSplineProps {
  sceneUrl?: string;
  followCursor?: boolean;
  followStrength?: number;
  interactive?: boolean;
  growOnProximity?: boolean;
}

/**
 * Placeholder for the proprietary 3D scene.
 * The original external Spline scene connection has intentionally been removed.
 */
export function InteractiveSpline({
  interactive = true,
}: InteractiveSplineProps) {
  return (
    <div
      className={`w-full h-full rounded-2xl bg-gradient-to-br from-cyan-400/5 via-purple-500/10 to-pink-500/5 ${interactive ? '' : 'pointer-events-none select-none'}`}
      aria-label="3D scene placeholder"
    />
  );
}
