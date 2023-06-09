import React, { useState } from 'react';
import './rightForm.scss'
import axios from 'axios';
import sucs from './img/success.png'

export default function RightForm() {



  const [showlodaer, setshowlodaer] = useState(false)
  const [showForm, setshowForm] = useState(true)
  const [user_added, setuser_added] = useState(false)
  const [glob_otp, setglob_otp] = useState('')
  const [new_otp, setnew_otp] = useState('')
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [branch, setbranch] = useState('dombivli')
  const [GateYear, setGateYear] = useState('2025')





  return (
    <div className='RightForm'>
      <div id="form-heading">

        <h1>Start your GATE journey today!</h1>
        <h4>Don’t miss the opportunity to crack GATE 2025 with confidence.</h4>

      </div>


      {/*  main form details */}

      {showForm === true && user_added === false ?
        //  show loader 
        (showlodaer === true ? <div className="loader_div"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> </div> :
          <form >
            <h6 id='error_msg'>Enter all fields</h6>
            <div id="name">
              <h3>Name </h3>
              <input type="text" placeholder='First Name' onChange={(e) => { setFname(e.target.value) }} id='F_email' />
              <input type="text" placeholder='Last Name' onChange={(e) => { setLname(e.target.value) }} id='L_email' />
            </div>
            <div id="email">
              <h3>E-mail  </h3>
              <input type="text" placeholder='xyz1@gmail.com' onChange={(e) => { setemail(e.target.value) }} id='I_email' />
            </div>
            <div id="contact">
              <h3>Contact  </h3>
              <input type="text" placeholder='98xxxxxxx' onChange={(e) => { setcontact(e.target.value) }} id='I_contact' />
            </div>
            <div id="dropdown">

              <div id="Branch">
                <h3>Branch  </h3>
                <select name="branch" id='branch' onChange={(e) => { setbranch(e.target.value) }} >
                  <optgroup label="MUMBAI">
                    <option value="Dadar">Dadar</option>
                    <option value="Dombivli" defaultValue>Dombivli</option>
                  </optgroup>
                  <optgroup label="PUNE">
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </optgroup>
                </select>
              </div>
              <div id="GateYear" onChange={(e) => { setGateYear(e.target.value) }}>
                <h3>GATE year  </h3>
                <select name="gateYear" id='gateYear'>
                  <option value="2024" >2024</option>
                  <option value="2025" defaultValue>2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
            </div>
            <div id="btn">
              <button onClick={submit_Btn} >Continue </button>

            </div>
            <h6>
              Get free GATE study plan (Note: 1 year study plan for 2025)
            </h6>
          </form>

        ) :

        // {/* otp form  */}
        (
          user_added === false ?

            // show loader
            (showlodaer === true ? <div className="loader_div"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> </div> :
              <div id='OTP_form'>
                <div id="OTP" >
                  <h3>OTP has been sent to your email   </h3>
                  <h3 style={{ textDecorationLine: 'underline', color: 'green', fontWeight: '400' }}> {email} </h3>
                  {/* <input type="text" placeholder='xxxxxx' onChange={(e) => { setnew_otp(e.target.value) }} /> */}
                  <div className="otp_box">
                    <input type="text" id='ist' maxLength="1" onKeyUp={(e) => { clickEvent(e.target.value, 'sec') }} />
                    <input type="text" id="sec" maxLength="1" onKeyUp={(e) => { clickEvent(e.target.value, 'third') }} />
                    <input type="text" id="third" maxLength="1" onKeyUp={(e) => { clickEvent(e.target.value, 'fourth') }} />
                    <input type="text" id="fourth" maxLength="1" onKeyUp={(e) => { clickEvent(e.target.value, 'fifth') }} />
                    <input type="text" id="fifth" maxLength="1" />
                  </div>

                </div>
                <div id="btn">
                  <h5 id='error_otp_msg' style={{ color: 'red' }}></h5>
                  <button onClick={addUser}>Confirm </button>
                </div>
              </div>
            ): <div id='success'>
              <img src={sucs} alt="" />
              <h3>Application submitted</h3>
              <h4 style={{ color: 'crimson' }}>we will contact you ASAP!!!</h4>
            </div>
        )

      }

    </div>
  )



  function submit_Btn(e) {
    e.preventDefault();
    console.log(Fname, Lname, email, contact, branch, GateYear);


    //  is value is empty  
    if (Fname.trim() === '' || Lname.trim() === '') {
      console.log("fill all values");
      document.getElementById('error_msg').style.opacity = 1;
      document.getElementById('error_msg').innerText = 'Enter name';
      document.getElementById('F_email').style = 'border:1px solid red';
      document.getElementById('F_email').style.boxShadow = '0 0 5px red';
      document.getElementById('L_email').style = 'border:1px solid red';
      document.getElementById('L_email').style.boxShadow = '0 0 5px red';
      return false
    }
    document.getElementById('F_email').style.border = 'solid 1px rgb(134, 134, 134)';
    document.getElementById('F_email').style.boxShadow = 'none';
    document.getElementById('L_email').style.border = 'solid 1px rgb(134, 134, 134)';
    document.getElementById('L_email').style.boxShadow = 'none';


    // // check contact
    var phoneno = /^\d{10}$/;
    if ((!(contact.match(phoneno))) || contact.trim() === '') {
      console.log("number corect");
      document.getElementById('error_msg').style.opacity = 1;
      document.getElementById('error_msg').innerText = 'Invalid contact number';
      document.getElementById('I_contact').style.border = '1px solid red';
      document.getElementById('I_contact').style.boxShadow = '0 0 5px red';

      return false
    }
    document.getElementById('I_contact').style.border = 'solid 1px rgb(134, 134, 134)';
    document.getElementById('I_contact').style.boxShadow = 'none';


    // check mail
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ((!(email.match(validRegex)) || email.trim() === '')) {
      console.log("email not match");
      document.getElementById('error_msg').style.opacity = 1;
      document.getElementById('error_msg').innerText = 'Invalid email Id';
      document.getElementById('I_email').style = 'border:1px solid red';
      document.getElementById('I_email').style.boxShadow = '0 0 5px red';
      return false
    }
    document.getElementById('I_email').style.border = 'solid 1px rgb(134, 134, 134)';
    document.getElementById('I_email').style.boxShadow = 'none';


    // otp generate
    var digits = '0123456789';
    let Gen_OTP = '';
    for (let i = 0; i < 5; i++) {
      Gen_OTP += digits[Math.floor(Math.random() * 10)];
    }

    setglob_otp(Gen_OTP)
    console.log(Gen_OTP);

    setshowlodaer(true)

    const data = { email, Gen_OTP }
    // const result = axios.post('http://localhost:8000/api/sndOTP', data, { withCredentials: true }).then((res) => {
      const result = axios.post('https://landingpage77-backend.onrender.com/api/sndOTP', data, { withCredentials: true }).then((res) => {
      console.log(res.data);
      res.data.success === true ? setshowForm(false) : setshowForm(true);
      setshowlodaer(false)
    })


  }



  //  otp input function 
  function clickEvent(first, last) {
    if (first.length) {
      document.getElementById(last).focus();
    }
  }


  /////////////////  check otp & add user 
  function addUser(e) {
    e.preventDefault();


    var a = document.getElementById('ist').value;
    var b = document.getElementById('sec').value;
    var c = document.getElementById('third').value;
    var d = document.getElementById('fourth').value;
    var e = document.getElementById('fifth').value;


    const newTop = a + b + c + d + e;
    if (a.trim() === '' || b.trim() === '' || c.trim() === '' || d.trim() === '' || e.trim() === '') {
      document.getElementById('error_otp_msg').innerText = "OTP not match"
      return false
    }


    if (glob_otp === newTop) {


      setshowlodaer(true)
      const data = { first_name: Fname, last_name: Lname, email, contact, branch, GateYear }
      // const result = axios.post('http://localhost:8000/api/newUser', data, { withCredentials: true })
        const result = axios.post('https://landingpage77-backend.onrender.com/api/newUser', data, { withCredentials: true })
        .then((res) => {
          console.log(res.data)
          setuser_added(res.data.success)
          setshowlodaer(false);

        })

    } else {

      document.getElementById('error_otp_msg').innerText = "OTP not match"
      return false
    }

  }


}
