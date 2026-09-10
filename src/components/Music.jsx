import "./Music.css";
export default function Music() {
  return (
    <section
            id="music"
            className="section music-section"
        >

            <div className="container">

                <div className="section-heading">

                    <div>

                        <p className="section-label">
                            MY MUSIC
                        </p>

                        <h2>
                            Latest <span>Tracks</span>
                        </h2>

                    </div>

                </div>


                

                <div
                    className="music-marquee"
                    aria-label="Latest DJ tracks"
                >

                    <div className="music-track">


                        

                        <div className="music-group">


                            

                            <article className="track-card">

                                <div className="track-image">

                                    <img
                                        src="/images/music-1.jpg"
                                        alt="Midnight Energy"
                                        loading="lazy" />

                                    <button
                                        type="button"
                                        className="play-button"
                                        aria-label="Play Midnight Energy"
                                    >
                                        <i
                                            className="fa-solid fa-play"
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="track-number">
                                        01
                                    </span>

                                </div>


                                <div className="track-content">

                                    <div>
                                        <h3>
                                            Midnight Energy
                                        </h3>

                                        <p>
                                            Deep House • 2026
                                        </p>
                                    </div>

                                    <span className="track-duration">
                                        04:32
                                    </span>

                                </div>


                                <audio controls preload="none">
                                    <source
                                        src="/audio/track-1.mpeg"
                                        type="audio/mpeg" />

                                    Your browser does not support
                                    the audio element.
                                </audio>

                            </article>


                            

                            <article className="track-card">

                                <div className="track-image">

                                    <img
                                        src="/images/music-2.jpg"
                                        alt="Summer Vibes"
                                        loading="lazy" />

                                    <button
                                        type="button"
                                        className="play-button"
                                        aria-label="Play Summer Vibes"
                                    >
                                        <i
                                            className="fa-solid fa-play"
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="track-number">
                                        02
                                    </span>

                                </div>


                                <div className="track-content">

                                    <div>
                                        <h3>
                                            Summer Vibes
                                        </h3>

                                        <p>
                                            House • 2026
                                        </p>
                                    </div>

                                    <span className="track-duration">
                                        03:58
                                    </span>

                                </div>


                                <audio controls preload="none">
                                    <source
                                        src="/audio/track-2.mpeg"
                                        type="audio/mpeg" />
                                </audio>

                            </article>


                            

                            <article className="track-card">

                                <div className="track-image">

                                    <img
                                        src="/images/music-3.jpg"
                                        alt="Neon Nights"
                                        loading="lazy" />

                                    <button
                                        type="button"
                                        className="play-button"
                                        aria-label="Play Neon Nights"
                                    >
                                        <i
                                            className="fa-solid fa-play"
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="track-number">
                                        03
                                    </span>

                                </div>


                                <div className="track-content">

                                    <div>
                                        <h3>
                                            Neon Nights
                                        </h3>

                                        <p>
                                            EDM • 2026
                                        </p>
                                    </div>

                                    <span className="track-duration">
                                        05:12
                                    </span>

                                </div>


                                <audio controls preload="none">
                                    <source
                                        src="/audio/track-3.mpeg"
                                        type="audio/mpeg" />
                                </audio>

                            </article>


                            

                            <article className="track-card">

                                <div className="track-image">

                                    <img
                                        src="/images/music-4.jpg"
                                        alt="Festival Fire"
                                        loading="lazy" />

                                    <button
                                        type="button"
                                        className="play-button"
                                        aria-label="Play Festival Fire"
                                    >
                                        <i
                                            className="fa-solid fa-play"
                                            aria-hidden="true"
                                        ></i>
                                    </button>

                                    <span className="track-number">
                                        04
                                    </span>

                                </div>


                                <div className="track-content">

                                    <div>
                                        <h3>
                                            Festival Fire
                                        </h3>

                                        <p>
                                            EDM • Festival
                                        </p>
                                    </div>

                                    <span className="track-duration">
                                        04:45
                                    </span>

                                </div>


                                <audio controls preload="none">
                                    <source
                                        src="/audio/track-4.mpeg"
                                        type="audio/mpeg" />
                                </audio>

                            </article>

                        </div>
                    </div>

                </div>

            </div>

        </section>
  );
}
