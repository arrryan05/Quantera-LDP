import React from 'react'
import { useState } from "react";
import Image from 'next/image';
import Img1 from './assets/topwithoutlogo.png'
import './page.scss'
import GreenBtn from '../../../../components/Green-btn/page'
import img2 from './assets/tickwrong.png'
import img3 from './assets/player.png'
import img4 from './assets/Screen Shot 2023-05-02 at 17.41.00.png'
import img5 from './assets/Gmail.png'
import img6 from './assets/adblock.png'
import img7 from './assets/Light_toggle.png'
import img8 from './assets/wavebgremove.png'
import img9 from './assets/Logo.png'

import img10 from './assets/Group 3.png'
import img11 from './assets/Group 4.png'

import Counter from '../../../../modules/counter/page'
import Learning from '../../../../modules/learning/page'
import Superinvestor from '../../../../modules/superinvestor/page'
import Smarter from '../../../../modules/smarter/page'


export default function Landing() {

  //   // storing input data

  //   const initialValues = {
  //     email: ""

  //   };
  //   const [data, setData] = useState(initialValues);

  //   const handleChange = (e) => {
  //     // console.log(e.target.name, e.target.value)
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   };

  //   const display = () => { console.log(data); }
  // // console.log(data)




  return (

    <div id='main'>

      {/* first div */}
      <div style={{height:"100vh", width:"100vh"}}>
      <Smarter/>
      </div>
      
      {/* first div close */}

      {/* extra div */}

      <Counter />


      {/* extra div end */}

      {/* second div */}

      <div className='second-div'>

        <div className='second-left-div'>

          <Image src={img10} alt='' />
        </div>


        <div className='second-right-div'>
          <div className='second-top-right-div'></div>
          <h1>Compare <br></br>companies and their <br></br> performence</h1>
          <p>Compare any company with any other company on all metric available</p>



        </div>

      </div>


      {/* second div close */}


      {/* third div */}

      <Learning />

      {/* third div close */}



      {/* fourth div */}

      <div className='fourth-div'>
        <div className='main'>
          <h1>Earnings</h1>
        </div>


        <div className='fourth-mid-data'>

          <div className='left'>
            <p>Simple Synced to your <br></br> Calender</p>

          </div>


          <div className='right'>
            <Image src={img4} alt='' />
          </div>

        </div>






      </div>

      {/* fourth div close */}



      {/* fifth div */}
      <div className='fifth-div'>
        <div className='fifth-div-down'>
          <h1>Full Cashflow Overview of your favrouit names</h1>
          <p>So how cash flow and debit play an important role in company growth and scale</p>



        </div>
        <div className='fifth-div-up'>
          <div className='fifth-inner-div'></div>
          <Image src={img11} alt='' />

        </div>

      </div>

      {/* fifth div close */}




      {/* sixth div */}

      <div id='sixth-div'>
        <div className='inner'>
          <div className='sixth-inner-div'></div>
          <div className='main-sixth'>
            <p>Full historical data of  any stock</p>
          </div>
          <Image src={img7} alt='' />
          <div className="btn">
            <GreenBtn
              buttonText={"Get Started"}
            />
          </div>

        </div>
        <Image src={img8} alt='' />

      </div>

      {/* sixth div close */}



      {/* seven div */}
      <Superinvestor />

      {/* seven div close */}



      {/* eightdiv */}

      <div className='eight-div'>
        <div className='inner-div'>
          <h1>Downlaod and share any chart , PDF or Permalink</h1>

          <p>Let people into your custom chart and reports</p>

          <div className="search">
            <input
              placeholder='Email'

              name="email"
              id="email2"
              autoComplete='email'

            ></input>

            <div className="btn">
              <GreenBtn buttonText={"Get Free Premium Report !"} />
            </div>
          </div>


          <Image src={img9} alt='' />
        </div>
      </div>

    </div>

  )
}
