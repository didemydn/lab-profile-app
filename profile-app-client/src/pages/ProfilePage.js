import React, { useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    axios.post("/api/upload", formData).then((response) => {
      // Handle response (update user profile, display message, etc.)
    });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default ProfilePage;