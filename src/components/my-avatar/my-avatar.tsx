import React from 'react';
import './my-avatar.css';
function MyAvatar() {
  return (
    <div className="my-avatar-container">
      <div className="my-hair"></div>
      <div className="my-ear"></div>
      <div className="my-earring"></div>
      <div className="my-face">
        <div className="my-brows">
          <div className="my-brow"></div>
          <div className="my-brow"></div>
        </div>
        <div className="my-eyes">
          <div className="my-eye"></div>
          <div className="my-eye"></div>
        </div>
        <div className="my-nose"></div>
        <div className="my-mouth"></div>
        <div className="my-body"></div>
      </div>
    </div>
  );
}

export default MyAvatar;
