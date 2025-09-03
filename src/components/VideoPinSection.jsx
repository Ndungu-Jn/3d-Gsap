import React from "react";

const VideoPinSection = () => {
  return (
    <section className="vd-pin-section">
      <div style={{}} className="size-full video-box">
        <video
          src="/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        ></video>
        <div className="abs-center md:scale-100 scale-200">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img src="/images/play.svg" alt="" className="size-[3vw]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
