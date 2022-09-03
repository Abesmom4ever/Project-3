import React, { useState, useRef } from "react";
import mainListItems from "./components/listitems";
import Dashboard from "./components/Dashboard";
import Title from "./components/Title";
//import Nav from "./components/Nav";
//import Page from "./components/Page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import mainListItems from "./components/listitems";
import useVideoPlayer from "./components/videoplayer";
import VideoInfo from "./components/vidinfo";
import video from "./temp video/Alex Jones will hunt down the enemies of Infowars.mp4"
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import PostVideo from "./pages/PostVideo";
function App() {

  /*
  const [pages] = React.useState([
    { name: "videos list" },
    { name: "post video" },
    { name: "sign up" },
    { name: "sign in" },
    { name: "log out" }    
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);
  */
  //<Title />
  //<Dashboard />
  //<mainListItems />


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />} />
          <Route
            path="/SignIn"
            element={<SignIn />} />
          <Route
            path="/SignUp"
            element={<Signup />} />
          <Route
            path="/Logout"
            element={<Logout />} />
          <Route
            path="/PostVideo"
            element={<PostVideo />} />
        </Routes>
      </Router>

      {/* <Nav
    pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
    <Page currentPage={currentPage}></Page> */}



    </div>
  );
}

export default App;