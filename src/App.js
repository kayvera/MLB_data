import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
