import React from 'react'
import Sidebar from '../../utils/sidebar/Sidebar'
import Navbar from '../../utils/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState, URLcreateObjectURL } from 'react';
import "./new.scss"
import { useParams } from 'react-router-dom';

const New = ({ inputs, edit, title }) => {
  const [file, setFile] = useState("");
  let params = useParams();
  if (edit) { 
    return (
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="newComponent">
            <div className="top">
              <h1 className="title">{title}</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img src={file ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-15.jpg"}
                  alt="image" />
              </div>
              <div className="right">
                <form>
                <div className="formInput">
                    Image:<label htmlFor='fileUpload'><DriveFolderUploadIcon className='icon'/></label>
                    <input type="file" name="image" id='fileUpload' style={{ display: 'none' }} onChange={e => {
                      setFile(e.target.files[0]);
                      console.log(file);
                    }} />
                  </div>
                  {inputs.map((item) => (
                    <div className="formInput" key={item.id}>
                      <label>{item.label}</label>
                      <input type={item.type} name={item.name} placeholder={item.placeholder} />
                    </div>
                  )
                  )}
                  <button type='submit' >Create</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newComponent">
          <div className="top">
            <h1 className="title">{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-15.jpg"}
                alt="image" />
            </div>
            <div className="right">
              <form>
              <div className="formInput">
                  Image:<label htmlFor='fileUpload'><DriveFolderUploadIcon className='icon'/></label>
                  <input type="file" name="image" id='fileUpload' style={{ display: 'none' }} onChange={e => {
                    setFile(e.target.files[0]);
                    console.log(file);
                  }} />
                </div>
                {inputs.map((item) => (
                  <div className="formInput" key={item.id}>
                    <label>{item.label}</label>
                    <input type={item.type} name={item.name} placeholder={item.placeholder} />
                  </div>
                )
                )}
                <button type='submit' >Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default New