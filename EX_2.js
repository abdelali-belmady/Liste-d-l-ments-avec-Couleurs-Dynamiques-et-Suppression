import React from "react";
import { useState } from "react";
import "./EX_2.css";

function EX_22() {
  const [element, setElement] = useState([]);
  const [blue] = useState("blue");
  const [red] = useState("red");
  const [green] = useState("green");
  const [colortext] = useState("white");

  const handleAddelements = () => {
    const elementValue = document.getElementById("name").value;
    setElement([...element, elementValue]);
  };
  const handleDeleteBtn = () => {
      let btnBelete = document.querySelectorAll(".mybtn")
      btnBelete.forEach(function(item){
        item.addEventListener('click',function(){
            item.parentElement.remove()
        })
              })
     
  };
  return (
    <div id="idabdelali">
      <span>
        <form>
          <input type="text" id="name" />
          <button onClick={(e) => handleAddelements(e.preventDefault())}>
            ajouter
          </button>
        </form>
      </span>
      <ul>
        {element.map(function (element) {
          if (Number(element) >= 0) {
            return (
              <li style={{ background: green, color: colortext }} >
                {element}
                <span className="mybtn" onClick={() => handleDeleteBtn()}>
                  DEELETE
                </span>
              </li>
            );
          } else if (Number(element) < 0) {
            return (
              <li style={{ background: red, color: colortext }} >
                {element}
                <span className="mybtn" onClick={() => handleDeleteBtn()}>
                  DEELETE
                </span>
              </li>
            );
          } else {
            return (
              <li style={{ background: blue, color: colortext }} >
                {element}
                <span className="mybtn" onClick={() => handleDeleteBtn()}>
                  DEELETE
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export { EX_22 };
