import React from 'react';
import './stewie-avatar.css';

function StewieAvatar() {
  return (
    <div className="avatar-container stewie-avatar-container">
      <div className="stewie-avatar-hair"></div>
      <div className="stewie-avatar-head">
        <div className="stewie-avatar-brows"></div>
        <div className="stewie-avatar-eyes">
          <div className="stewie-avatar-eye"></div>
          <div className="stewie-avatar-eye"></div>
        </div>
        <div className="stewie-avatar-nose"></div>
        <div className="stewie-avatar-mouth"></div>
      </div>
      <div className="stewie-avatar-body"></div>
    </div>
  );
}

export default StewieAvatar;
