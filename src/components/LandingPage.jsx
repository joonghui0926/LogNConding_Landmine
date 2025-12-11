// LandingPage.jsx
// 랜딩 페이지 (Hero / Test Run / About / Document / Try Now)
// 화면 텍스트는 전부 영어, 주석은 한국어입니다.

import React, { useEffect } from "react";
import "./LandingPage.css";

function LandingPage({ onEnterDashboard }) {
  // 스크롤 시 섹션 페이드업 애니메이션 (IntersectionObserver)
  useEffect(() => {
    const sections = document.querySelectorAll(".lp-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("lp-section-visible");
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleTryNow = () => {
    if (onEnterDashboard) onEnterDashboard();
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lp-root">
      {/* 상단 고정 헤더 */}
      <header className="lp-header">
        <div className="lp-brand">
          {/* 여기 나중에 실제 로고 이미지로 교체 가능 */}
          {/* <img src="/your-logo.png" alt="LandMine logo" /> */}
          <span className="lp-logo-text">LandMine</span>
        </div>

        <nav className="lp-nav">
          <button onClick={() => scrollToId("hero")}>Hero</button>
          <button onClick={() => scrollToId("sample")}>Test run</button>
          <button onClick={() => scrollToId("about")}>About</button>
          <button onClick={() => scrollToId("docs")}>Docs</button>
        </nav>

        <button className="lp-nav-cta" onClick={handleTryNow}>
          Try now
        </button>
      </header>

      {/* 전체 스크롤 컨테이너 */}
      <main className="lp-scroll">
        {/* 1. 메인 히어로 섹션 */}
        <section id="hero" className="lp-section lp-hero">
          <div className="lp-hero-inner">
            <div className="lp-hero-left">
              <p className="lp-hero-tag">Autonomous drone landmine demo</p>
              <h1>
                Monitor flights.<br />
                Detect mines.<br />
                See it in one view.
              </h1>
              <p className="lp-hero-text">
                LandMine is a drone system that detects hidden landmines and alerts operators in real time. It maps the drone’s flight path and marks suspicious spots to support safer demining work.
              </p>

              <div className="lp-hero-highlights">
                <div className="lp-pill">Flight map</div>
                <div className="lp-pill">Detection events</div>
                <div className="lp-pill">Drone status</div>
              </div>

              <div className="lp-hero-actions">
                <button className="lp-btn-primary" onClick={handleTryNow}>
                  Open demo dashboard
                </button>
                <button
                  className="lp-btn-ghost"
                  onClick={() => scrollToId("sample")}
                >
                  See test run sample
                </button>
              </div>
            </div>

            <div className="lp-hero-right">
              {/* 드론 비행 궤적 영상/애니메이션 자리 */}
              <div
                className="lp-hero-video"
                aria-label="Drone flight trajectory video or animation placeholder"
              >
                Drone flight trajectory video / animation placeholder
              </div>

              <div className="lp-hero-thumbs">
                <div
                  className="lp-thumb"
                  aria-label="Main dashboard screenshot placeholder"
                >
                  Main dashboard screenshot (map + list)
                </div>
                <div
                  className="lp-thumb"
                  aria-label="Secondary dashboard screenshot placeholder"
                >
                  Drone status screen screenshot
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Test Run Sample 섹션 */}
        <section id="sample" className="lp-section lp-sample">
          <div className="lp-section-inner">
            <div className="lp-section-header">
              <h2>Test run sample</h2>
              <p>
                A simple mission example: from take-off, to detection, to
                operator review. All data in the demo is dummy, but the flow is
                close to a real scenario.
              </p>
            </div>

            <div className="lp-sample-layout">
              <div
                className="lp-sample-media"
                aria-label="Simulation or test run video placeholder"
              >
                Simulation / test run video placeholder
              </div>

              <div className="lp-sample-steps">
                <div className="lp-step-row">
                  <div className="lp-step-number">1</div>
                  <div className="lp-step-text">
                    <h3>Drone flight & scan</h3>
                    <p>
                      The drone follows a planned route and scans the ground.
                      Each scanned segment is drawn as a path on the map.
                    </p>
                  </div>
                </div>
                <div className="lp-step-row">
                  <div className="lp-step-number">2</div>
                  <div className="lp-step-text">
                    <h3>Detection points</h3>
                    <p>
                      Potential landmine locations appear as pins with time,
                      latitude, longitude, and status tags such as{" "}
                      <span className="lp-inline-tag">armed</span>,{" "}
                      <span className="lp-inline-tag">cleared</span>, or{" "}
                      <span className="lp-inline-tag">false alarm</span>.
                    </p>
                  </div>
                </div>
                <div className="lp-step-row">
                  <div className="lp-step-number">3</div>
                  <div className="lp-step-text">
                    <h3>Operator review</h3>
                    <p>
                      Operators check the detection list, filter by mine state,
                      and update entries once a site is cleared or confirmed as
                      a false positive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lp-sample-thumbs-row">
              <div
                className="lp-image-card"
                aria-label="Map view screen placeholder"
              >
                Map view image (flight path & pins)
              </div>
              <div
                className="lp-image-card"
                aria-label="Detection list screen placeholder"
              >
                Detection list image (time-ordered events)
              </div>
            </div>
          </div>
        </section>

        {/* 3. About 섹션 */}
        <section id="about" className="lp-section lp-about">
          <div className="lp-section-inner">
            <div className="lp-section-header">
              <h2>About the project</h2>
              <p>
                LandMine is a drone-powered landmine detection project < br /> that identifies hidden mines from the air and alerts operators in real time.
              </p>
            </div>

            <div className="lp-about-grid">
              <div className="lp-about-card">
                <div className="lp-badge">1</div>
                <h3>Purpose</h3>
                <p>
                  Develop a drone-based method for spotting buried landmines and warning operators quickly. The project aims to improve safety in mine-affected areas by providing reliable aerial detection and clear visual feedback.
                </p>
              </div>
              <div className="lp-about-card">
                <div className="lp-badge">2</div>
                <h3>Use cases</h3>
                <p>
                  Applicable to military demining, disaster recovery in post-conflict zones, humanitarian mine-action missions, and exploration of high-risk areas that are difficult or dangerous to enter on foot.
                </p>
              </div>
              <div className="lp-about-card">
                <div className="lp-badge">3</div>
                <h3>Current stage</h3>
                <p>
                  The system models how detection points, flight paths, and mine status updates could work in a real deployment, and is ready to connect to future sensors or backend services.
                </p>
              </div>
            </div>

            <div className="lp-about-images">
              <div
                className="lp-image-card"
                aria-label="Photo placeholder of drone in field"
              >
                Photo placeholder: drone flying over field
              </div>
              <div
                className="lp-image-card"
                aria-label="Photo placeholder of operators monitoring dashboard"
              >
                Photo placeholder: operators watching a dashboard
              </div>
            </div>
          </div>
        </section>

        {/* 4. Document 섹션 (드론 프로젝트 기술 설명) */}
        <section id="docs" className="lp-section lp-docs">
          <div className="lp-section-inner">
            <div className="lp-section-header">
              <h2>Docs: drone system overview</h2>
              <p>
                A short technical summary of how the LandMine drone project works:
                from flight planning, to data formats, to how alerts reach the operator.
              </p>
            </div>

            <div className="lp-docs-grid">
              {/* 1. Mission pipeline */}
              <div className="lp-doc-card">
                <div className="lp-badge lp-badge-doc">1</div>
                <h3>Mission pipeline</h3>
                <p>
                  The drone follows a planned route, scans the ground, and sends
                  back GPS coordinates and detection signals. Each flight can be
                  replayed later to review where it flew and what it found.
                </p>
                <p className="lp-doc-note">
                  In the demo, routes and detections are simulated. In a real
                  setup, this would be connected to the drone&apos;s autopilot
                  and onboard sensors.
                </p>
              </div>

              {/* 2. Drone data & alerts */}
              <div className="lp-doc-card">
                <div className="lp-badge lp-badge-doc">2</div>
                <h3>Drone data &amp; alerts</h3>
                <p>
                  The drone sends JSON data that includes time, latitude,
                  longitude, and a detection flag. When a suspicious point is
                  detected, it is turned into a pin and an alert for the operator.
                </p>
                <p className="lp-doc-note">
                  Additional fields like drone ID, battery level, and confidence
                  score can be added so multiple drones can be monitored at once.
                </p>
              </div>

              {/* 3. Dashboard & roles */}
              <div className="lp-doc-card">
                <div className="lp-badge lp-badge-doc">3</div>
                <h3>Dashboard &amp; user roles</h3>
                <p>
                  The dashboard shows a map view and a list view of detection
                  events. Operators use the guest view to monitor flights,
                  while admins can update mine states and drone health.
                </p>
                <p className="lp-doc-note">
                  All data in this prototype is sample data, but the structure
                  is ready to be wired to real APIs or mission logs later.
                </p>
              </div>
            </div>

            {/* 참고 자료 링크 영역 */}
            <div className="lp-docs-links">
              <h3>References &amp; reading</h3>
              <p className="lp-doc-note">
                Useful resources about drones, landmine detection, and system design.
              </p>
              <ol className="lp-doc-links-list">
                <li className="lp-doc-link-item">
                  <a
                    href="https://example.com/paper-1"
                    target="_blank"
                    rel="noreferrer"
                    className="lp-doc-link-main"
                  >
                    Example paper or article
                  </a>
                  <span className="lp-doc-link-desc">
                    Short note about why this reference is relevant to the project.
                  </span>
                </li>
                <li className="lp-doc-link-item">
                  <a
                    href="https://example.com/tool-1"
                    target="_blank"
                    rel="noreferrer"
                    className="lp-doc-link-main"
                  >
                    Example drone / mapping tool
                  </a>
                  <span className="lp-doc-link-desc">
                    For instance, a mapping SDK, autopilot docs, or dataset.
                  </span>
                </li>
                <li className="lp-doc-link-item">
                  <a
                    href="https://example.com/dataset-1"
                    target="_blank"
                    rel="noreferrer"
                    className="lp-doc-link-main"
                  >
                    Example dataset or guideline
                  </a>
                  <span className="lp-doc-link-desc">
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>


        {/* 5. Try Now 섹션 (CTA) */}
        <section className="lp-section lp-cta">
          <div className="lp-cta-inner">
            <h2>Try the demo now</h2>
            <p>
              Explore how the drone-based landmine detection system works using safe
              sample data. See flight paths, alerts, and detection logs just like an
              operator would.
            </p>
            <button className="lp-btn-primary lp-cta-btn" onClick={handleTryNow}>
              Go to login & dashboard
            </button>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="lp-footer">
          <span>© {new Date().getFullYear()} LandMine · demo prototype</span>
        </footer>
      </main>
    </div>
  );
}

export default LandingPage;
