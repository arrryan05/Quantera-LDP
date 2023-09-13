// pages/learning.tsx
import React from 'react';
import Image from 'next/image';
import GreenBtn from '../../components/Green-btn/page'; 
import Img from './asset/player.png'
import './page.scss'

const Learning: React.FC = () => {
  return (
    <div className="third-div">
      <div className="third-inner-div"></div>
      <div className="data">
        <h1>Listen to earning, and their call transcript</h1>
        <p>Listen to earning available directly on the website</p>
      </div>
      <div className="btn">
        <GreenBtn buttonText="Get Started" />
      </div>

      <Image src={Img} alt="Player" /> 
      
      <div className="bottom-data">Informed</div>
    </div>
  );
};

export default Learning;
