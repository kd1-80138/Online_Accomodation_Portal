import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BASE_URL } from '../../url';
import { config } from '../../Token';

function CitiesList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = () => {
    axios
      .get(`${BASE_URL}/cities`,config)
      .then((response)=>{
        console.log(response.data);
        setCities(response.data);
      })
      .catch((error) =>{
      console.error('Error fetching cities:', error);
      });
  };

  const handleDelete = async (cityId) => {
    
      axios.delete(`${BASE_URL}/cities/${cityId}`,config)
      .then((response)=>{
        console.log(response.data);
        fetchCities(); 
      })
      .catch((error) =>{
      console.error(`Error deleting city with ID ${cityId}:`, error);
    });
  };
  
  return (
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
              <th>State</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cities.map(city => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.cityName}</td>
                <td>{city.state}</td>
                <td>{city.pincode}</td>
                <td>
                  {/* <button className="btn btn-primary" onClick={() => handleEdit(city.id)}>
                    Edit
                  </button> */}
                  <button className="btn btn-danger ml-2" onClick={() => handleDelete(city.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default CitiesList;





