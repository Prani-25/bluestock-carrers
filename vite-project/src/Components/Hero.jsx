import React from "react";
import heroImg from "../assets/Play Store Showcase.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Together, Let’s Build The Future Of Fintech !</h1>
        <p>
          Join Bluestock Fintech to create disruptive <br /> fin-tech products,
          while <br /> working from anywhere!
        </p>
        <button>See Job Openings</button>
      </div>
      <div className="illustration">
        <img src={heroImg} alt="Team Success Illustration" />
      </div>
    </section>
  );
};

export default Hero;
