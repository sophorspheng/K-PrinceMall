import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input, Button, message, Spin } from 'antd';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState('');
  const [imageNames, setImageNames] = useState('');
  const [previewUrlUpload, setPreviewUrlUpload] = useState(null);
  const [previewUrlUpdate, setPreviewUrlUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingupdate, setLoadingUpdate] = useState(false);

  // Handle file change for upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrlUpload(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrlUpload(null);
    }
  };

  // Handle image name change for upload
  const handleImageNameChange = (e) => {
    setImageName(e.target.value);
  };

  // Handle upload
  const handleUpload = async () => {
    if (!selectedFile || !imageName) {
      message.error('Please select a file and provide an image name');
      return;
    }
  
    setLoading(true); // Start loading animation
  
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('image_name', imageName);
  
    try {
      const response = await axios.post('https://phsarapi.vercel.app/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Image uploaded successfully');
      // Clear the preview and reset state
      setSelectedFile(null);
      setImageName('');
      setPreviewUrlUpload(null);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle duplicate image name error
        message.error('Image name already exists');
      } else {
        message.error('Failed to upload image');
      }
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  // Handle file change for update
  const handleFileChanges = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrlUpdate(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrlUpdate(null);
    }
  };

  // Handle image name change for update
  const handleImageNameChanges = (e) => {
    setImageNames(e.target.value);
  };

  // Handle update
  const handleUpdate = async () => {
    if (!selectedFile || !imageNames) {
      message.error('Please select a file and provide an image name');
      return;
    }

    setLoading(true); // Start loading animation

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('image_name', imageNames);

    try {
      const response = await axios.put('https://phsarapi.vercel.app/update-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Image updated successfully');
      // Clear the preview and reset state
      setSelectedFile(null);
      setImageNames('');
      setPreviewUrlUpdate(null);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        message.error('Image not found');
      } else {
        message.error('Failed to update image');
      }
    } finally {
      setLoading(false); // Stop loading animation
    }
  };

  return (
    <div className="p-5 w-full pt-20 space-y-8">
      <div className='flex justify-between'>
        <Button
          type='primary'
          onClick={() => {
            localStorage.setItem("isLoggedIn", "0");
            window.location.href = "/";
          }}
        >
          LogOut
        </Button>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={loading} // Disable the button while loading
        >
          Upload Image
        </Button>
      </div>
      <h1 className="text-2xl font-bold mb-5">Upload Image</h1>
      <div className='grid grid-cols-2 gap-5'>
        <Input
          type="text"
          placeholder="Enter Image Name"
          value={imageName}
          onChange={handleImageNameChange}
          disabled={loading} // Disable the input while loading
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={loading} // Disable the input while loading
        />
      </div>
      {previewUrlUpload && (
        <div className="mt-5">
          <img src={previewUrlUpload} alt="Upload Preview" className="max-w-xs max-h-64 rounded" />
        </div>
      )}
      {loading && (
        <div className="mt-5 flex justify-center">
          <Spin size="large" /> {/* Loading spinner */}
        </div>
      )}

      <hr className='pt-5 p2'/>
      <hr className='pt-5 p2'/>

        <h1 className="text-2xl font-bold mb-5">Update Image</h1>
        <div className='grid grid-cols-2 gap-5'>
          <Input
            type="text"
            placeholder="Enter Image Name"
            value={imageNames}
            onChange={handleImageNameChanges}
            disabled={loading}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChanges}
            disabled={loading}
          />
        </div>
        {previewUrlUpdate && (
          <div className="mt-5">
            <img src={previewUrlUpdate} alt="Update Preview" className="max-w-xs max-h-64 rounded" />
          </div>
        )}
        {loading && (
          <div className="mt-5 flex justify-center">
            <Spin size="large" />
          </div>
        )}
        <Button
          type="primary"
          onClick={handleUpdate}
          disabled={loadingupdate}
          className="mt-5"
        >
          Update Image
        </Button>

    </div>
  );
};

export default Dashboard;
