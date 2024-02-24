import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BASE_URL } from '../url';

function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cities`);
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };
  
  return (
    <div className="unique" >
    <div className="container mt-5">
      <br></br>
      <br></br>  <br></br>
      <br></br>
    
      <h1 className="text-center">Cities List</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {cities.map(city => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <br/><br/><br/><br/><br/><br/>
    </div>
    </div>
  );
}

export default CitiesList;





