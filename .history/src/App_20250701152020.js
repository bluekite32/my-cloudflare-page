import React, { useRef, useState } from "react";
import logo from "./logo.png";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="App">
      <video
        ref={videoRef}
        className="background-video"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        disablePictureInPicture
      />
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="play-pause-btn"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg width="32" height="32" viewBox="0 0 32 32">
              <rect x="7" y="7" width="6" height="18" rx="2" />
              <rect x="19" y="7" width="6" height="18" rx="2" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32">
              <polygon points="10,7 26,16 10,25" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
