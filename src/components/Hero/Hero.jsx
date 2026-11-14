import "./Hero.scss";
import { imgRolexSubmarinerWatch, videoZenithWatch } from "../../data/content";

export default function Hero({ heroSectionRef, heroVideoRef }) {
  return (
    <section className="hero" ref={heroSectionRef}>
      <div
        className="heroMedia"
        style={{ "--hero-fallback-img": `url(${imgRolexSubmarinerWatch})` }}
      >
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={imgRolexSubmarinerWatch}
        >
          <source src={videoZenithWatch} type="video/webm" />
        </video>
      </div>
      <div className="heroScrim" />
      <div className="wrap heroInner">
        <span className="eyebrow">
          No shopfront. No walk-ins. Appointment only
        </span>
        <h1>
          The pieces you want,
          <br />
          without the shop window
        </h1>
        <p className="lede">
          We source pre-owned luxury watches, gold and diamonds at trade prices,
          then show them to you in person, by appointment. No crowds, no retail
          markup, nothing on display.
        </p>
        <div className="heroActions">
          <a href="#booking" className="btn onBlack">
            Book a private slot
          </a>
          <a href="#catalogue" className="btn ghostOnBlack">
            Request the catalogue
          </a>
        </div>
      </div>
      <div className="heroTag">
        <span className="dot" />
        Not a transaction. An experience.
      </div>
    </section>
  );
}
