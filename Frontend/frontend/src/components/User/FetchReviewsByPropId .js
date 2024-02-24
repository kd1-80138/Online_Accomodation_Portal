import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from "../../Token";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function FetchPropertyReview() {
    const [data, setData] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const propertyId = searchParams.get('propertyId');
    useEffect(() => {
        // Fetch reviews when the component mounts
        fetchData();
    }, []);
    
    const fetchData = () => {
        axios.get(`${BASE_URL}/reviews/property?propertyId=${propertyId}`, config)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                toast.success('Reviews fetched successfully!');
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
                toast.error('Failed to fetch reviews');
            });
    };

    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const starArray = [];
      
        for (let i = 0; i < fullStars; i++) {
          starArray.push(<span key={i} style={{ color: 'yellow' }}>★</span>);
        }
      
        if (halfStar) {
          starArray.push(<span key={starArray.length} style={{ color: 'yellow' }}>☆</span>);
        }
      
        // Add empty stars with red color
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
          starArray.push(<span key={fullStars + i} style={{ color: 'red' }}>☆</span>);
        }
      
        return starArray;
      }
      

    return (
        <div className="reviews-container" style={{ backgroundColor: '#f0f0f0', padding: '50px', borderRadius: '8px' }}>
      <h2 className="reviews-heading">Reviews for Property</h2>
      <div className="reviews-list">
        {data.map((review) => (
          <div key={review.id} className="review-box">
            <div className="user-info">{review.firstName} {review.lastName}</div>
            <div className="rating">
              {/* Implementing stars */}
              <span className="filled-star">{renderStars(review.rating)}</span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>

      
    );
}

export default FetchPropertyReview;
