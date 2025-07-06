import React from 'react';
import './ike-avatar.css';
function IkeAvatar() {
  return (
    <div className="ike-avatar-container">
      <div className="ike-hat"></div>
      <div className="ike-ear"></div>
      {/*small ears*/}
      <div className="ike-face">
        {/*small head*/}
        <div className="ike-face-features">
          <div className="ike-brows">
            <div className="ike-brow"></div>
            <div className="ike-brow"></div>
          </div>
          <div className="ike-eyes">
            <div className="ike-eye"></div>
            <div className="ike-eye"></div>
          </div>
          <div className="ike-nose"></div>
          <div className="ike-mouth"></div>
        </div>
      </div>
      <div className="ike-body">{/*chain, broad shoulders*/}</div>
    </div>
  );
}

export default IkeAvatar;
