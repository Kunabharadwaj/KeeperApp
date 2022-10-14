import React from "react";
import "../App.css";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className = "footer">
      <p>Copyrights bhardwaj {currentDate} </p>
    </div>
  );
}

export default Footer;
