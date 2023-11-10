import React from "react";
import AddIcon from '@mui/icons-material/Add';

function Create(props) {
    const [note, setNote] = React.useState({
        title: "",
        content: ""
    })

    function recordInput(event){
        const {name, value} = event.target;
        setNote((prevValue =>{
            return{
            ...prevValue,
            [name] : value
        };})
        );
    }

    function handler(event){
        props.add(note);
        event.preventDefault();
        setNote({
            title: "",
            content: ""
          });
    }
    
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value = {note.title} onChange={recordInput}/>
        <textarea name="content" placeholder="Take a note" rows="3" value = {note.content} onChange = {recordInput}/>
        <button onClick={handler}>< AddIcon /></button>
      </form>
    </div>
  );
}

export default Create;
