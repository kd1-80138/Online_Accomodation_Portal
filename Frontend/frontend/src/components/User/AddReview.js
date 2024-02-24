import { config } from "../../Token";
import axios from "axios"
import { BASE_URL } from "../../url"
import {useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

function AddReview(params) {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const propertyId = searchParams.get('propertyId');
    const userId=sessionStorage.getItem("id");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if ( !rating || !comment ) {
            toast.error('All fields are required!');
            return;
        }

        const review = {
            rating,
            comment,
            userId
        };

        // Call the onSubmit prop with the review object
        //onSubmit(review);

        axios  
            .post(`${BASE_URL}/reviews/add?propertyId=${propertyId}`,review,config)
            .then((response) => {
                console.log(response.data);
                toast.success('Review Added successfully!');
            })
            .catch((error) => { 
                console.log(error.data);
                toast.error('Somethig Went Wrong!')
            });
    };

    const handleClear = () => {
        // Clear form fields
        setRating('');
        setComment('');
      };

    return (
      <div className="container">
        <br/><br/> <br/><br/>
        <h2>Add Review</h2>
        <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            step="0.5"
            min='0'
            max="5"
            required
            className="form-control"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            className="form-control"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={userId}
           disabled
          />
        </div>
        <br/><br/> 
        <button type="submit" className="btn btn-primary mr-2">Submit Review</button>{'     '}
        <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
      </form>
      <ToastContainer />
      <br/><br/> <br/><br/>
    </div>
    )
}

export default AddReview;