# Windows CLI Command Execution Reliability
**Source**: rrr: oracle-skills-cli `2026-03-01`

ข้อค้นพบที่สำคัญจากภารกิจติดตั้งระบบและการสำรวจสคริปต์บนระบบปฏิบัติการ Windows:

1. **Path Resolution Problem**: การโหลดไบนารีเข้าระบบ เช่น การติดตั้ง `bun` หรือ `ghq` แล้วใช้งานคำสั่งใหม่นั้นใน process เดียวกันทันที จะเกิดปัญหาประมวลผลคำสั่งไม่ได้ วิธีแก้ไขที่ชัวร์ที่สุดสำหรับการทำงานในฐานะ Agent คือ **การประมวลผลจากการอ้างอิง Absolute Path** (เช่น `$env:USERPROFILE\.bun\bin\ghq.exe` แทนที่จะเป็น `ghq` เฉยๆ)
2. **Flag Handling In Third-Party CLIs**: เครื่องมือหลายตัวมี flag สำหรับป้อนเป้าหมายหลายอย่างพร้อมกัน เช่น `-a a,b` ซึงมักเกิดปัญหา parser error หรือความไม่เข้ากัน (Incompatible target types) ทางแก้ง่ายๆ คือการทำ **Command Splitting (แยกคำสั่ง)** ช่วยเซฟเวลาและมีโอกาสผ่านฉลุยมากกว่าการทดลองปรับ format ของ argument

> `oracle_learn({ pattern: "Always use absolute executable paths instead of relying on updated $env:PATH when chaining commands dynamically on Windows.", concepts: ["windows", "powershell", "path-resolution", "cli"], source: "rrr: oracle-skills-cli" })`
