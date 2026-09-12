import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">

        <div className="container footer-grid">

            <div className="footer-brand">

                <a
                    href="#home"
                    className="logo"
                    aria-label="Dream Scape home"
                >

                    <span className="logo-icon">

                        <i
                            className="fa-solid fa-headphones"
                            aria-hidden="true"
                        ></i>

                    </span>

                    <span>
                        Dream <span>Scape</span>
                    </span>

                </a>


                <p>
                    Professional DJ creating unforgettable
                    experiences through music, energy and passion.
                </p>


                <div className="social-links">

                    <a
                        href="https://www.instagram.com/dj_sriii/"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                        ></i>
                    </a>

                    <a
                        href="#"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-facebook-f"
                            aria-hidden="true"
                        ></i>
                    </a>

                    <a
                        href="#"
                        aria-label="YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-youtube"
                            aria-hidden="true"
                        ></i>
                    </a>

                    <a
                        href="#"
                        aria-label="SoundCloud"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-soundcloud"
                            aria-hidden="true"
                        ></i>
                    </a>

                    <a
                        href="https://wa.me/919894807032"
                        aria-label="WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fa-brands fa-whatsapp"
                            aria-hidden="true"
                        ></i>
                    </a>

                </div>

            </div>


            

            <div className="footer-column">

                <h3>
                    Explore
                </h3>

                <a href="#about">About</a>
                <a href="#music">Music</a>
                <a href="#videos">Videos</a>
                <a href="#gallery">Gallery</a>

            </div>


            

            <div className="footer-column">

                <h3>
                    Services
                </h3>

                <a href="#services">
                    Wedding DJ
                </a>

                <a href="#services">
                    Private Parties
                </a>

                <a href="#services">
                    Club Events
                </a>

                <a href="#services">
                    Corporate Events
                </a>

                <a href="#services">
                    Pubbing
                </a>

                <a href="#services">
                    Fashion Show Events
                </a>

                <a href="#services">
                    Sporting Events
                </a>

                <a href="#services">
                    College Events
                </a>

            </div>


            

            <div className="footer-column">

    <h3>
        Contact
    </h3>

    <a href="tel:+919894807032">
        <i
            className="fa-solid fa-phone"
            aria-hidden="true"
        ></i>
        +91 98948 07032
    </a>

    <a href="mailto:hello@dreamscape.com">
        <i
            className="fa-solid fa-envelope"
            aria-hidden="true"
        ></i>
        hello@dreamscape.com
    </a>

    <a
        href="https://maps.app.goo.gl/qkWN96A18SQdCjLM9"
        target="_blank"
        rel="noopener noreferrer"
        className="location-link"
        aria-label="Open Dream Scape location in Google Maps"
    >
        <i
            className="fa-solid fa-location-dot"
            aria-hidden="true"
        ></i>

        <span>
            No.65 Thazhampoo Street, post,
            Arasu Pokkuvarathu Kazhaga,
            Uzhiyar Nagar, Kandamanadi,
            Viluppuram, Tamil Nadu 605401
        </span>
    </a>

</div>

        </div>


        

        <div className="footer-bottom">

            <div className="container">

                <p>
                    © 2026 Dream Scape. All Rights Reserved.
                </p>

                <p>
                    Design and Developed by Digipondy.
                </p>

            </div>

        </div>

    </footer>
  );
}
