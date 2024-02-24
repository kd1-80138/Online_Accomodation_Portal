import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { BASE_URL } from '../../url';
import { useLocation } from 'react-router-dom';
import { config } from '../../Token';



function ViewImages(params) {

    const [imagelist, setImageList]=  useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const propertyId = searchParams.get('propertyId');

    useEffect(() => {
        const fetchImages =  () => {
            debugger;
            try {
                console.log (`${BASE_URL}/image/imagelist/${propertyId}`);
                const response =  axios.get(`${BASE_URL}/image/imagelist/${propertyId}`,config);
                console.log(response);
                setImageList(response.data); // Assuming the image data is in response.data
                console.log (imagelist);

            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
        <h2>Property Images</h2>
        {imagelist ?( imagelist.map((image, index) => (
            <img key={index} src={image} alt={`${index}`}/>
        ))):(<p>Images Not found</p>)
}
    </div>
    );
    
}
export default  ViewImages;