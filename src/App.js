
import './App.css';
import Alumni from "./Components/Alumni/Alumni.js"
import Aarohan from './Components/Aarohan/Aarohan.js';
import Events from "./Components/Events/Events.js";
import Teams from "./Components/Team/Teams.js";
import Nav from "./Components/Navbar/Nav.js"
// import {Home} from "./Components/Home/Home.js";
// import TedX from "./Components/Tedx/TedX.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" Component={Events}></Route>
          <Route exact path="/teams" Component={Teams}></Route>
          <Route exact path="/aarohan" Component={Aarohan}></Route>
          <Route exact path="/events" Component={Events}></Route>
          <Route exact path="/tedx" Component={Aarohan}></Route>
          <Route exact path="/alumni" Component={Alumni}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
