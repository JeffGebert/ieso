import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validate } from './helpers/validate';
import jwt_decode from "jwt-decode";
import { Link, withRouter, useHistory } from "react-router-dom";



function Realtimepricetable() {

  const [price, setPrice] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  const [tracker, setTracker] = useState(0);

      
      
      useEffect(() => {
        let token = localStorage.getItem("id_token");
        let loginInfo = jwt_decode(token)
        validate(loginInfo.email, loginInfo.last_signin).then(res=>{
          console.log("res", res)
          if (res === true) {
          console.log(" test validated")
        } else {
          console.log("not validated")
        }
      })

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
    
      <button className = "refresh-data" onClick={event => setTracker(tracker+1)}>Refresh</button>
      <table>
        <tr>
          <th>Timestamp</th>
          <th>location</th>
          <th>price</th>
          <th>type</th>
        </tr>

        {load ? error ? <td> {error.message} </td> : price.map((price, index) =>           
              <tr>
              <td>{price.timestamp}</td>
              <td>{price.shortname}</td>
              <td>{price.price}</td>
              <td>{price.longname}</td>
            </tr> 
            ): 
            <td> Loading ..</td>
        }
      </table>
    </div>
  );
}

export default Realtimepricetable;

