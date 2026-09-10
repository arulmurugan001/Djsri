import "./Hero.css";
export default function Hero() {
  return (
    <section
            id="home"
            className="hero"
        >

            <div
                className="hero-background"
                aria-hidden="true"
            ></div>


            <div className="hero-container container">

                

                <div className="hero-content">

                    <div className="hero-tag">

                        <span
                            className="live-dot"
                            aria-hidden="true"
                        ></span>

                        AVAILABLE FOR EVENTS

                    </div>


                    <p className="hero-subtitle">
                        PROFESSIONAL DJ &amp; MUSIC PRODUCER
                    </p>


                    <h1>
                        FEEL THE
                        <span>BEAT.</span>
                    </h1>


                    <p className="hero-description">
                        Turning every event into an unforgettable
                        experience through music, energy and
                        unforgettable moments.
                    </p>


                    <div className="hero-buttons">

                        <a
                            href="#music"
                            className="btn btn-primary"
                        >
                            <i
                                className="fa-solid fa-play"
                                aria-hidden="true"
                            ></i>

                            Listen Now
                        </a>


                        <a
                            href="#contact"
                            className="btn btn-outline"
                        >
                            Book My Event

                            <i
                                className="fa-solid fa-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>

                    </div>


                    

                    <div className="hero-stats">

                        <div className="stat">
                            <strong>10+</strong>
                            <span>Years Experience</span>
                        </div>

                        <div className="stat">
                            <strong>500+</strong>
                            <span>Events</span>
                        </div>

                        <div className="stat">
                            <strong>50K+</strong>
                            <span>Happy Guests</span>
                        </div>

                    </div>

                </div>


                

                <div className="hero-visual">

                    <div
                        className="hero-glow"
                        aria-hidden="true"
                    ></div>

                    <div
                        className="hero-ring ring-one"
                        aria-hidden="true"
                    ></div>

                    <div
                        className="hero-ring ring-two"
                        aria-hidden="true"
                    ></div>


                    <div className="hero-image">

                        <img
                            src="/images/dj-landing-bg.jpg"
                            alt="DJ Sri performing live" />

                    </div>


                    

                    <div className="floating-card music-floating">

                        <div
                            className="equalizer"
                            aria-hidden="true"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div>

                            <small>NOW PLAYING</small>

                            <strong>
                                Midnight Energy
                            </strong>

                        </div>

                    </div>


                    

                    <div
                        className="vinyl-disc"
                        aria-hidden="true"
                    >

                        <i className="fa-solid fa-music"></i>

                    </div>

                </div>

            </div>


            

            <a
                href="#about"
                className="scroll-down"
                aria-label="Scroll to About section"
            >

                <span>SCROLL</span>

                <i
                    className="fa-solid fa-arrow-down"
                    aria-hidden="true"
                ></i>

            </a>

        </section>
  );
}
