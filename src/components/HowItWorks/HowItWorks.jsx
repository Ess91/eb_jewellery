import "./HowItWorks.scss";

export default function HowItWorks() {
  return (
    <section id="howItWorks">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <span className="num">01/Enquire</span>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="step reveal">
            <span className="num">02/Book</span>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="step reveal">
             <span className="num">03/View & Collect</span>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
