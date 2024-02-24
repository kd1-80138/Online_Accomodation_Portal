
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../../src/css/property_detail.css";
import "../../src/css/common.css";
import { BASE_URL } from '../url';

import { ToastContainer, toast } from "react-toastify";
import {Carousel } from 'react-bootstrap';  
import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router";

import profile1 from "../assets/man.png";
import img1 from "../../src/assets/properties/1/1d4f0757fdb86d5f.jpg";
import img2 from "../../src/assets/properties/1/46ebbb537aa9fb0a.jpg";
import male from "../../src/assets/male.png";
import female from "../../src/assets/female.png";
import unisex from "../../src/assets/unisex.png";

import 'font-awesome/css/font-awesome.min.css';

const PropertyDetail =() =>
{
    
    const navigate = useNavigate()
    const locn =  useLocation()
    console.log(locn.state);

  
    const { pid } = locn.state || {}; 

  
    const [property, setProperty] = useState('');
    const [facilities, setFacilities] = useState([]);

    const[reviews,setReviews] = useState([]);

    const[cartpg,setCartpg] = useState([]);
    
     
     
    var item_value = pid;
    //  var item_value = sessionStorage.getItem("id");
    

    const handleButtonClick = (data) => 
    {
      console.log('Propid', data);
      var uid = sessionStorage.getItem("id");
      console.log("uid",uid);

      axios.post(`${BASE_URL}/bookingCart/add?propertyId=${data}&userId=${uid}`).then(
        (response) =>{
          console.log(response.data );
          toast.success(response.data);
          //setCartpg(response.data)
         }, 
         (error) =>{
           console.log(error);
           toast.error("error");
         } 
      );

      navigate("/Cartlist")
    };
    
   
    useEffect(() => {
        fetchProperty();
        fetchReview();
      }, []);

      const fetchProperty = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/properties/getProp/${item_value}`);
          console.log(response.data);
          setProperty(response.data);
          
          setFacilities(response.data.facilities);
          console.log(response.data.facilities);
          console.log(facilities.type);
        } catch (error) {
          console.error('Error fetching property details:', error);
        }
      };


      const fetchReview = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/review/${item_value}`);
          console.log(response.data);
          setReviews(response.data);
        } catch (error) {
          console.error('Error fetching property details:', error);
        }
      };


      if(property.gender == "MALE")
      var i = male;
      else if(property.gender == "FEMALE")
      var i = female;
      else
      var i = unisex;

   //average of rating
    var avgRate = parseInt((property.ratingClean+ property.ratingFood + property.ratingSafety )/3);



      
  
    

  return (
    <div>

    
    {/* crousal */}
    <div className='p-5'>  
    <Carousel>  
  <Carousel.Item>  
  <img style={{maxHeight:"100vh"}}  
      className="d-block w-100"  
      src={img1}  
      alt="First slide"  
    />  
    <Carousel.Caption>  
      {/* <h3>First Slider Image Title</h3>  
      <p>First Slide decription.</p>   */}
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img1}  
      alt="Second slide"  
    />  
    
    <Carousel.Caption>  
      {/* <h3>Second slide Image </h3>  
      <p>Second slide description</p>   */}
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img1}  
      alt="Third slide"  
    />  
  
    <Carousel.Caption>  
      {/* <h3>Third Slide Image</h3>  
      <p>Third Slide Description.</p>   */}
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div>  




   {/* stars */}
    <div class="property-summary page-container">
        <div class="row no-gutters justify-content-between">
             <div class="star-container" title="4.8">
            
             {avgRate === 5 ?
                              
                              <>
                                <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 </>
 
                              
                             :
                             <></> 
                             } 
                             {avgRate === 4 ?
                               
                               
                               <>
                                <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                
                                 </>
                              :
                              <></> 
                              } 
 
                               {avgRate === 3 ?
                                 
                                 <>
                                <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                
                                 </>
                             :
                             <></> 
                             } 
 
                             {avgRate === 2 ?  
                               
                               <>
                                <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                
                                 </>
  
                               
                              :
                              <></> 
                              } 
 
                             {avgRate === 1 ?  
                                  <i class="fa fa-star"></i>
 
                              :
                              <></> 
                              } 



            </div>
        </div>
        

    {/* property detail */}
   
        <div class="detail-container">
            <div class="property-name">{property.name}</div>
                <div class="property-address">{property.address}</div>
                    <div class="property-gender">  
                      {property.gender}
                          <img src={i} />
                    </div>
                </div>
                        <div class="row no-gutters">
                            <div class="rent-container col-6">
                                <div class="rent">Rs {property.rent}/-</div>
                                <div class="rent-unit">per month</div>
                            </div>
                            <div class="button-container col-6">
                            <button  class="btn btn-primary" onClick={ () => handleButtonClick(property.id)}>Book Now</button>
                            </div>
                        </div>
            </div>
          



{/* facilities */}

    
<div className="container mt-5">
    <h1 className="text-center">Facility</h1>
    <div class="table-responsive">
    <table className="table table-bordered table-striped ">
    <thead className="thead-dark">
        <tr>
            <th>Facility Type</th>
            <th>Facility Name</th>
        </tr>
    </thead>
    <tbody>
        {facilities.map((abc) => (
            <tr key={abc.id}>
                <td>{abc.type}</td>
                <td>{abc.name}</td>
            </tr>
        ))}
    </tbody>
</table>  
</div>
</div>
  
    






{/* Description-box */}

<div class="property-about page-container">
        <h1>About the Property</h1>
        <p>{property.description}</p>
    </div>



{/* property-rating */}
<div class="property-rating">
        <div class="page-container">
            <h1>Property Rating</h1>
            <div class="row align-items-center justify-content-between">
                <div class="col-md-6">
                    <div class="rating-criteria row">
                        <div class="col-6">
                            <i class="rating-criteria-icon 	fa fa-envira"></i>
                            <span class="rating-criteria-text">Cleanliness : {property.ratingClean} </span>
                        </div>
                        <div class="rating-criteria-star-container col-6" title="4.3">
                        
                         {property.ratingClean === 5 ?
                              
                              
                             <i class="fa fa-star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                             </i>

                             
                            :
                            <></> 
                            } 
                            {property.ratingClean === 4 ?
                              
                              
                              <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                
                              </i>
                             :
                             <></> 
                             } 

                              {property.ratingClean === 3 ?
                                 <i class="fa fa-star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                             </i>
                            :
                            <></> 
                            } 

                            {property.ratingClean === 2 ?  
                              <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                              </i>
 
                              
                             :
                             <></> 
                             } 

                            {property.ratingClean === 1 ?  
                                 <i class="fa fa-star"></i>

                             :
                             <></> 
                             } 

                           
                        </div>
                    </div>

                    <div class="rating-criteria row">
                        <div class="col-6">
                            <i class="rating-criteria-icon fa fa-coffee"></i>
                            <span class="rating-criteria-text">Food Quality : {property.ratingFood} </span>
                        </div>
                        
                        <div class="rating-criteria-star-container col-6" title="3.4">
                          
                          
                        {property.ratingFood === 5 ?
                              
                              
                              <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                              </i>
 
                              
                             :
                             <></> 
                             } 
                             {property.ratingFood === 4 ?
                               
                               
                               <i class="fa fa-star">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                 
                               </i>
                              :
                              <></> 
                              } 
 
                               {property.ratingFood === 3 ?
                                  <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                              </i>
                             :
                             <></> 
                             } 
 
                             {property.ratingFood === 2 ?  
                               <i class="fa fa-star">
                                  <i class="fa fa-star"></i>
                               </i>
  
                               
                              :
                              <></> 
                              } 
 
                             {property.ratingFood === 1 ?  
                                  <i class="fa fa-star"></i>
 
                              :
                              <></> 
                              } 





                        </div>
                    </div>

                    <div class="rating-criteria row">
                        <div class="col-6">
                            <i class="rating-criteria-icon fa fa-lock"></i>
                            <span class="rating-criteria-text">Safety : {property.ratingSafety} </span>
                        </div>
                        <div class="rating-criteria-star-container col-6" title="4.8">
                          


                        {property.ratingSafety === 5 ?
                              
                              
                              <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                              </i>
 
                              
                             :
                             <></> 
                             } 
                             {property.ratingSafety === 4 ?
                               
                               
                               <i class="fa fa-star">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                 
                               </i>
                              :
                              <></> 
                              } 
 
                               {property.ratingSafety === 3 ?
                                  <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                              </i>
                             :
                             <></> 
                             } 
 
                             {property.ratingSafety === 2 ?  
                               <i class="fa fa-star">
                                  <i class="fa fa-star"></i>
                               </i>
  
                               
                              :
                              <></> 
                              } 
 
                             {property.ratingSafety === 1 ?  
                                  <i class="fa fa-star"></i>
 
                              :
                              <></> 
                              } 






                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="rating-circle">
                        <div class="total-rating">{avgRate}</div>
                        <div class="rating-circle-star-container">
                       
                        {avgRate === 5 ?
                            
                            <>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               <i class="fa fa-star"></i>
                               </>
                             :
                             <></> 
                             } 
                             {avgRate === 4 ?
                               
                               
                              <>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  </> 
                               
                              :
                              <></> 
                              } 
 
                               {avgRate === 3 ?
                                  <i class="fa fa-star">
                                 <i class="fa fa-star"></i>
                                 <i class="fa fa-star"></i>
                              </i>
                             :
                             <></> 
                             } 
 
                             {avgRate === 2 ?  
                               <i class="fa fa-star">
                                  <i class="fa fa-star"></i>
                               </i>
  
                               
                              :
                              <></> 
                              } 
 
                             {avgRate === 1 ?  
                                  <i class="fa fa-star"></i>
 
                              :
                              <></> 
                              } 



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


{/* feedback */}
<div class="property-about page-container">
<h1>What people say</h1>

      
    </div>

  {reviews.map((rev)=>{
            return(
                <div>
                    <div class="property-testimonials page-container">
                        <div class="testimonial-block">
                                    <div class="testimonial-image-container">
                                        <img class="testimonial-img" src={profile1}/>
                                    </div>
                                    <div class="testimonial-text">
                                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                                        <p>{rev.content}</p>
                                    </div>
                            <div class="testimonial-name">- {rev.fullName}</div>
                        </div>
                    </div>
                </div>

            )
            })};

    </div>
  );
}
export default PropertyDetail;
