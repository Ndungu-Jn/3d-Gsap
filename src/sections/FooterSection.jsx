const FooterSection = () => {
  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1  "
      />
      <div className="2xl:h-[110dvh relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <div className="general-title text-center text-milk py-5">
            <h1>#CHUGRESPONSIBILITY</h1>
          </div>

          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          ></video>

          <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
            <div className="social-btn">
              <img src="./images/yt.svg" alt="" />
            </div>
            <div className="social-btn">
              <img src="./images/insta.svg" alt="" />
            </div>
            <div className="social-btn">
              <img src="./images/tiktok.svg" alt="" />
            </div>
          </div>

          <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium"></div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
