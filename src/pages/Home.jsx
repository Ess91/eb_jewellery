import { useRef, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/index.scss";
import Hero from "../components/Hero/Hero";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Ticker from "../components/Ticker/Ticker";
import useScrollEffects from "../hooks/useScrollEffects";
import About from "../components/About/About";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Catalogue from "../components/Catalogue/Catalogue";
import Wholesale from "../components/Wholesale/Wholesale";
import ParallaxBanner from "../components/ParallaxBanner/ParallaxBanner";
import Testimonials from "../components/Testimonials/Testimonials";
import InstagramSection from "../components/InstagramSection/InstagramSection";
import Booking from "../components/Booking/Booking";




export default function Home() {
  const root = useRef(null);
  const heroSection = useRef(null);
  const heroVideo = useRef(null);
  const aboutVideo = useRef(null);
  const wholesaleWrap = useRef(null);
  const wholesaleImg = useRef(null);
  const parallaxBanner = useRef(null);
  const parallaxImg = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [refNumber, setRefNumber] = useState("");

  useScrollEffects({
    root,
    heroSection,
    heroVideo,
    aboutVideo,
    wholesaleWrap,
    wholesaleImg,
    parallaxBanner,
    parallaxImg,
  });

    const handleBookingSubmit = (e) => {
      e.preventDefault();
      setRefNumber("Reference EB-" + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    };

  return (
    <div className="ebJewelleryContainer">
      <Header onToggleMenu={() => setMenuOpen((v) => !v)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Ticker />
      <Hero heroSectionRef={heroSection} heroVideoRef={heroVideo} />
      <About aboutVideoRef={aboutVideo} />
      <HowItWorks />
      <Catalogue />
      <Wholesale wholesaleWrapRef={wholesaleWrap} wholesaleImgRef={wholesaleImg} />
      <ParallaxBanner parallaxBannerRef={parallaxBanner} parallaxImgRef={parallaxImg} />
      <Testimonials />
      <InstagramSection />
            <Booking submitted={submitted} refNumber={refNumber} onSubmit={handleBookingSubmit} />
      <Footer />
    </div>
  );
}
