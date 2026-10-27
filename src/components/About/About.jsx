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
            Lorem ipsum.
            <br />
            Ipsum dolor.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum numquam aliquam, odit tenetur possimus officia illum voluptatibus quo iste perferendis itaque est vero non eos? Unde aperiam doloremque minima qui.
          </p>
          <p>Lorem ipsum dolor sit. Amet consectetur adipisicing elit.</p>
          <a href="#booking" className="linkUnderline">Book a viewing</a>
        </div>
      </div>
      <div className="aboutRow aboutRowDark">
        <div className="aboutCopy reveal">
          <span className="eyebrow">Our story</span>
          <h2>
            Lorem ipsum.
            <br />
            Lorem ipsum dolor.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae natus perspiciatis delectus. Ullam, delectus dicta. Harum corrupti minus quasi ad unde, quibusdam adipisci minima dolores eligendi porro doloremque optio pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis ipsum dolores.
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
