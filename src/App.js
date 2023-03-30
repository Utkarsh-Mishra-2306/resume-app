import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Homepage from "./components/Homepage/Homepage.js";
import TechStack from "./components/TechStack/TechStack.js";
import Experience from"./components/Experience/Experience.js";
import Projects from "./components/Projects/Projects.js";

// PORTFOLIO

// 1.Navbar
// 2.Homepage
// 3.Techstack
// 4.Experience

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <TechStack/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
