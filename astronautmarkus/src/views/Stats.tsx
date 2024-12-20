import React from 'react';

import './Stats.css';

const Stats = () => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">📊 My Coding Stats</h1>
        <p>📈 Insights from Wakatime</p>
        <div className="content">
          <ul className="project-list">

            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">💻 Most Used Languages</h2>
                <div className="project-text mb-4 mt-4">
                  <p>
                    These are the programming languages I use the most, according to Wakatime.
                  </p>
                </div>
                <div className="project-image text-center">
                  <figure className="wakatime-figure">
                    <embed src="https://wakatime.com/share/@AstronautMarkus/3b2f0da6-869d-4bae-a0d5-d2d51e599c25.svg"></embed>
                  </figure>
                </div>
              </div>
            </li>

            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">⏳ Coding Activity</h2>
                <div className="project-text mb-4 mt-4">
                    <p>
                    Amount of time spent coding in the last time, acording to Wakatime.
                    </p>
                </div>
                <div className="project-image text-center justify-content-center">
                  <figure>
                  <embed src="https://wakatime.com/share/@AstronautMarkus/50847ea1-6781-4b54-a084-0c6897655574.svg"></embed>
                  </figure>
                </div>
              </div>
            </li>

            <li className="project-item">
              <div className="project-details">
              <h2 className="project-title">🖥️ Operating Systems</h2>
              <div className="project-text mb-4 mt-4">
                <p>
                The operating systems I use the most, according to Wakatime.
                </p>
              </div>
              <div className="project-image text-center justify-content-center">
                <figure>
                <embed src="https://wakatime.com/share/@AstronautMarkus/2b2f807b-c1a4-4371-82bf-1a338510015e.svg"></embed>
                </figure>
              </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
