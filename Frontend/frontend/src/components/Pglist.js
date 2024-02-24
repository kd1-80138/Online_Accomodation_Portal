import React from "react";
import { Card , CardBody ,CardTitle , CardSubtitle ,CardText,CardFooter,Button,Container } from "reactstrap";
import prop1 from "../assets/properties/1/1d4f0757fdb86d5f.jpg";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

import "../css/admin.css"


const Pglist =(props) =>
{
    const{pglist} =props
    const [pid, setpid] = useState('');
    const navigate=useNavigate()
  

    const handleButtonClick = (data) => {
        console.log('id', data);
       
        navigate("/PropertyDetail",{ state :{ pid: data}})
      };


     //average of rating
     var avgRate = parseInt((pglist.ratingClean+ pglist.ratingFood + pglist.ratingSafety )/3);


    return (
       
           
        <Card className="text-center">
            <CardBody>
            
                    <Container className="text-center">
                
                    </Container>

                    <div class="property-card row">
            <div class="image-container col-md-4">
                <img src={prop1} />
            </div>
            <div class="content-container col-md-8">
                <div class="row no-gutters justify-content-between">
                    <div class="star-container" title="4.5">
                       

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
                <div class="detail-container">
                    <div class="property-name"> <CardSubtitle> {pglist.name} </CardSubtitle></div>
                    <div class="property-address"> <CardText>{pglist.description}</CardText></div>
                    <CardText>{pglist.address}</CardText>
                    <div class="property-gender">
                    <CardText>{pglist.gender}</CardText>
                    {/* {pglist.id} */}
                        {/* <img src="img/male.png" /> */}
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="rent-container col-6">
                        <div class="rent"><CardText>Rs{pglist.rent}/-</CardText></div>
                        <div class="rent-unit">per month</div>
                    </div>
                    <div class="button-container col-6" >

                       <button  class="btn btn-primary" onClick={ () => handleButtonClick(pglist.id)}>View</button>
                        {/* <button onClick={ (e) => pglistinfo(e)}>View   </button> */}
                        {/* <button onClick={() => handleChange(pglist.id)}></button> */}

                      
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
               
            </CardBody> 
        </Card>

    )
}

export default Pglist;