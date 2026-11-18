import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useEffect } from 'react'
import { ForceScrollUpdate } from './ForceScrollUpdate';
import { useStaggerDelay } from './PageStaggerContext';

const ScrollFade = ({ children, style={} }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const y_anim_input = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [-1, 0, 0, 1])
  const y_anim = useTransform(() => y_anim_input.get() ** 5)
  const y_disp = useTransform(y_anim, [-1, 0, 0, 1], [50, 0, 0, -50])

  // Entry stagger: deterministic mount-order delay per page (see
  // PageStaggerContext). Previously this was derived from scrollYProgress at
  // render time, but that value is measured a frame or two after mount, so
  // every line raced with delay=1.0 — producing either a stagger (if the
  // measurement landed in time) or a dead second followed by everything
  // fading in at once.
  const delay = useStaggerDelay();

  useEffect(() => {
    ForceScrollUpdate(); // trigger an initial useScroll() measurement so the
                         // scroll-linked opacity below settles correctly
  }, []);

  return (
    <div ref={ref} style={style}>
      <motion.div
        initial = {{ opacity: 0, y: 50 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ duration: 0.4, delay, ease: "easeOut" }}
      >
        <motion.div
          style = {{ opacity: opacity, y: y_disp }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollFade;
