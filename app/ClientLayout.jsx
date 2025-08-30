'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const josRef = useRef(null);

  // Keep options stable and a tad faster by default
  const optionsRef = useRef({
    passive: true,            // smoother scroll perf
    once: true,
    animation: 'fade-up',
    timingFunction: 'ease',
    threshold: 0,
    delay: 0.5,               // was 0.5
    duration: 0.7,            // was 0.7
    scrollDirection: 'down',
    rootMargin: '0% 0% 15% 0%',
  });

  // Init once (dynamic import prevents any SSR bundle weirdness)
  useEffect(() => {
    let disposed = false;

    (async () => {
      const mod = await import('jos-animation');
      if (disposed) return;

      josRef.current = mod.default || mod;

      // Respect reduced motion for UX + CLS
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      const opts = prefersReduced
        ? { ...optionsRef.current, duration: 0, delay: 0 }
        : optionsRef.current;

      josRef.current.init?.(opts);
    })();

    return () => {
      disposed = true;
      try { josRef.current?.destroy?.(); } catch {}
    };
  }, []);

  // Refresh on route changes (after paint)
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      try { josRef.current?.refresh?.(); } catch {}
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return <>{children}</>;
}
