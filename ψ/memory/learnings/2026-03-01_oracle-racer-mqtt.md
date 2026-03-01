# Lesson Learned: Simulating NoSQL Stores with MQTT Retain Messages

**Date**: 2026-03-01
**Topic**: Architecture & Real-Time Sync

**Lesson**:
When building public real-time dashboards or leaderboards (e.g. Hall of Fame for the Oracle Racer game), developers often instinctively turn to complex backend stacks involving REST APIs, WebSockets, and a NoSQL/SQL database. This adds significant maintenance overhead.

By utilizing the MQTT protocol with a public broker (over WSS), we can simulate a real-time event system. But more importantly, we can emulate "persistent state" simply by utilizing the `retain: true` flag upon message publish. This ensures the broker keeps the last submitted payload for a specific topic in memory. When any new client subsequently subscribes to that topic, it automatically and instantly receives the leaderboard payload. This effectively eliminates the need for an external DB lookup for simple array/JSON-based global states.

**Oracle Sync Execution:**
`oracle_learn({ pattern: "Utilizing MQTT {retain:true} flag to mimic persistent NoSQL database states for Leaderboards and public Dashboards", concepts: ["MQTT", "Serverless", "Realtime Web", "Retained Messages", "Architecture Optimization"], source: "rrr: REPO" })`
