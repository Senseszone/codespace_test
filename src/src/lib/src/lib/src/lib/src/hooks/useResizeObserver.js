import { useEffect, useState } from "react";
export default function useResizeObserver(ref) {
  const [rect, setRect] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (!ref.current) return;
    const obs = new ResizeObserver(entries => {
      for (const e of entries) setRect({ width: e.contentRect.width, height: e.contentRect.height });
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return rect;
}
