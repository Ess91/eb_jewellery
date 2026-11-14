import "./InstagramSection.scss";
import { INSTAGRAM_ITEMS } from "../../data/content";

export default function InstagramSection() {
  return (
    <section className="instagram" id="instagram">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">Tag us, we repost</span>
            <h2 style={{ color: "var(--white)" }}>#EBJEWELLERY</h2>
          </div>
          <p>Wearing something from us? Tag @ebjewellery or use #ebjewellery. We'll only repost with your permission, and never with your name unless you want to.</p>
        </div>
        <div className="instaGrid">
          {INSTAGRAM_ITEMS.map((src, i) => (
            <a
              className="instaItem reveal"
              href="#"
              key={i}
              onClick={(e) => e.preventDefault()}
              aria-label="View post on Instagram"
            >
              <img src={src} alt="Client piece, shared on Instagram" loading="lazy" />
              <div className="overlay">
                <span>View post ↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="instaCta">
          <a href="#" onClick={(e) => e.preventDefault()} className="btn ghost-on-black">Follow @ebjewellery</a>
        </div>
      </div>
    </section>
  );
}
