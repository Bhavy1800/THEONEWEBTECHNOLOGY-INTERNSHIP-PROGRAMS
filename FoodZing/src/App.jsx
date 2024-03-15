import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Delivery from "./components/Delivery";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Delivery />
      <About />
    </>
  );
}

export default App;
