import "./global.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Music from "./components/Music.jsx";
import Videos from "./components/Videos.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import CallToAction from "./components/CallToAction.jsx";
import InstagramReels from "./components/InstagramReels.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Music />
        <Videos />
        <Gallery />
        <Services />
        <WhyChooseUs />
        <CallToAction />
        <InstagramReels />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
