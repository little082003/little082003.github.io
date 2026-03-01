# Lesson Learned: Time-Series Data Aggregation and Deduplication in Chart.js

**Date**: 2026-03-01
**Topic**: Frontend Data Visualization

**Lesson**:
When pulling event logs from a blockchain or high-frequency sensor, directly mapping raw timestamps to a Chart.js dataset can lead to overlapping "spiderweb" lines if multiple events resolve to the exact same time label string (e.g., multiple "10:30 AM" labels).

To ensure continuous, non-overlapping single-line graphs, raw events must be aggregated and deduplicated locally before being passed to the chart object. Using a JavaScript `Map` with strict time-bucketing (`Math.floor(timestamp / INTERVAL_MS) * INTERVAL_MS`) elegantly enforces precisely one aggregated data point (like an average) per discrete interval key.

**Key Syntax**:
```javascript
const INTERVAL_MS = 30 * 60 * 1000;
const dataMap = new Map();
events.forEach(evt => {
  const bucket = Math.floor(evt.timestamp / INTERVAL_MS) * INTERVAL_MS;
  const prev = dataMap.get(bucket) || { sum: 0, count: 0 };
  dataMap.set(bucket, { sum: prev.sum + evt.val, count: prev.count + 1 });
});
```

**Oracle Sync Execution:**
`oracle_learn({ pattern: "Chart.js temporal deduplication via Math.floor and Map intervals", concepts: ["Data Visualization", "Chart.js", "Blockchain Analytics", "JavaScript Map", "BugFix"], source: "rrr: REPO" })`
