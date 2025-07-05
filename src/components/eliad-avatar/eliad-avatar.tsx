import React from 'react';
import './eliad-avatar.css';

function EliadAvatar() {
  return (
    <div className="eliad-avatar-container">
      <div className="eliad-hair"></div>
      <div className="eliad-hair-front"></div>
      <div className="eliad-ear"></div>
      <div className="eliad-face">
        <div className="eliad-brows">
          <div className="eliad-brow"></div>
          <div className="eliad-brow"></div>
        </div>
        <div className="eliad-eyes">
          <div className="eliad-eye"></div>
          <div className="eliad-eye"></div>
        </div>
        <div className="eliad-beard">
          <div className="eliad-nose"></div>
          <div className="eliad-mouth"></div>
        </div>

        <div className="eliad-body"></div>
      </div>
    </div>
  );
}

export default EliadAvatar;
