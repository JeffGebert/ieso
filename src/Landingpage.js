import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import validate from './helpers/validate';


function Landingpage() {



      
      
      useEffect(() => {
        console.log("refresh")
        axios
          .get(`http://localhost:3000/prices`)
          .then(res => {
            setPrice(res.data);
            setLoad(true);
          })
          .catch(err => {
            setError(err.message);
            setLoad(true)
          })          
    },[tracker])





  return (
    <div className="App">
        <span>Hello you are on the home page</span>
    </div>
  );
}

export default Landingpage;