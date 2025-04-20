import React from "react";
import image1 from "../assets/image1  ff.png";
import qrCode from "../assets/app-qr.png";

const CTA = () => {
  return (
    <section className="cta">
      <img src={image1} alt="Downloads Showcase" />
      <div className="downloads">4.4 K+ DOWNLOADS</div>

      <div className="cta-matter">
        <h2>Enjoy Free Learning, Analytics Club</h2>
        <p>Get the link to download the App</p>
        <div className="form-section">
          <input type="text" placeholder="Enter phone number" />
          <button>Send App Link</button>
        </div>
        <div className="apps">
          <img src={qrCode} alt="QR Code" className="app-qr" />
          <div className="store-badges">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
