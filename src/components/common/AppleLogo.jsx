import React from 'react';

export const AppleLogo = ({ className = 'w-5 h-5' }) => {
  return (
    <img
      src="/apple-logo.png"
      alt="Apple"
      className={`${className} object-contain shrink-0`}
      loading="eager"
    />
  );
};
