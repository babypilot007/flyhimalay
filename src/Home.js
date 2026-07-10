import React from "react";
import { useNavigate } from "react-router-dom";

import p6 from "./images/p6.png";
import Nav from "./Nav";
import Maillist from "./Maillist";
import Count from "./Count";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <Count />
      <Nav />

      <div className="App">
        <div className="name">
          <h1>Himalay Jariwala</h1>

          <div className="info">
            <p>CSIP</p>
            <p>CFI / CFII</p>
          </div>
        </div>

        <div className="prodBtn">
          <button
            className="donateBtn"
            onClick={() => navigate("/products")}
          >
            Flying Accessories
          </button>

          <button
            className="donateBtn"
            onClick={() => navigate("/videos")}
          >
            Videos
          </button>
        </div>

        <div className="info_details">
          <div className="dets">
            <p>A Certified Flight Instructor.</p>
            <p>
              <strong>2,500+</strong> hours of dual instruction given.
            </p>
            <p>
              <strong>2,800+</strong> total flight hours.
            </p>
            <p>Currently instructing at:</p>
          </div>

          <div className="img">
            <a
              href="https://www.p6aviation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={p6} alt="P6 Aviation" />
            </a>
          </div>
        </div>

        <Maillist />
      </div>
    </div>
  );
}

export default Home;