import logo from './logo.svg';
import './App.css';
import Header from "./container/Header/Header";
import Home from "./container/Home/Home";



function App() {
  return (
    <div className="App" style={{background : "black"}}> 
      <Header/> 
      <Home/>
    </div>
  );
}

export default App;
