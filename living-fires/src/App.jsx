import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Collections from "./components/Collections";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
