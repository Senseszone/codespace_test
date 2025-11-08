import React from "react";
export default function SettingsPanel() {
  return (
    <div style={{
      position: "absolute", left: 16, top: 16,
      background: "rgba(255,255,255,0.06)", color: "#e8eef9",
      padding: 10, borderRadius: 10, fontSize: 12
    }}>
      <div><strong>Settings</strong></div>
      <div>Mode: WAIT/CATCH (zatím pouze layout)</div>
      <div>Tile size: 166×166 px (fixní)</div>
      <div>Grid: 10×10, mezery adaptivně</div>
    </div>
  );
}
