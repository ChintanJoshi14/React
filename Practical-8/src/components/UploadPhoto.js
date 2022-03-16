import { Field } from "formik";
import React from "react";
import './UploadPhoto.css';

class UploadPhoto extends React.Component {
  render() {
    return (
      <div className="upload-button-layout">

      


        <input type="file" id="upload" hidden/>
        <label htmlFor="upload">Photo +</label>
      </div>
    );
  }
  
}
export default UploadPhoto;
