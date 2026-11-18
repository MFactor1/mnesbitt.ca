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

  // NOTE: these use *function* transforms deliberately. Motion v14 offloads
  // plain range-mapped useTransform chains onto native CSS scroll timelines
  // (ViewTimeline), which mobile Safari doesn't handle — the fade-in/out
  // silently never runs there while the y-move (whose chain contains a
  // function transform, so it stays JS-driven) still animates. Functions
  // can't be compiled to keyframes, so these stay JS-driven everywhere.
  const clamp01 = (v) => v < 0 ? 0 : v > 1 ? 1 : v;
  // Equivalent to useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const opacity = useTransform(scrollYProgress, (p) =>
    Math.min(clamp01(p / 0.1), clamp01((1 - p) / 0.1)));
  // Equivalent to [0,.1,.9,1]→[-1,0,0,1], **5, then [-1,0,0,1]→[50,0,0,-50]
  const y_disp = useTransform(scrollYProgress, (p) => {
    const t = p <= 0.1 ? p / 0.1 - 1 : p >= 0.9 ? (p - 0.9) / 0.1 : 0;
    return -50 * (t ** 5);
  });

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
