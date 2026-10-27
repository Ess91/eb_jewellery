import "./Testimonials.scss";


export default function Testimonials() {
  return (
    <section className="testimonials" id="clients">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">Who we work with</span>
            <h2>
              Lorem lorem .
              <br />
              psum dolor sit.
            </h2>
          </div>
          <p>Lorem lorem ipsum dolor sit amet consectetur adipiscing.</p>
        </div>
        <div className="quoteTrack">
          <div className="quote reveal">
            <p className="q">"Lorem lorem ipsum dolor sit amet consectetur adipiscing elit sed nulla minus dolor animi similique."</p>
            <span className="who">— Repeat client, three years</span>
          </div>
          <div className="quote reveal">
            <p className="q">"Lorem lorem ipsum dolor sit amet consectetur adipiscing elit sed nulla minus dolor animi similique."</p>
            <span className="who">— First-time client</span>
          </div>
          <div className="quote reveal">
            <p className="q">"Lorem lorem ipsum dolor sit amet consectetur adipiscing elit sed nulla minus dolor animi similique."</p>
            <span className="who">— Referred by a friend</span>
          </div>
        </div>
      </div>
    </section>
  );
}
