import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkTouchOrMobile = () => {
      const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobileOrTouch(isTouch || isSmallScreen);
    };

    checkTouchOrMobile();
    window.addEventListener('resize', checkTouchOrMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="gallery"]')) {
        setIsHoveringGallery(true);
      } else {
        setIsHoveringGallery(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkTouchOrMobile);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === 'undefined' || isMobileOrTouch) return null;

  return (
    <motion.div
      className="hidden lg:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0
      }}
    >
      <motion.div
        initial={false}
        animate={{
          width: isHoveringGallery ? 80 : 16,
          height: isHoveringGallery ? 80 : 16,
          backgroundColor: isHoveringGallery ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
          x: '-50%',
          y: '-50%'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="rounded-full flex items-center justify-center overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHoveringGallery ? 1 : 0, scale: isHoveringGallery ? 1 : 0 }}
          className="text-black font-semibold text-sm tracking-wider uppercase"
        >
          View
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
