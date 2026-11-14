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
            Retail prices carry rent, staff and display costs. We have none of those, so you pay closer to trade price for the same piece.
          </p>
          <ul>
            <li>Trade pricing on watches, gold and diamonds </li>
            <li>Every piece independently valued and fully insured</li>
            <li>Part-exchange welcome on watches and gold</li>
            <li>Discreet delivery across the UK and internationally</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
