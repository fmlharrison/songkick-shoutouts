import React from "react";
import "./Header.css";

import skLogo from "../../images/songkick_badge_pink.png";

const Header = () => {
  return (
    <header className="header">
      <img src={skLogo} alt="Songkick logo" className="logo" />
      <p className="text">Songkick Shoutouts</p>
    </header>
  );
};

export default Header;
