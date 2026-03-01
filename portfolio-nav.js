(function () {
    // Only add if not inside an iframe to prevent recursive navs
    if (window.self !== window.top) return;

    const navHTML = `
      <style>
        #global-portfolio-nav {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 999999;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            gap: 5px;
            font-family: 'Inter', 'Prompt', sans-serif;
            color: white;
            transition: all 0.3s ease;
            max-height: 40px;
            overflow: hidden;
        }
        #global-portfolio-nav:hover, #global-portfolio-nav.open {
            max-height: 400px;
        }
        #global-portfolio-nav .nav-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            font-weight: 600;
            padding: 0px 5px;
            font-size: 14px;
        }
        #global-portfolio-nav .nav-toggle svg {
            width: 16px; height: 16px; fill: white;
            transition: transform 0.3s;
        }
        #global-portfolio-nav:hover .nav-toggle svg, #global-portfolio-nav.open .nav-toggle svg {
            transform: rotate(180deg);
        }
        #global-portfolio-nav .nav-links {
            display: flex;
            flex-direction: column;
            opacity: 0;
            transition: opacity 0.3s;
            margin-top: 10px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 5px;
        }
        #global-portfolio-nav:hover .nav-links, #global-portfolio-nav.open .nav-links {
            opacity: 1;
        }
        #global-portfolio-nav a {
            color: #94a3b8;
            text-decoration: none;
            padding: 8px 10px;
            border-radius: 6px;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.2s;
        }
        #global-portfolio-nav a:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.1);
        }
        #global-portfolio-nav a.active {
            color: #3b82f6;
            background: rgba(59, 130, 246, 0.1);
            font-weight: 600;
        }
      </style>
      <div id="global-portfolio-nav">
          <div class="nav-toggle">
              <span>🚀 Kantawich Hub</span>
              <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
          </div>
          <div class="nav-links">
              <a href="https://little082003.github.io/"><span style="font-size:16px;">🏠</span> หน้าหลัก (Home)</a>
              <a href="https://little082003.github.io/cv2.html"><span style="font-size:16px;">📄</span> ประวัติ (Resume)</a>
              <a href="https://little082003.github.io/dustboy-3d.html"><span style="font-size:16px;">📡</span> Dustboy 3D Matrix</a>
              <a href="https://little082003.github.io/travel-3d.html"><span style="font-size:16px;">🚂</span> Train Simulation 3D</a>
              <a href="https://little082003.github.io/oracle-racer/"><span style="font-size:16px;">🏁</span> Oracle Racer 3D</a>
              <a href="https://little082003.github.io/floodboy-monitor/"><span style="font-size:16px;">🌊</span> FloodBoy Monitor</a>
              <a href="https://little082003.github.io/portfolio/automation-delivery/index.html"><span style="font-size:16px;">📦</span> Automation Delivery</a>
          </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);

    // Highlight active link
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    document.querySelectorAll('#global-portfolio-nav a').forEach(a => {
        if (currentUrl === a.href || currentUrl + 'index.html' === a.href || a.href + 'index.html' === currentUrl) {
            a.classList.add('active');
        }
    });
})();
