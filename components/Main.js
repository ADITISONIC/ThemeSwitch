import React from "react";

export default function Main(props){
    return(
     <main className={props.darkMode?"dark":""}>
      <h1 className="title">Fun facts</h1>
      <ul className="facts">
        <li>hi</li>
        <li>hlo</li>
        <li>hello</li>
      </ul>
     </main>
    )
}