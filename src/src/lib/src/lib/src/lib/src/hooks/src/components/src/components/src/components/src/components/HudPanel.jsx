import React from "react";

export default function HudPanel({ sessionId, taskId, logs }) {
  return (
    <div style={{
      position: "absolute", right: 16, top: 16, width: 420,
      background: "rgba(0,0,0,0.45)", color: "#dbe2ee",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: 12, padding: 12, borderRadius: 10, maxHeight: 400, overflow: "auto"
    }}>
      <div><strong>Session:</strong> {sessionId}</div>
      <div><strong>Task:</strong> {taskId}</div>
      <div style={{ marginTop: 8, opacity: 0.8 }}>Event log (lokální):</div>
      {logs.slice(-12).map((l, i) => (
        <pre key={i} style={{ margin: 0, whiteSpace: "pre-wrap" }}>
          {JSON.stringify(l)}
        </pre>
      ))}
    </div>
  );
}
