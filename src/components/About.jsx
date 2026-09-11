import "./About.css";
import { useEffect, useState } from "react";

const aboutImages = [
  "/images/about/dj-profile.jpeg",
  "/images/about/dj-performance.jpeg",
  "/images/about/dj-stage.jpeg",
  "/images/about/dj-crowd.jpeg",
  "/images/about/dj-event.jpeg",
];

export default function About() {
  const [aboutImage, setAboutImage] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setAboutImage((current) => (current + 1) % aboutImages.length), 4000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section
            id="about"
            className="section about-section"
        >

            <div className="container about-grid">


                

                <div className="about-image-wrapper">

                    <span
                        className="image-number"
                        aria-hidden="true"
                    >
                        01
                    </span>


                    <div className="about-image">

                        <img
                            id="aboutSliderImage"
                            src={aboutImages[aboutImage]}
                            alt="DJ Sriii performing at an event"
                            loading="lazy" />

                    </div>


                    <div className="experience-badge">

                        <strong>10+</strong>

                        <span>
                            YEARS<br />
                            EXPERIENCE
                        </span>

                    </div>

                </div>


                

                <div className="about-content">

                    <p className="section-label">
                        ABOUT ME
                    </p>

                    <h2>
                        Music Is More Than <span>A Sound.</span>
                    </h2>


                    <p className="section-text">
                        I'm DJ Sriii, a professional DJ passionate
                        about creating unforgettable experiences.
                        From intimate celebrations to high-energy
                        club nights, every performance is designed
                        around the crowd.
                    </p>


                    <p className="section-text">
                        My goal is simple — read the room,
                        understand the energy and create the
                        perfect soundtrack for every moment.
                    </p>


                    <div className="about-features">

                        <div>
                            <i
                                className="fa-solid fa-music"
                                aria-hidden="true"
                            ></i>

                            <span>Live Mixing</span>
                        </div>

                        <div>
                            <i
                                className="fa-solid fa-volume-high"
                                aria-hidden="true"
                            ></i>

                            <span>Premium Sound</span>
                        </div>

                        <div>
                            <i
                                className="fa-solid fa-bolt"
                                aria-hidden="true"
                            ></i>

                            <span>High Energy</span>
                        </div>

                    </div>


                    <a
                        href="#contact"
                        className="text-link"
                    >
                        Let's Work Together

                        <i
                            className="fa-solid fa-arrow-right"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

            </div>

        </section>
  );
}
