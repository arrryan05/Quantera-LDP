// pages/index.tsx
import React, { useState } from 'react';
import GreenBtn from '../../components/Green-btn/page'; // Update the import path
import './page.scss'

const Page: React.FC = () => {
  // Storing input data
  //   const initialValues = {
  //     email: '',
  //   };
  //   const [data, setData] = useState(initialValues);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   };

  //   const display = () => {
  //     console.log(data);
  //   };

  return (
    <div className="extradiv">
      <div className="heading">Try Free for 45 days</div>
      <div className="search">
        <input
          type="text"
          placeholder="Email"
          name="email"
        //   value={data.email}
        //   onChange={handleChange}
        />

        <div className="btn">
          <GreenBtn /*onClick={display} className="custom-btn"*/ buttonText="Get Free Premium Report!" />
        </div>
      </div>

      <div className="extrainner">
        <div className="dataone">
          <h1>120</h1>
          <p>Trusted</p>
        </div>
        <div className="datatwo">
          <h1>120</h1>
          <p>Trusted</p>
        </div>
        <div className="datathree">
          <h1>120</h1>
          <p>Trusted</p>
        </div>
      </div>

      <div className="innerpara">
        <h4>"These graphs have been giving clarity like no other tool out there"</h4>
        <p>~Finance Professional</p>
      </div>
    </div>
  );
};

export default Page;
