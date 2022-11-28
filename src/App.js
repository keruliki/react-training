import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
