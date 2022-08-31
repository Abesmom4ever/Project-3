import React, { useRef } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import mainListItems from "./components/listitems";
import Dashboard from "./pages/Dashboard";
import Title from "./components/Title";
import useVideoPlayer from "./components/videoplayer";
import VideoInfo from "./components/vidinfo";
import video from "./temp video/Alex Jones will hunt down the enemies of Infowars.mp4"
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Title />
      <Dashboard />
      <Routes>
        {/* <Route path="/"
        element={<Dashboard/>}/> */}
        <Route
        path="/SignIn"
        element={<SignIn/>}/>
        <Route
        path="/SignUp"
        element={<Signup/>}/>
      </Routes>
      {/* <mainListItems/> */}
    </Router>
    </div>
  );
}

export default App;