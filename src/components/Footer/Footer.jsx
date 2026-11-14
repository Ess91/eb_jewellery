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
              Private sourcing of fine watches and jewellery, by appointment only.
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
          <span>© {new Date().getFullYear()} EB Jewellery. All rights reserved.</span>
          <span>Private studio · Mayfair, London · By appointment only</span>
        </div>
        <div
          className="footerBottom"
          style={{ borderTop: "none", paddingTop: "10px" }}
        >
          <span>
           Concept  project designed and built by <a href="https://www.estherboateng.co.uk" target="_blank" style={{ fontSize: "11px" }}>Esther Boateng</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
