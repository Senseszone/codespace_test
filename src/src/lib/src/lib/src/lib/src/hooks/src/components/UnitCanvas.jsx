import React, { useRef } from "react";
import { PLAYFIELD } from "../lib/constants.js";

export default function UnitCanvas({ children }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="unit-canvas"
      style={{
        width: PLAYFIELD.w,
        height: PLAYFIELD.h,
        position: "relative",
        background: "#0b0f14",
        overflow: "hidden",
        borderRadius: 12,
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)"
      }}
    >
      {children}
    </div>
  );
}
