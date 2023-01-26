import React, { useState } from "react";
import "../styles/Share.css";
import closeIcon from "../assets/close.svg";
import clipboardIcon from "../assets/clipboard.svg";
import whatsappIcon from "../assets/whatsapp.png";
import gmailIcon from "../assets/gmail.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";

import { showToast } from "../utils/toast";

const Share = ({ setPopup, shareLink }) => {
  return (
    <div className="popup-backdrop">
      <div className="popup | bg-neutral-100">
        <div className="popup__header">
          <h3 className="fs-title fw-semi-bold">Share Your Files</h3>
          <button className="popup__close" onClick={() => setPopup(false)}>
            <img src={closeIcon} draggable="false" />
          </button>
        </div>
        <div className="popup__body">
          <p className="fs-body-sm text-neutral-500">Share link via</p>
          <div className="share-options">
            <button className="share-social">
              <img src={gmailIcon} draggable="false" />
            </button>
            <button className="share-social">
              <img src={facebookIcon} draggable="false" />
            </button>
            <button className="share-social">
              <img src={twitterIcon} draggable="false" />
            </button>
            <button className="share-social">
              <img src={whatsappIcon} draggable="false" />
            </button>
            <button className="share-social">
              <img src={linkedinIcon} draggable="false" />
            </button>
          </div>
        </div>
        <div className="popup__footer">
          <p className="fs-body-sm text-neutral-500">or Click to copy</p>
          <div
            className="share-link"
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.innerText);
              showToast("Copied to Clipboard!");
            }}
          >
            <span
              className="fw-medium"
              style={{ width: "93%", overflow: "hidden", whiteSpace: "nowrap" }}
            >
              {shareLink}
            </span>
            <img src={clipboardIcon} draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
