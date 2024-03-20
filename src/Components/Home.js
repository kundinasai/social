import React, { useContext, useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { Link } from 'react-router-dom';
import './Home.css';
import { useFetch } from './useFetch';

import { useEffect } from 'react';
function Home() {
  const { flag, setFlag, UserName1 } = useContext(Usecontext1);
  const [num, setNum] = useState(0);
  const PATH = process.env.REACT_APP_PATH;
  console.log(PATH)
  

  const handleFileChange = (event) => {
    const UserID = document.getElementById("text1").value;
    setNum(UserID);
    
    

  };
  const url = `https://jsonplaceholder.typicode.com/posts/?userId=${num}`;
    useFetch(url);

  return (
    <div className="home-container">
      <div className="top-nav-container">
        <div className="nav-links">
          <div>Hello! {UserName1}, you have LoggedIn</div>
        </div>
        <div className="search-and-upload">
          <input type="text" id='text1' placeholder="Search..." onChange={handleFileChange} className="search-bar" />
          
          
        </div>
        <button className="logout-button" onClick={() => setFlag(0)}>Logout</button>
      </div>
      <div className="content-container">
        <div className="side-nav">
          <div >
          <Link to={`${PATH}/`} >Feeds</Link>
          </div>
          <div >
          <Link to={`${PATH}/albums`}>Albums</Link>
          </div>
          <div >
          <Link to={`${PATH}/post`}>Posts</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
