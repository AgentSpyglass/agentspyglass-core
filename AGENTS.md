# @agentspyglass/core

## What

Shared wire event types consumed by both the OpenCode plugin and the desktop app.

## Rules

- Source-only TypeScript. No build step. `main: src/index.ts`.
- Only wire-format types belong here. No UI types, no business logic.
- If you add a type, re-export it from `src/index.ts`.

## Types

| Type | Source | Purpose |
|------|--------|---------|
| `Event` | event.definitions.ts | Base: `type` + `sessionId` |
| `AgentEvent` | event.definitions.ts | Agent joined/prompted |
| `ToolEvent` | event.definitions.ts | Tool call lifecycle |
| `StatusEvent` | event.definitions.ts | Step status changes |
| `MessageEvent` | event.definitions.ts | Text content |
| `EventType` | event.definitions.ts | Union: `'agent' \| 'tool' \| 'status' \| 'message'` |
| `SessionHold` | session.model.ts | Tracked session metadata |
