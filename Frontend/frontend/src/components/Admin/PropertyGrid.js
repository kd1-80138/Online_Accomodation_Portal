
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../url';
import { config } from "../../Token";
const PropertyGrid = ({ properties }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = () => {
    axios
      .get(`${BASE_URL}/admin/propertylist`,config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => { });
  };



  return (
    <div className="property-list">
    
  {data.map((property) => (
    <div key={property.propertyId} className="property-card">
      <div className="property-header" style={{ marginTop: '50px', backgroundColor: '#dc3545', color: '#fff', padding: '10px' }}>
        <h3 className="category">{property.categoryName}</h3>
      </div>
      <div className="property-body" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <p className="description"><strong>Description:</strong> {property.description}</p>
        <p className="instructions"><strong>Instructions:</strong> {property.instructions}</p>
        <div className="property-details">
          <p><strong>Deposit:</strong> {property.deposit}</p>
          <p><strong>Rent:</strong> {property.rent}</p>
          <p><strong>Society:</strong> {property.society}</p>
          <p><strong>Landmark:</strong> {property.landmark}</p>
          <p><strong>Area:</strong> {property.area}</p>
          <p><strong>Location:</strong> {property.cityName}, {property.state}, {property.pincode}</p>
        </div>
        <button className="btn btn-primary btn-view-details">View Details</button>
      </div>
    </div>
  ))}
 </div>



  



  );
};

export default PropertyGrid;
