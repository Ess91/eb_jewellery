import "./ParallaxBanner.scss";
import imgRolexSubmariner from "../../assets/images/rolex.jpg";

export default function ParallaxBanner({ parallaxBannerRef, parallaxImgRef }) {
  return (
    <section className="parallaxBanner" ref={parallaxBannerRef}>
      <img ref={parallaxImgRef} src={imgRolexSubmariner} alt="" />
      <div className="pbContent reveal">
        <span>The whole point</span>
        <h2>
          Lorem ipsum dolor sit amet.
          <br />
          Lorem ipsum dolor.
        </h2>
      </div>
    </section>
  );
}
