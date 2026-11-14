import "./About.scss";
import imgGoldChains from "../../assets/images/gold-chains.jpg";
import { imgRolexSubmarinerWatch, videoZenithWatch } from "../../data/content";

export default function About({ aboutVideoRef }) {
  return (
    <section id="about">
      <div className="aboutRow aboutRowLight">
        <div className="aboutMedia reveal">
          <img src={imgGoldChains} alt="Gold and chains, sourced direct from the trade" />
        </div>
        <div className="aboutCopy reveal">
          <span className="eyebrow">How it's finished</span>
          <h2>
            Every piece checked.
            <br />
            Every piece valued.
          </h2>
          <p>
            Before anything reaches you, it's inspected, cleaned and independently valued. You see the paperwork before you decide, so you know exactly what you're buying.
          </p>
          <a href="#booking" className="linkUnderline">Book a viewing</a>
        </div>
      </div>
      <div className="aboutRow aboutRowDark">
        <div className="aboutCopy reveal">
          <span className="eyebrow">Our story</span>
          <h2>
            Started in the trade.
            <br />
            Built for the buyer.
          </h2>
          <p>
            We started in the trade, sourcing and selling watches, gold and diamonds to jewellers and collectors. Now we bring that same access to you, without the retail markup.  
          </p>
          <p>
            Our founder has over 20 years of experience in the industry, and our team is made up of experts who are passionate about what they do.
          </p>
          <a href="#catalogue" className="linkUnderline">Request the catalogue</a>
        </div>
        <div className="aboutMedia reveal">
          <video ref={aboutVideoRef} autoPlay muted loop playsInline poster={imgRolexSubmarinerWatch}>
            <source src={videoZenithWatch} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
