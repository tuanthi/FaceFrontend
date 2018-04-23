import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, demo }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        <div className='demo-text' style={{top: 20, left: 20}}>
        	{demo.age_name} <br />
        	{demo.gender_name} <br />
        	{demo.race_name} <br />
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;