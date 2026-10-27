import "./Wholesale.scss";
import imgEnsembleMontresRolex from "../../assets/images/ensemble-montres-rolex.jpg";

export default function Wholesale({ wholesaleWrapRef, wholesaleImgRef }) {
  return (
    <section id="wholesale">
      <div className="wrap wholesaleGrid">
        <div className="wholesaleImage reveal" ref={wholesaleWrapRef}>
          <img
            ref={wholesaleImgRef}
            src={imgEnsembleMontresRolex}
            alt="Selection of watches, private collection"
            loading="lazy"
          />
        </div>
        <div className="wholesaleCopy reveal">
          <span className="eyebrow">Wholesale, not retail</span>
          <h2
            style={{
              fontFamily: "var(--display)",
              textTransform: "uppercase",
              fontSize: "clamp(28px,3.6vw,40px)",
              margin: "16px 0 20px",
              lineHeight: 1.05,
            }}
          >
            You're not paying for a shop window.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi
            repellendus modi corrupti sint nam sapiente alias similique velit!
            Rem nemo ad officiis. Esse unde eligendi quas nostrum ad nulla.
          </p>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
