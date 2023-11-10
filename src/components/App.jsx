import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Create";



function App() {

  const [nNote, setNNote] = React.useState([]);
  function addNote(note){
    setNNote((prev => {
      return[
        ...prev,
        note
      ];
    }));
  }
  return (
    <div>
      <Header />
      <Create 
        add = {addNote}
      />
      {nNote.map(i => {
      return(<Note title={i.title} content={i.content} />);
      })}
      <Footer />
    </div>
  );
}

export default App;