---
query: "oracle-landing psru workshop deploy"
target: "6715247015"
mode: smart
timestamp: 2026-03-01 14:20
---

# Trace: Oracle Landing Page & PSRU Workshop

**Target**: d:\6715247015
**Mode**: smart (context จากเซสชัน)
**เวลา**: 2026-03-01 14:20 GMT+7

---

## ไฟล์ที่พบ (Files Found)

| ไฟล์ | คำอธิบาย |
|---|---|
| `little-oracle/docs/index.html` | Oracle Landing Page หลัก (single-file) |
| `index.html` | Portfolio หลัก — restored + updated |
| `cv2.html` | CV ที่อัปเดตแล้วพร้อม workshop projects |
| `portfolio/oracle-racer/` | Oracle Racer 3D game |
| `portfolio/floodboy-webapp/` | FloodBoy Blockchain Monitor |

## Git History ที่เกี่ยวข้อง

| Commit | คำอธิบาย |
|---|---|
| `a34d192` | fix: update hero cta link to cv2.html |
| `1451dda` | deploy: inject global portfolio navigation |
| `9bab299` | deploy: update portfolio with Oracle Racer 3D |
| `83e425a` | docs: add full-day rrr retrospective for PSRU workshop |
| `43bc2cb` | feat: add updated CV with PSRU workshop projects |

## GitHub Issues/PRs

- [Oracle-Landing/landing-oracle #10](https://github.com/Oracle-Landing/landing-oracle/issues/10) — PSRU Landing Page Workshop, claim subdomain
- 🔔 **ต้องการ action**: โพสต์ claim comment บน issue #10

## Cross-Repo Matches

| Repo | Note |
|---|---|
| `little082003/little-oracle` | Oracle Landing Page repo ใหม่ — deployed บน Vercel |
| `Oracle-Landing/landing-oracle` | Template/reference repo สำหรับ workshop |

## Oracle Memory

- Wave animation pattern: ใช้ Canvas 2D, multi-layer, slow speed สำหรับ deep-sea aesthetic
- Portfolio navigation: `portfolio-nav.js` inject เป็น script global
- Cloudflare DNS blocker: `cloudflare.app` = system domain, ไม่ใช่ user domain

## สรุป

**ค้นพบ**:
- Oracle Landing Page สร้างและ deploy สำเร็จ: https://little-oracle-rho.vercel.app/
- DNS ติดขัดเพราะ Cloudflare account ว่างและ domain ไม่ถูกต้อง
- subdomain จะอยู่ใต้ `buildwithoracle.com` — ต้อง claim ผ่าน GitHub Issues

**ขั้นตอนต่อไป**:
1. โพสต์ claim บน Issues #10
2. รอ organizers approve
3. Setup DNS records เมื่อได้รับ
