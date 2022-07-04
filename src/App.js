import logo from './logo.svg';
import './App.css';
import Header from "./container/Header/Header";
import Home from "./container/Home/Home";
import About from "./container/About/About"



function App() {
  return (
    <div className="App" style={{background : "black"}}> 
      <Header/> 
      <Home/>
      {/* <About/> */}
    </div>
  );
}

export default App;
