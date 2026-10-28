import "./Footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footerTop">
          <div>
            <div className="footerLogo">
              <span className="mark" />
              EB Jewellery
            </div>
            <p style={{ maxWidth: "260px" }}>
              Fine jewellery at wholesale prices. Private appointments only — no
              shopfront, no walk-ins.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#catalogue">Catalogue</a>
            <a href="#wholesale">Wholesale pricing</a>
            <a href="#clients">Clients</a>
          </div>
          <div>
            <h4>Client care</h4>
            <a href="#booking">Book an appointment</a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Sell or part-exchange
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Insurance valuations
            </a>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Instagram
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              TikTok
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              WhatsApp enquiries
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <span>© {new Date().getFullYear()} EB Jewellery. All rights reserved. Designed & Built by <a href="https://www.estherboateng.co.uk" target="_blank">Esther Boateng</a></span>
          <span>Private studio · Mayfair, London · By appointment only</span>
        </div>
        <div
          className="footerBottom"
          style={{ borderTop: "none", paddingTop: "10px" }}
        >
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            asperiores amet non quaerat sit repudiandae vitae unde explicabo
            ipsam! Illum sint in impedit dignissimos. Illo quidem consequuntur
            nemo iure cum!
          </span>
        </div>
      </div>
    </footer>
  );
}
