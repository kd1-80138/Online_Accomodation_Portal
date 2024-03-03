// PropertyResponse.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './PropertyResponse.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './AddPropertyButton.css'
import ImageUploadForm from './AddImage'
import { BASE_URL } from '../../url';
const PropertyResponse = () => {
  const navigate = useNavigate();
  const [id, setId]=useState(" ");

  // State to store the property response
  const [propertyResponse, setPropertyResponse] = useState([]);


 const ownerId= sessionStorage.getItem('id');
  // Function to fetch the property response from the backend
  const fetchPropertyResponse = async () => {
    try {

      const token = sessionStorage.getItem('jwt'); // Retrieve JWT token from session storage
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Include JWT token in the request headers
      }
    };
      const response = await axios.get(`${BASE_URL}/property/propertylist/${ownerId}`,config); // Replace '/api/endpoint' with your backend endpoint
      setPropertyResponse(response.data); // Set the property response in state
    } catch (error) {
      console.error('Error fetching property response:', error);
    }
  };

  // UseEffect hook to fetch the property response when the component mounts
  useEffect(() => {
    fetchPropertyResponse();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts


  const handleDelete = async (propertyId) => {
    try {
      const token = sessionStorage.getItem('jwt');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      await axios.delete(`http://localhost:7070/property/delete/${propertyId}`, config);
      fetchPropertyResponse();
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };


  return (
    <div>
    <h1>Property Responses</h1>
    <Link to="/AddProperty" className="add-property-button">Add Property</Link>
    <div className="property-list">
      {propertyResponse.map((property, index) => (
        <div key={index} className="property-item">
         <h2 style={{ backgroundColor: 'lightyellow', color: 'darkorange' }}>{property.categoryName}</h2>
          <p><strong>Description:</strong> {property.description}</p>
          <p><strong>Instructions:</strong> {property.instructions}</p>
          <p><strong>Deposit:</strong> {property.deposit}</p>
          <p><strong>Rent:</strong> {property.rent}</p>
          <p><strong>Society:</strong> {property.society}</p>
          <p><strong>Landmark:</strong> {property.landmark}</p>
          <p><strong>Area:</strong> {property.area}</p>
          <p><strong>City Name:</strong> {property.cityName}</p>
          <p><strong>State:</strong> {property.state}</p>
          <p><strong>Pincode:</strong> {property.pincode}</p>
          <button onClick={() => handleDelete(property.propertyId)}>Delete</button>{"   "}
          <button className="btn btn-primary" onClick={() => navigate(`/addimage?propertyId=${property.propertyId}`)}>Add Image</button>
          <div hidden>
          <ImageUploadForm  id={property.propertyId}></ImageUploadForm>
          </div>

          
        </div>
      ))}
    </div>
  </div>
);
};
export default PropertyResponse;
