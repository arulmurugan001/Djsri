import "./Gallery.css";
export default function Gallery() {
  return (
    <section
            id="gallery"
            className="section gallery-section"
        >

            <div className="container">

                <div className="gallery-header">

                    <div>

                        <p className="section-label">
                            GALLERY
                        </p>

                        <h2>
                            Moments Behind
                            <span>The Music</span>
                        </h2>

                    </div>

                </div>


                <div className="gallery-grid">


                    <article className="gallery-item gallery-item-large">

                        <img
                            src="/images/dj-1.jpeg"
                            alt="DJ performing at a live music event"
                            loading="lazy" />

                        <div className="gallery-overlay">

                            <div className="gallery-info">

                                <span>
                                    LIVE PERFORMANCE
                                </span>

                                <h3>
                                    Night Energy
                                </h3>

                            </div>

                            <button
                                type="button"
                                className="gallery-view"
                                aria-label="View Night Energy image"
                            >
                                <i
                                    className="fa-solid fa-expand"
                                    aria-hidden="true"
                                ></i>
                            </button>

                        </div>

                    </article>


                    <article className="gallery-item">

                        <img
                            src="/images/dj-2.jpeg"
                            alt="DJ hands controlling a music mixer"
                            loading="lazy" />

                        <div className="gallery-overlay">

                            <div className="gallery-info">

                                <span>
                                    DJ SETUP
                                </span>

                                <h3>
                                    Behind The Decks
                                </h3>

                            </div>

                            <button
                                type="button"
                                className="gallery-view"
                                aria-label="View Behind The Decks image"
                            >
                                <i
                                    className="fa-solid fa-expand"
                                    aria-hidden="true"
                                ></i>
                            </button>

                        </div>

                    </article>


                    <article className="gallery-item">

                        <img
                            src="/images/dj-3.jpeg"
                            alt="DJ performing for a large audience"
                            loading="lazy" />

                        <div className="gallery-overlay">

                            <div className="gallery-info">

                                <span>
                                    LIVE CROWD
                                </span>

                                <h3>
                                    Crowd Energy
                                </h3>

                            </div>

                            <button
                                type="button"
                                className="gallery-view"
                                aria-label="View Crowd Energy image"
                            >
                                <i
                                    className="fa-solid fa-expand"
                                    aria-hidden="true"
                                ></i>
                            </button>

                        </div>

                    </article>


                    <article className="gallery-item">

                        <img
                            src="/images/dj-4.jpeg"
                            alt="DJ performing with stage lights"
                            loading="lazy" />

                        <div className="gallery-overlay">

                            <div className="gallery-info">

                                <span>
                                    FESTIVAL
                                </span>

                                <h3>
                                    Neon Festival
                                </h3>

                            </div>

                            <button
                                type="button"
                                className="gallery-view"
                                aria-label="View Neon Festival image"
                            >
                                <i
                                    className="fa-solid fa-expand"
                                    aria-hidden="true"
                                ></i>
                            </button>

                        </div>

                    </article>


                    <article className="gallery-item gallery-item-wide">

                        <img
                            src="/images/dj-5.jpeg"
                            alt="DJ mixing music in front of a crowd"
                            loading="lazy" />

                        <div className="gallery-overlay">

                            <div className="gallery-info">

                                <span>
                                    FESTIVAL NIGHT
                                </span>

                                <h3>
                                    Festival Fire
                                </h3>

                            </div>

                            <button
                                type="button"
                                className="gallery-view"
                                aria-label="View Festival Fire image"
                            >
                                <i
                                    className="fa-solid fa-expand"
                                    aria-hidden="true"
                                ></i>
                            </button>

                        </div>

                    </article>

                </div>


                <div className="gallery-action">

                    <a
                        href="#contact"
                        className="btn btn-primary"
                    >
                        Explore More

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
