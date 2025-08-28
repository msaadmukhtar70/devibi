'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import JOS from 'jos-animation';

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const jos_options = {
    passive: false,
    once: true,
    animation: 'fade-up',
    timingFunction: 'ease',
    threshold: 0,
    delay: 0.5,
    duration: 0.7,
    scrollDirection: 'down',
    rootMargin: '0% 0% 15% 0%',
  };

  useEffect(() => {
    JOS.init(jos_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    JOS.refresh();
  }, [pathname]);

  return <>{children}</>;
}