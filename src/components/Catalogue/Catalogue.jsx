import "./Catalogue.scss";

import { CATALOGUE_ITEMS } from "../../data/content";

export default function Catalogue() {
  return (
    <section className="catalogue" id="catalogue">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">The catalogue</span>
            <h2 style={{ color: "#FAFAF8" }}>The catalogue isn't public.</h2>
          </div>
          <p>What you see here is a small sample. The full catalogue changes every week and goes to clients who request this.</p>
        </div>
        <div className="catGrid">
          {CATALOGUE_ITEMS.map((item) => (
            <div className="catItem reveal" key={item.sku}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="sku">{item.sku}</span>
              <div className="scrim" />
              <div className="content">
                <span className="locked">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="catalogueCta">
          <p>Looking for a specific piece reference? Request the catalogue and tell us what you have in mind.</p>
          <a href="#booking" className="btn onBlack">Request the catalogue</a>
        </div>
      </div>
    </section>
  );
}
