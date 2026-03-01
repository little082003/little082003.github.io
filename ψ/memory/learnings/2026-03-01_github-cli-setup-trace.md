# Lesson Learned: Environment Path Updates and Cross-Platform Trace Adaptation

**Date**: 2026-03-01
**Topic**: CLI Tooling & Auditing

**Lesson**:
When installing system CLI tools (like GitHub CLI `gh`) via package managers (like `winget`) in a live PowerShell agent session, the `$env:Path` is not automatically re-evaluated. Subsequent commands relying on the newly installed binary will fail with "CommandNotFoundException". A necessary workaround is to dynamically stitch the Machine and User paths or restart the terminal session logic inline before invoking the new CLI.

Additionally, Oracle pseudo-commands (like `/trace`) designed for bash-like environments must be logically decomposed by the AI on Windows platforms. Instead of executing the command and failing, the agent should simulate the subagent roles directly using native Windows alternatives: reading `ConsoleHost_history.txt` for recent bash entries, scanning `HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*` for program installation timelines, and utilizing GitHub CLI strictly for the remote footprint scanning.

**Oracle Sync Execution:**
`oracle_learn({ pattern: "Windows Path reload after winget installs and adapting Unix `/trace` scripts to native PowerShell archeology", concepts: ["Environment Variables", "Windows CLI", "gh", "Workaround", "Trace Logistics"], source: "rrr: REPO" })`
