import React from "react";
import UnitCanvas from "./components/UnitCanvas.jsx";
import Grid10x10Central from "./components/Grid10x10Central.jsx";
import HudPanel from "./components/HudPanel.jsx";
import SettingsPanel from "./components/SettingsPanel.jsx";
import { createMockBridge } from "./lib/MockBridge.js";

const { emitEvent, emitScore, logs } = createMockBridge();

export default function App() {
  const sessionId = "local-session";
  const taskId = "grid-10x10-central";

  return (
    <div className="app-root">
      <UnitCanvas>
        <Grid10x10Central
          sessionId={sessionId}
          taskId={taskId}
          emitEvent={emitEvent}
          emitScore={emitScore}
        />
        <HudPanel sessionId={sessionId} taskId={taskId} logs={logs} />
        <SettingsPanel />
      </UnitCanvas>
    </div>
  );
}
