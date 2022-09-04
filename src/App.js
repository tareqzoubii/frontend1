import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends React.Component {
  render(){
    return(
      <div style={{textAlign:"center" , padding:"30px", color:"grey" }}>
        <h1>This is React App</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App;