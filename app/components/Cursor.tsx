'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorRing = document.querySelector('.cursor-ring') as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
      if (cursorRing) {
        cursorRing.style.left = e.clientX - 20 + 'px';
        cursorRing.style.top = e.clientY - 20 + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-ring"></div>
    </>
  );
}
