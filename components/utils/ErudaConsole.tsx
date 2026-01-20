'use client';

import React, { useEffect } from 'react';

const ErudaConsole = () => {
  useEffect(() => {
    // Only run in the browser environment and during development
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      import('eruda').then((eruda) => {
        eruda.default.init();
      });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ErudaConsole;