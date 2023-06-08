import React, { useState } from 'react'
import './home.scss';
import img from './img/girl5.png';
import assistent from './img/assistent.png';
import RightForm from '../forms/RightForm';
import Services from '../services/Services';
import Testimonial from '../testimonial/Testimonial';


export default function Home() {

  const [showPop, setshowPop] = useState(true);


  return (

    <>
      {
        showPop === true ?
          <div className="popup">
            <div className="container">
              <div className="wrapper">
                <img src={assistent} alt="" />
                <div id="popup_title">
                  <h1>Are you aspiring to crack the <span> GATE exam in 2025</span>? For Electrical Engineering or
                    Mechanical Engineering</h1>
                  <h3>GATE infinite brings you a program that offers Flexibility, quality teaching &amp;
                    access to top-notch resources.</h3>
                </div>
                <button id='talk-btn'>Talk to Our Counsellor</button>
                <button id='x-btn' onClick={() => setshowPop(false)}>X</button>
              </div>
            </div>
          </div> :
          <></>
      }



      <div className='header'>
        <div className="wrapper">
          <div className="container">

            <div className="left">
              <h2>Unlock your potential.<br /> Ace the GATE 2025 with <span>Vidyalankar </span>
                Infinite.</h2>
              <h4>Prepare for GATE the Infinite way &amp; get the AIR you
                deserve.
                With our expert guidance and proven teaching methodology, you can
                achieve remarkable results &amp; open doors to unlimited opportunities.</h4>
              {/* <button >Apply now</button> */}
            </div>
            <div className="right">
              <div className="right-img">

                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <div id="show_subtitle_onMobile">
        <h4>Prepare for GATE the Infinite way &amp; get the AIR you
          deserve.
          With our expert guidance and proven teaching methodology, you can
          achieve remarkable results &amp; open doors to unlimited opportunities.</h4>
      </div> */}



      <div className="program">
        <div className="conatainer">
          <div className="left">
            <div id="banner1">
              <h1> Limited time offer! Claim your exclusive discount on total fees and GATE 2025 study planner.</h1>
            </div>
            <Services />
            {/* <div id="banner2">
              <h1>Get free GATE study plan (Note: 1 year study plan for 2025)</h1>
            </div> */}


          </div>

          <div className="right" >
            <RightForm />
            {/* <h1>youtube video</h1> */}
          </div>
        </div>
      </div>

      <Testimonial />

    </>
  )
}
