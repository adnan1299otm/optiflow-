import React from 'react';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '', 
  id,
  ...props 
}) => {
  return (
    <section id={id} className={`py-24 px-6 ${className}`} {...props}>
      <div className="max-w-[1280px] mx-auto">
        {children}
      </div>
    </section>
  );
};
