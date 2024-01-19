import React from "react";
import './Preloader.css'

function Preloader() {
  return (
      <div className="preloader">
          <div className="preloader__block">
              <span className="preloader__loader"></span>
          </div>
      </div>
  )
};

export default Preloader