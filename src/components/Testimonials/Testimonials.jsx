import "./Testimonials.scss";


export default function Testimonials() {
  return (
    <section className="testimonials" id="clients">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">Who we work with</span>
            <h2>
              Collectors, jewellers, 
              <br />
              and the trade.
            </h2>
          </div>
          <p>Private buyers making a moment, collectors adding to a set, and jewellers sourcing stock for their own clients.</p>
        </div>
        <div className="quoteTrack">
          <div className="quote reveal">
            <p className="q">"I'd been hunting for one particular steel sports watch for months. EB found it in four days, sent the valuation before I'd even asked, and the price was well below what dealers were quoting."</p>
            <span className="who">— James, London</span>
          </div>
          <div className="quote reveal">
            <p className="q">"I wanted an anniversary ring without anyone at home finding out. One private appointment, two beautiful options, and complete discretion from start to finish."</p>
            <span className="who">— Priya, Birmingham</span>
          </div>
          <div className="quote reveal">
            <p className="q">"We source stock through EB for our own clients. Fair trade pricing, honest descriptions, and they always flag any wear before we commit."</p>
            <span className="who">— Independent jeweller, Manchester</span>
          </div>
        </div>
      </div>
    </section>
  );
}
