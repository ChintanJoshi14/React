import React from "react";
import './UploadPhoto.css';

function UploadPhoto() {
  return (
    <div className="upload-button-layout">
      <input type="file" id="upload" hidden/>
      <label htmlFor="upload">Photo +</label>
    </div>
  );
}
export default UploadPhoto;
