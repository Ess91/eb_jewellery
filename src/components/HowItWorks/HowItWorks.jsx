import "./HowItWorks.scss";

export default function HowItWorks() {
  return (
    <section id="howItWorks">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Three steps, all in private.</h2>
          </div>
          <p>
           No browsing, no sales floor. You tell us what you want, and we find it.
          </p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <span className="num">01/Enquire</span>
            <h3>Tell us what you're after.</h3>
            <p>
              Send the piece, your budget and when you need it, by Whatsapp or the form below
            </p>
          </div>
          <div className="step reveal">
            <span className="num">02/Book</span>
            <h3>We source and shortlist.</h3>
            <p>
        We search our trade network and come back with options, photos and prices.
            </p>
          </div>
          <div className="step reveal">
             <span className="num">03/View & Collect</span>
          <h3>View it, then decide.</h3>
          <p>
           See it in person at our private office or somewhere that suits you. No pressure and no obligation to buy
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
