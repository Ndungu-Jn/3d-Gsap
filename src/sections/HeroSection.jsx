import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="public/images/static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 objects-auto scale-100 md:scale-150"
        />

        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className=" hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with Baobab: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug
          </h2>

          <div className="hero-button">
            <p>Taste the Baobab</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
