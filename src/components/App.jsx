import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
  return (
    <div>
      <Header />
      {notes.map(i => {
    return(
        <Note key = {i.key} content = {i.content} title = {i.title} />
    )
})}
      <Footer />
    </div>
  );
}

export default App;