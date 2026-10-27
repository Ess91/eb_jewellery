import { useEffect } from "react";

export default function useScrollEffects(refs) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // videos
    [refs.heroVideo.current, refs.aboutVideo.current].forEach((v) => {
      if (!v) return;
      if (reduceMotion) {
        v.pause();
        v.removeAttribute("autoplay");
      } else {
        v.play().catch(() => {
          /* autoplay blocked — poster frame stands in */
        });
      }
    });

    // scroll reveal (watches every .reveal under the page root)
    const revealEls = refs.root.current ? refs.root.current.querySelectorAll(".reveal") : [];
    let io;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => io.observe(el));
    }

    // parallax
    const handleScroll = () => {
      if (refs.parallaxImg.current && refs.parallaxBanner.current) {
        const r = refs.parallaxBanner.current.getBoundingClientRect();
        refs.parallaxImg.current.style.transform = `translateY(${r.top * -0.15}px)`;
      }
      if (refs.heroVideo.current && refs.heroSection.current) {
        const r = refs.heroSection.current.getBoundingClientRect();
        refs.heroVideo.current.style.transform = `translateY(${r.top * -0.06}px) scale(1.04)`;
      }
      if (refs.wholesaleImg.current && refs.wholesaleWrap.current) {
        const r = refs.wholesaleWrap.current.getBoundingClientRect();
        refs.wholesaleImg.current.style.transform = `translateY(${r.top * -0.08}px)`;
      }
    };
    if (!reduceMotion) window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
}
