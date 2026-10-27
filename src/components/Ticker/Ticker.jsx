import "./Ticker.scss";
import { TICKER_ITEMS } from "../../data/content";

export default function Ticker() {
  return (
    <div className="ticker" id="top">
      <div className="tickerTrack">
        {TICKER_ITEMS.concat(TICKER_ITEMS).map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
