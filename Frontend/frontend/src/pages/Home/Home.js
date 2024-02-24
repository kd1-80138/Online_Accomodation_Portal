import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import delhi from "../../assets/delhi.png";
import mumbai from "../../assets/mumbai.png";
import hydrabad from "../../assets/hyderabad.png";
import banglore from "../../assets/bangalore.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [City, setCity] = useState("");
  var cityName=City;
  const [id, setId] = useState(0);


  return (
    <div>
      <div className="bgimage">
        <div className="container col-md-4 mt-4">
          <br />
          <br />
          <br />
          <br />
         
        </div>
      </div>
 
      <br/>
      <br/>
      <br/>
             <h1 class="city-heading">
                     In This Major Cities We Provide Services  
                        </h1>
                        <br/>
                         <br/>
                          <div class="row">

                    <div class="city-card-container col-md">
                            <div class="city-card rounded-circle">
                             
                                      <img src={delhi} className="city-img" ></img>
                              
                            </div> 
                    </div>

                    <div class="city-card-container col-md">
                        <div class="city-card rounded-circle">
                           
                                  <img src={mumbai} class="city-img" ></img>
                           
                        </div>
                    </div>

                    <div class="city-card-container col-md">
                            <div class="city-card rounded-circle">
                            
                            <img src={banglore} class="city-img" ></img>
                            
                            </div>     
                    </div>

                    <div class="city-card-container col-md">
                            <div class="city-card rounded-circle">
                           
                            <img src={hydrabad} class="city-img" ></img>
                            
                            </div>
                        
                    </div>
        
       <br/>
       <br/>
       
    </div>

    <br/><br/><br/>

    <div className="border mx-4 mt-4 mb-3 border-dark">
    <div class="container text-center my-5">
        <p className="lead" >
        Welcome to Flat Rentals! We're here to make apartment and society management easy and hassle-free. Our goal is to help flat owners and residents have a smooth and enjoyable experience.
Our mission is simple: We want to enhance apartment and society living. We use smart software to streamline management processes, making it easy for everyone to enjoy their living space.
We're a team of friendly individuals who are passionate about technology and community living. With expertise in software development, property management, and customer support, we're dedicated to providing top-notch service.
Constantly innovating with technology, our software is user-friendly for both property owners and residents. If you have any questions or issues, our support team is always available to assist you.
Rest assured, your information is safe with us. We prioritize strong security measures to protect your data.
Thank you for choosing Flat Rentals for your property management needs. Together, we'll create efficient, secure, and enjoyable living environments for everyone.

        </p>
      </div>
      </div>
       
      <br/>
       <br/>
       <br/>
       <br/>
          

    </div>

    
  );
};

export default Home;
