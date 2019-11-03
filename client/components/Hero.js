const Hero = () => {
  return (
    <>
      <div className="hero" style={styles.hero}></div>
      <div style={styles.overlayDiv}></div>
    </>
  );
};

const styles = {
  hero: {
    background: 'url("../static/img/bus.jpg")',
    height: "92vh",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover"
  },
  overlayDiv: {
    height: "92vh",
    background: "#000",
    width: "100%",
    position: "absolute",
    top: "4rem",
    left: 0,
    zIndex: 0,
    opacity: 0.4
  }
};

export default Hero;
