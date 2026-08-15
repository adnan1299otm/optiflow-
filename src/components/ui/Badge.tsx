import React from 'react';

export type BadgeColor = 'red' | 'cyan' | 'purple' | 'pink' | 'green' | 'default';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: BadgeColor;
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'default', className = '', ...props }) => {
  const colorStyles = {
    red: "bg-[#e63946]/10 text-[#e63946] border-[#e63946]/20",
    cyan: "bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20",
    purple: "bg-[#9d4edd]/10 text-[#9d4edd] border-[#9d4edd]/20",
    pink: "bg-[#ff006e]/10 text-[#ff006e] border-[#ff006e]/20",
    green: "bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/20",
    default: "bg-white/5 text-white/80 border-white/10"
  };

  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
