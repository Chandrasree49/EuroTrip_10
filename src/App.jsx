import { useState } from "react";
import Home from "./Pages/Home";
import "./App.css";
import Nav from "./component/Nav";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Hero from "./component/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav></Nav>
      <Home></Home>

      <Login></Login>
      <Register></Register>
    </>
  );
}

export default App;
