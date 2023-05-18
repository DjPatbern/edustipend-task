import React, { useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [sendMail, setSendMail] = useState(false);
  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Contact - Edustipends Playlist</title>
        <meta name="description" content="Contact Edustipends playlist page" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="contact-div">
        <div className="contact-div">
          {sendMail ? (
            <div className="contact-form">
              <form>
                <h3>Send us a mail</h3>
                <input type="email" placeholder="Your email address" />
                <input type="text" placeholder="Message" id="message-input" />
                <button>Send Mail</button>
              </form>
              <p>
                Want more contact options{" "}
                <span onClick={() => setSendMail(!sendMail)}>See here</span>
              </p>
            </div>
          ) : (
            <div>
              <h3 className="contact-text">Contact Us</h3>
              <p>◉ Plot 123, Adrress Road, New York</p>
              <p>📱 +123-2345-383-00 </p>
              <div className="social-media-icons">
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <FiTwitter className="socials" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <AiOutlineInstagram className="socials" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <CiFacebook className="socials" />
                </a>
              </div>
              <p>
                Want to send us a mail{" "}
                <span onClick={() => setSendMail(!sendMail)}>Send here</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
