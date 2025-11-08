export function createMockBridge() {
  const logs = [];
  function log(line) { logs.push(line); console.log(line); }

  function emitEvent(evt) {
    const payload = { ...evt, ts: evt?.ts ?? Date.now() };
    log({ kind: "event", payload });
  }

  function emitScore(score) {
    const payload = { ...score, ts: Date.now() };
    log({ kind: "score", payload });
  }

  return { emitEvent, emitScore, logs };
}
