import { createContext, useContext, useState } from 'react';

// Per-page counter that hands each ScrollFade on a page a stable mount-order
// index, used to stagger its entry animation. The Provider value is recreated
// on every navigation (see App.jsx), which resets the count for the new page.
export const PageStaggerContext = createContext(null);
PageStaggerContext.displayName = 'PageStaggerContext';

// Set by Collapsible: its children stay mounted while height-collapsed (so
// they claim their stagger index at page-mount), but they are invisible. They
// must not consume indices, or a long page like Projects spends its whole
// stagger budget on hidden text and every visible line waits for the cap.
export const StaggerHiddenContext = createContext(false);
StaggerHiddenContext.displayName = 'StaggerHiddenContext';

const STEP_SECONDS = 0.03;  // delay between successive lines
const MAX_SECONDS = 1.05;  // cap; mirrors the old max stagger so deep page
                           // items never wait noticeably longer

// Returns this ScrollFade's entry delay (seconds). The index is claimed once
// on first render, in DOM (mount) order, so the cascade is deterministic.
// Content inside a Collapsible (hidden at mount) gets no index at all.
export function useStaggerDelay() {
  const counter = useContext(PageStaggerContext);
  const hidden = useContext(StaggerHiddenContext);
  const [index] = useState(() => (counter && !hidden ? counter.current++ : -1));
  return index < 0 ? 0 : Math.min(index * STEP_SECONDS, MAX_SECONDS);
}
