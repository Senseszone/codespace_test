import React, { useMemo, useRef } from "react";
import { GRID, TILE_SIZE, EVENTS } from "../lib/constants.js";
import { computeGaps } from "../lib/layout.js";
import useResizeObserver from "../hooks/useResizeObserver.js";
import TileButton from "./TileButton.jsx";

export default function Grid10x10Central({ sessionId, taskId, emitEvent, emitScore }) {
  const wrapRef = useRef(null);
  const { width, height } = useResizeObserver(wrapRef);

  const layout = useMemo(() => {
    const { columnGap, rowGap, padX, padY } = computeGaps(
      width || 3520, height || 1840,
      GRID.cols, GRID.rows, TILE_SIZE.w, TILE_SIZE.h
    );
    return { columnGap, rowGap, padX, padY };
  }, [width, height]);

  // pouze signál START → END pro sandbox
  React.useEffect(() => {
    emitEvent({ type: EVENTS.START, data: { sessionId, taskId, grid: "10x10-central" } });
    return () => emitEvent({ type: EVENTS.END, data: { sessionId, taskId } });
  }, [emitEvent, sessionId, taskId]);

  return (
    <div ref={wrapRef} style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          left: layout.padX,
          top: layout.padY,
          width: (TILE_SIZE.w * GRID.cols) + layout.columnGap * (GRID.cols - 1),
          height: (TILE_SIZE.h * GRID.rows) + layout.rowGap * (GRID.rows - 1),
          display: "grid",
          gridTemplateColumns: `repeat(${GRID.cols}, ${TILE_SIZE.w}px)`,
          gridTemplateRows: `repeat(${GRID.rows}, ${TILE_SIZE.h}px)`,
          columnGap: layout.columnGap,
          rowGap: layout.rowGap,
          pointerEvents: "auto"
        }}
      >
        {Array.from({ length: GRID.rows * GRID.cols }, (_, i) => (
          <TileButton key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
