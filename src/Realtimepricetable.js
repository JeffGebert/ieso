import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [price, setPrice] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');
  const [tracker, setTracker] = useState(0);

      
      
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

export default App;
