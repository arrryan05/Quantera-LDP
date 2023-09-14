import React from 'react';
import Image from 'next/image';
import './page.scss';
import GreenBtn from '../../../../components/Green-btn/page'
import Img from './assets/Group 4.png'

export default function V2() {
    return (
        <div id="container">
            <h1 className='mainheading'>Smarter insights <span style={{ color: "green" }}>lead to b</span>etter decisions</h1>
            <p>Vistualise Complex Data Simply</p>

            <div className="heading">Try Free for 45 days</div>
           <div className='bottom'>
         
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
            
           <Image src={Img} alt=''/>

           </div>


        </div>
    )
};