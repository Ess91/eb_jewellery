import "./Booking.scss";
export default function Booking({ submitted, refNumber, onSubmit }) {
  return (
    <section className="booking" id="booking">
      <div className="wrap bookingGrid">
        <div className="bookingInfo">
          <span className="eyebrow">Book a private appointment</span>
          <h2>
            Tell us what
            <br />
            you're after.
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quidem ad! Blanditiis, commodi, deleniti ullam quae possimus asperiores.</p>
          <div className="bookingMeta">
            <div><b>Response time</b>Within 4 hours, 7 days a week</div>
            <div><b>Where</b>Private studio, Mayfair or your location by arrangement</div>
            <div><b>Discretion</b>No names shared, no marketing lists, </div>
          </div>
        </div>
        <div>
          {!submitted && (
            <form onSubmit={onSubmit}>
              <div className="fieldRow">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" placeholder="07..." required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="interest">What are you after</label>
                <select id="interest" defaultValue="" required>
                  <option value="" disabled>Select one</option>
                  <option>Chain / necklace</option>
                  <option>Ring / engagement</option>
                  <option>Bracelet</option>
                  <option>Watch</option>
                  <option>Bespoke piece</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="fieldRow">
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input id="date" type="date" />
                </div>
                <div className="field">
                  <label htmlFor="time">Preferred time</label>
                  <select id="time" defaultValue="">
                    <option value="" disabled>Select a slot</option>
                    <option>Morning (10–12)</option>
                    <option>Afternoon (1–4)</option>
                    <option>Evening (5–8)</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="notes">Anything else</label>
                <textarea id="notes" rows={3} placeholder="Budget, stone, reference photo — whatever helps us prep for the appointment" />
              </div>
              <div className="formSubmit">
                <small>Submitting sends a private enquiry — nothing is booked or charged until we confirm your slot.</small>
                <button type="submit" className="btn on-black">Request appointment</button>
              </div>
            </form>
          )}
          <div className={`confirm${submitted ? " show" : ""}`}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Enquiry received</span>
            <p style={{ fontFamily: "var(--display)", textTransform: "uppercase", fontSize: "22px", marginTop: "14px" }}>
              We'll be in touch shortly.
            </p>
            <p className="ref">{refNumber}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
