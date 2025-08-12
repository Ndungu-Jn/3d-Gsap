const HeroSection = () => {
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="public/images/hero-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 objects-auto scale-100 md:scale-150"
        />

        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className=" hero-title">Freaking Delicious</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
