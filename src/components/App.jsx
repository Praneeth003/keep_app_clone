import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Create";



function App() {
  return (
    <div>
      <Header />
      <Create />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;