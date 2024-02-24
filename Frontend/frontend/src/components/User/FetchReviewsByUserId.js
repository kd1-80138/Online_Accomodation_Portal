import axios from "axios"
import { BASE_URL } from "../../url"
import {useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';


//fetch reviews of property by propertyId
function FetchPropertyReviewByUserId() {

    const [UserId, setUserId] = useState("");
    const [Data, setData] = useState([])



    const handleDelete =()=>{
        axios
            .delete(`${BASE_URL}/user/delete`)
            .then((response) => {
                console.log(response.data);
                setData(response.data)
                toast.success('Review Added successfully!');
            })
            .catch((error) => {
                toast.error('SomeThing Went Wrong');
            });

    }

    const handleEdit =()=>{

    }



   const handleSubmit = () => {
        axios
            .get(`${BASE_URL}/user/${UserId}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data)
                toast.success('Review Added successfully!');
            })
            .catch((error) => {
                toast.error('SomeThing Went Wrong');
            });
    }

    {/*★★★★ */ }
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        const starArray = Array(fullStars).fill('★');
        if (halfStar) starArray.push('☆');
        const emptyStarArray = Array(emptyStars).fill('☆');

        return [...starArray, ...emptyStarArray].map((star, index) => (
            <span key={index}>{star}</span>
        ));
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User ID:
                </label>
                <input
                    type="text"
                    value={UserId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                    placeholder="enter Property Id"
                />
                <button type="submit">Submit Review</button>
            </form>

            <div>
                <h2>Reviews for Property {UserId}</h2>
                <table>
                    <thead>
                        <th>
                            <td>ReviewID </td>
                            <td>Rating</td>
                            <td>Comment</td>
                            <td>Action</td>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            {Data.map((review) => (
                                <tr key={review.id}>
                                    <td>{review.id}</td>
                                    <td>{renderStars(review.rating)}</td>
                                    <td>{review.comment}</td>
                                    <td>     
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(review.id)}>
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleEdit(review.id)}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FetchPropertyReviewByUserId
