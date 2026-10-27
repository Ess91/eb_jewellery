import "./Hero.scss";
import { imgRolexSubmarinerWatch, videoZenithWatch } from "../../data/content";

export default function Hero({ heroSectionRef, heroVideoRef }) {
  return (
    <section className="hero" ref={heroSectionRef}>
      <div className="heroMedia" style={{ "--hero-fallback-img": `url(${imgRolexSubmarinerWatch})` }}>
        <video ref={heroVideoRef} autoPlay muted loop playsInline poster={imgRolexSubmarinerWatch}>
          <source src={videoZenithWatch} type="video/webm" />
        </video>
      </div>
      <div className="heroScrim" />
      <div className="wrap heroInner">
        <span className="eyebrow">No shopfront. No walk-ins. Appointment only</span>
        <h1>
          Lorem ipsum,
          <br />
          Lorem ipsum dolor
        </h1>
        <p className="lede">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eum culpa voluptates alias perferendis tenetur sapiente odit dolore. Iste tenetur vero iusto ipsam consequuntur porro reprehenderit quisquam ullam dolor assumenda
        </p>
        <div className="heroActions">
          <a href="#booking" className="btn onBlack">Book a private slot</a>
          <a href="#catalogue" className="btn ghostOnBlack">Request the catalogue</a>
        </div>
      </div>
      <div className="heroTag">
        <span className="dot" />
        Not a transaction. An experience.
      </div>
    </section>
  );
}

