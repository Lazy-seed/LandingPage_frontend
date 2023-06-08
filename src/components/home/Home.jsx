import React, { useState } from 'react'
import './home.scss';
import img from './img/girl5.png';
import assistent from './img/assistent.png';
import RightForm from '../forms/RightForm';
import Services from '../services/Services';
import Testimonial from '../testimonial/Testimonial';
import axios from 'axios';


export default function Home() {

  const [showPop, setshowPop] = useState(true);
  const [showpopForm, setshowpopForm] = useState(false);
  const [Fname, setFname] = useState('')
  const [email, setemail] = useState('')

  return (

    <>
      {
        showPop === true ?
          <div className="popup">
{/* show from or banner */}
            (

{showpopForm===false ?    <div className="container">
              <div className="wrapper">
                <img src={assistent} alt="" />
                <div id="popup_title">
                  <h1>Are you aspiring to crack the <span> GATE exam in 2025</span>? For Electrical Engineering or
                    Mechanical Engineering</h1>
                  <h3>GATE infinite brings you a program that offers Flexibility, quality teaching &amp;
                    access to top-notch resources.</h3>
                </div>
                <button id='talk-btn' onClick={() => setshowpopForm(true)}>Talk to Our Counsellor</button>
                <button id='x-btn' onClick={() => setshowPop(false)}>X</button>
              </div> 
            </div> 
            :
            <div className="container2">
              <div className="wrapper2">
                <h1>Get an immediate assistance</h1>
                <div id='name'>
                  <h2>Name</h2>
                  <input type="text" onChange={(e) => { setFname(e.target.value) }} id='F_email' />
                </div>
                <div id='email'>
                  <h2>Email</h2>
                  <input type="text" onChange={(e) => { setemail(e.target.value) }} id='I_email' />
                </div>
                <button id='talk-btn' onClick={() => { addUserDirect() }}>Sumbit</button>
                <button id='x-btn' onClick={() => setshowpopForm(false)}>X</button>
              </div>
            </div>
             } )
          
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


          </div>

          <div className="right" >
            <RightForm />
            {/* <h1>youtube video</h1> */}
          </div>
        </div>
      </div>

      <div id="banner2">
        <h1>Get free GATE study plan (Note: 1 year study plan for 2025)</h1>
      </div>
      <Testimonial />

    </>
  )




  // 
  function addUserDirect() {


    // name 
    if (Fname.trim() === '') {
      document.getElementById('F_email').style = 'border:1px solid red';
      document.getElementById('F_email').style.boxShadow = '0 0 5px red';
      return false
    }

    // check mail
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ((!(email.match(validRegex)) || email.trim() === '')) {
      console.log("email not match");
      document.getElementById('I_email').style = 'border:1px solid red';
      document.getElementById('I_email').style.boxShadow = '0 0 5px red';
      return false
    }


    const data = { first_name: Fname, email: email }
    axios.post('https://landingpage77-backend.onrender.com/api/newUser', data, { withCredentials: true })
      .then((res) => {
        console.log(res.data)

      })



  }
}
