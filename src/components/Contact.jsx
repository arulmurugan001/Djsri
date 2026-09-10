import "./Contact.css";
import { useState } from "react";

async function sendEnquiry(event, setStatus, setMessage) {
  event.preventDefault();
  setStatus("sending");
  setMessage("");
  try {
    const response = await fetch(event.currentTarget.action, {
      method: "POST",
      body: new FormData(event.currentTarget),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error("Submission failed");
    event.currentTarget.reset();
    setStatus("sent");
    setMessage("Thank you! Your enquiry has been sent successfully.");
  } catch {
    setStatus("error");
    setMessage("Unable to send your enquiry. Please try again.");
  }
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (event) => sendEnquiry(event, setFormStatus, setFormMessage);
  return (
    <section
            id="contact"
            className="section contact-section"
        >

            <div className="container contact-grid">


                

                <div className="contact-info">

                    <p className="section-label">
                        GET IN TOUCH
                    </p>

                    <h2>
                        Let's Create
                        <span>Something Epic.</span>
                    </h2>

                    <p className="section-text">
                        Have an event coming up?
                        Send me your details and I'll get
                        back to you with availability and
                        booking information.
                    </p>


                    <div className="contact-details">


                        

                        <div className="contact-item">

                            <div className="contact-icon">

                                <i
                                    className="fa-solid fa-phone"
                                    aria-hidden="true"
                                ></i>

                            </div>

                            <div>

                                <small>
                                    CALL ME
                                </small>

                                <a href="tel:+919965952998">
                                    +91 99659 52998
                                </a>

                            </div>

                        </div>


                        

                        <div className="contact-item">

                            <div className="contact-icon">

                                <i
                                    className="fa-solid fa-envelope"
                                    aria-hidden="true"
                                ></i>

                            </div>

                            <div>

                                <small>
                                    EMAIL
                                </small>

                                <a href="mailto:hello@djsri.com">
                                    hello@djsri.com
                                </a>

                            </div>

                        </div>


                        

                        <div className="contact-item">

                            <div className="contact-icon">

                                <i
                                    className="fa-solid fa-location-dot"
                                    aria-hidden="true"
                                ></i>

                            </div>

                            <div>

                                <small>
                                    BASED IN
                                </small>

                                <span>
                                    Chennai, India
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                

                <form
                    id="contactForm"
                    className="contact-form"
                    action="https://formspree.io/f/xoeqkvjj"
                    method="POST"
                    onSubmit={handleSubmit}
                >


                    

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="name">
                                Your Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                autoComplete="name"
                                minLength="2"
                                maxLength="50"
                                required />

                        </div>


                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                required />

                        </div>

                    </div>


                    

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="phone">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+91 XXXXX XXXXX"
                                autoComplete="tel"
                                pattern="[+]?[0-9\s-]{10,15}" />

                        </div>


                        <div className="form-group">

                            <label htmlFor="event">
                                Event Type
                            </label>

                            <select
                                id="event"
                                name="event"
                                required
                            >

                                <option value="">
                                    Select Event
                                </option>

                                <option value="Wedding">
                                    Wedding
                                </option>

                                <option value="Private Party">
                                    Private Party
                                </option>

                                <option value="Club Event">
                                    Club Event
                                </option>

                                <option value="College Event">
                                    College Event
                                </option>

                                <option value="Corporate Event">
                                    Corporate Event
                                </option>

                                <option value="Fashion Show">
                                    Fashion Show
                                </option>

                                <option value="Sporting Event">
                                    Sporting Event
                                </option>

                                <option value="Pubbing">
                                    Pubbing
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                            </select>

                        </div>

                    </div>


                    

                    <div className="form-group">

                        <label htmlFor="message">
                            Tell Me About Your Event
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            minLength="10"
                            maxLength="1000"
                            placeholder="Event date, location, guests, music style..."
                            required
                        ></textarea>

                    </div>


                    

                    <div
                        id="formMessage"
                        className={`form-message ${formStatus === "sent" ? "success" : formStatus === "error" ? "error" : ""}`}
                        role="status"
                        aria-live="polite"
                    >{formMessage}</div>


                    

                    <button
                        type="submit"
                        className="btn btn-primary form-button"
                        id="submitButton"
                        disabled={formStatus === "sending"}
                    >
                        <i
                            id="buttonIcon"
                            className={`fa-solid ${formStatus === "sending" ? "fa-spinner fa-spin" : formStatus === "sent" ? "fa-check" : "fa-paper-plane"}`}
                            aria-hidden="true"
                        ></i>

                        <span id="buttonText">
                            {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Enquiry Sent" : "Send Enquiry"}
                        </span>

                    </button>


                    
                    

                    <a
                        href="https://wa.me/919965952998?text=Hello%2C%20I%20have%20an%20enquiry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-button"
                        id="whatsappButton"
                    >
                        <img
                            src="/images/whatsapp.svg"
                            alt=""
                            className="whatsapp-icon" />

                        <span>Enquire on WhatsApp</span>
                    </a>

                </form>

            </div>

        </section>
  );
}
