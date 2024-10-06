import React from "react"

export default function Navbar(props){
    return(
      <nav className={props.darkMode?"dark":""}>
      <h3 className="text">React Facts</h3>
      <div className="toggler">
        <p className="light">Light</p>
        <div className="slider" onClick={props.toggleDarkMode}>
            <div className="slider-circle"></div>
        </div>
        <p className="dark"></p>
      </div>
      </nav>
    )
}