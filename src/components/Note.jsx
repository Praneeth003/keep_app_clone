import React from "react";

function Note(props) {
  function handler(){
    props.del(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handler}>DELETE</button>
    </div>
  );
}

export default Note;
