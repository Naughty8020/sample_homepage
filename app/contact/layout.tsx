// app/about/layout.tsx
import React from 'react';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <div className="p-8 bg-gray-300 min-h-screen">
      <p>
        This is the About Layout wrapping the About Page content.
      </p>
      <h2 className="text-blue-500 text-5xl font-extrabold text-center">
        About Us  
      </h2>
      <div>{children}</div>
    
    </div>
  );
};

export default AboutLayout;

