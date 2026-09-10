import "./CallToAction.css";
export default function CallToAction() {
  return (
    <section className="cta-section">

            <div className="container cta-content">

                <p className="section-label">
                    READY TO PARTY?
                </p>

                <h2>
                    Let's Make Some
                    <span>Noise.</span>
                </h2>

                <p>
                    Tell me about your event and let's create
                    something unforgettable together.
                </p>

                <a
                    href="#contact"
                    className="btn btn-primary"
                >
                    Book Your Event

                    <i
                        className="fa-solid fa-arrow-right"
                        aria-hidden="true"
                    ></i>

                </a>

            </div>

        </section>
  );
}
