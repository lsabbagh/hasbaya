import React from "react";
import "./index.css";
export default () => {
  return (
    <div className="hunt-container">
      {/* @TODO: wael: Fix titles */}
      <span className="sayd-title">Sayd Origin </span>
      <div style={{display: 'flex'}}>

        <div className="sayd-container"

        >
          <div className="sayd-item"
            onClick={() => {
              alert('abalfdsfa')
            }}
          >
            قحواني
          </div>
          <div className="sayd-item">
            شقيف تيني
          </div>
          <div className="sayd-item">
            سواد
          </div>

        </div>
        <div className='sayd-content'>
          <img 
          className='sayd-image'
          src="https://barhoumadel.files.wordpress.com/2009/11/d8a7d984d8b5d988d8b1d8a9-d8aad8aad983d984d985.jpg" />
        
        <img 
          className='sayd-image'
          src='https://img.ltwebstatic.com/images3_pi/2020/11/11/160507225373f548c8877bb236d8404105e7daec1f.webp'
          />
       
       <img 
          className='sayd-image'
          src="https://barhoumadel.files.wordpress.com/2009/11/d8a7d984d8b5d988d8b1d8a9-d8aad8aad983d984d985.jpg" />
       
        
        </div>

      </div>
    </div>
  );
};
