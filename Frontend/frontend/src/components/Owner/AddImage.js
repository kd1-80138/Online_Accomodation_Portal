import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [success,setSuccess]= useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const propertyId = searchParams.get('propertyId');
  
  const token = sessionStorage.getItem('jwt');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null); // Clear any previous errors when a new file is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    

    try {
      const response =  axios.post(`http://localhost:7070/image/upload/${propertyId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      // Handle response
      setSuccess("Image uploaded successfully");
      console.log('Image uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image. Please try again.');
    }
  };

  return (
    <div>

      <br/><br/>
      <form onSubmit={handleSubmit} style={{ marginTop: '100px' }} encType="multipart/form-data">
        <input type="file" name="file" onChange={handleFileChange} />
        <input type="submit" value="Upload Image" />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      { success && <p style={{ color: 'green' }}>{success}</p>}

      <br/>
      <br/>
    </div>
  );
};

export default ImageUploadForm;
