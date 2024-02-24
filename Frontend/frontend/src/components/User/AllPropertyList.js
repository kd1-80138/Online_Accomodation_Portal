
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from '../../url';
import { config } from "../../Token";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PropertyGrid = ({ properties }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [city,setCity]=useState("");
  useEffect(() => {
    fetchData();
  }, []);

 const token=sessionStorage.getItem("jwt");

  const getdata = () => {
    axios
      .get(`${BASE_URL}/property/properties/${city}`,config)
      .then((response) => {
        setData(response.data);
        if(data==="Property Booking Not Available Already Booked")
        {
          toast.warning(`No property Available in ${city}`)
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
const userId=sessionStorage.getItem("id");
  const bookhandler = (propertyId) => {
    // console.log("hiiiiiiii")
     axios
       .post(`${BASE_URL}/book/${userId}?propertyId=${propertyId}`, null,
         {
           headers: {
             Authorization: `Bearer ${token}`
           }
         })
       .then((response) => {
        if(response.data==="Property Booking Not Available Already Booked")
        {
          toast.warning(`This Property Not Available For Booking`)
        }
        // console.log(response.data);
        else{
         toast.success("Property Booking Successfully Done");
        }
       })
       .catch((error) => {
         console.log(error);
         toast.error("Property Booking Not Available Already Booked");
       });
   };
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
     <div>
       <br/>
       <br/>
       <br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          id="inputfirst_name4"/>
          <button className="btn btn-primary btn-view-details" onClick={()=>getdata()} >Search</button>
      </div>
      <br/>
      <br/>


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
          {console.log("Property ID:", property.propertyId)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button className="btn btn-primary btn-view-details" style={{ backgroundColor: 'green' }} onClick={() => bookhandler(property.propertyId)}>Book Flat</button> {" "}
          <button className="btn btn-primary btn-view-details" style={{ backgroundColor: 'blue' }} onClick={() => navigate(`/all_propr_review?propertyId=${property.propertyId}`)}>See Reviews</button>{" "}
          <button className="btn btn-primary btn-view-details" style={{ backgroundColor: 'orange' }} onClick={() => navigate(`/addreview?propertyId=${property.propertyId}`)}>Add Reviews</button>{" "}
          <button className="btn btn-primary btn-view-details" style={{ backgroundColor: 'yellow' }} onClick={() => navigate(`/viewimages?propertyId=${property.propertyId}`)}>View Images</button>

        </div>
      </div>
    </div>
  ))}
</div>

  </div>
  );
};

export default PropertyGrid;
