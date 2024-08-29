import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://phsarapi.vercel.app/get-images');
        setImages(response.data); // Set the images data to state
      } catch (err) {
        setError('Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="image-gallery">
      {images.length === 0 ? (
        <p>No images available</p>
      ) : (
        images.map(image => (
          <div key={image.id} className="image-item">
            <img src={image.image_path} alt={image.image_name} style={{ width: '100%', height: 'auto' }} />
            <p>{image.image_name}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ImageGallery;
