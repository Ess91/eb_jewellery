import "./Catalogue.scss";

import { CATALOGUE_ITEMS } from "../../data/content";

export default function Catalogue() {
  return (
    <section className="catalogue" id="catalogue">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">The catalogue</span>
            <h2 style={{ color: "#FAFAF8" }}>Lorem ipsum dolor sit. amet consectetur.</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium illo enim perspiciatis neque maxime cumque voluptas totam natus. </p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim, tempore optio asperiores ab, blanditiis cumque repellendus.</p>
          <a href="#booking" className="btn onBlack">Request the catalogue</a>
        </div>
      </div>
    </section>
  );
}
