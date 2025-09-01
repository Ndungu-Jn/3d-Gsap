const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className="general-title">
      <div
        style={{
          clippath: "",
          borderColor: borderColor,
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-50`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{ backgroundColor: bg }}
        >
          <h2
            style={{
              color: color,
            }}
          ></h2>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
