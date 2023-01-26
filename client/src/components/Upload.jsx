import React, { useRef, useState } from "react";
import axios from "axios";
import "../styles/Upload.css";
import fileIcon from "../assets/file.svg";
import Share from "./Share";

const Upload = () => {
  const [popup, setPopup] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const fileInput = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    const element = e.target;
    if (!element.classList.contains("active")) element.classList.add("active");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    const element = e.target;
    element.classList.remove("active");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const element = e.target;
    element.classList.remove("active");
    fileInput.files = e.dataTransfer.files;
    // console.log(fileInput.files);
    fileUpload();
  };

  const handleFileSelect = () => {
    fileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files;
    fileInput.files = fileUploaded;
    // console.log(fileInput.files);
    fileUpload();
  };

  const fileUpload = async () => {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    await axios
      .post("/api/files", formData)
      .then((res) => {
        console.log(res.data);
        setShareLink(res.data.file);
        setPopup(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <section className="upload-files | bg-neutral-100 box-shadow">
        <h3 className="fw-semi-bold fs-title">Upload Files</h3>
        <div
          className="upload-area"
          onDragOver={(e) => handleDrag(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDrop={(e) => handleDrop(e)}
        >
          <div className="upload--icon">
            <img src={fileIcon} draggable="false" />
          </div>
          <p className="fw-medium">Drag and Drop your files here</p>
          <span className="separator | fs-body-sm text-neutral-500">or</span>
          <button className="btn-choose" onClick={handleFileSelect}>
            Choose File
          </button>
          <input
            type="file"
            name="select-files"
            ref={fileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <span className="fs-body-x-sm text-neutral-500">
            Max file size 100MB
          </span>
        </div>
      </section>
      {popup && <Share setPopup={setPopup} shareLink={shareLink} />}
    </>
  );
};

export default Upload;
