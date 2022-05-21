
import './App.css';
import Logo from "./components/Logo";
import Links from "./components/Links";
import Button from "./components/Button";

function App() {
  return (
    <div id="navContainer">
      <Logo></Logo>
      <div id="links"><Links></Links></div>
      <Button></Button>
    </div>
  );
}

export default App;
