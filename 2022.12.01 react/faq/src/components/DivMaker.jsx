import React from "react";
import { useState } from "react";
import { questions } from "../data";

export default function DivMaker() {
  const [getQuestion, setQuestion] = useState(questions);
  const [showItem, setShowItem] = useState(false);
  const [idState, setIdState] = useState(0);
  const onClick = (id) => {
    showItem ? setShowItem(false) : setShowItem(true)
    setIdState(id)
  } 
  return (
    <>
      {getQuestion.map(obj => (
        <div className="row shadow rounded" key={obj.id}>
          <div className="col-11">
            <h4>{obj.title}</h4>
          </div>
          <div className="col-1" onClick={() => onClick(obj.id)}>
            <i className="fa-solid fa-plus"></i>
          </div>
          { showItem && obj.id == idState ? <div className="col-11 pb-2">{obj.info}</div> : null }
          
        </div>
      ))}
    </>
  );
}
