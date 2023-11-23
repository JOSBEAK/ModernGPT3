import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <p>
          Media query is a CSS technique introduced in CSS3. It uses the @media
          rule to include a block of CSS properties only if a certain condition
          is true. Example If the browser window is 600px or smaller, the
          background color will be lightblue:
        </p>
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT3 OpenAI
        </h1>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button className="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600+ have accessed this for their benefit</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
