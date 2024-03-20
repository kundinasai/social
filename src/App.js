import React, { useContext } from "react";
// import { UserContext } from '../App'
import { Usecontext1 } from "./UserContext/Usercontext1";
//import { srikanth } from '../UserContext/Usercontext1';
import Home from "./Componenta/Home";
import Login from "./Componenta/Login";
import Register from "./Componenta/Register";

import Feeds from "./Componenta/Feeds";
import Posts from "./Componenta/Posts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from "./Componenta/Albums";
import Comments from "./Componenta/Comments";

export default function App() {
  const { flag, setFlag } = useContext(Usecontext1);
  const PATH = process.env.REACT_APP_PATH;
  //const {flag,setFlag} = useContext(srikanth)
  //const [flag,setFlag] = useState()
  return (
    <>
    <Router>
      {flag == 0 || flag == 2 ? <Login /> : <Home />}
      
      {flag === 2 && <Register />}

      
        <Routes>
          <Route index path={`${PATH}/`}  element={<Feeds />}></Route>
          <Route path={`${PATH}/post`} element={<Posts />}></Route>
          <Route path={`${PATH}/albums`} element={<Albums />}></Route>
          <Route path={`${PATH}/comments`} element={<Comments/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
