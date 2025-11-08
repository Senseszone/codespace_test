import React from "react";
export default function TileButton({ index }) {
  return (
    <button
      type="button"
      style={{
        width: 166, height: 166,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.15)",
        background: "linear-gradient(180deg, #1a2230 0%, #0f1520 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
        cursor: "pointer"
      }}
      aria-label={`tile-${index}`}
      onClick={() => {}}
    />
  );
}
