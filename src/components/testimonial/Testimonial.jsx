import React from 'react'
import './testimonial.scss'
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import p4 from './img/p4.jpg'

export default function Testimonial() {
  return (
    <div className='testimonial'>
      <h1>Our students </h1>

      <div className="container">

        <div className="wrapper">
          <ul>
            <li>
              <div id="img-div">
                <img src={p1} alt="" />
              </div>
              <h4>I have crack gate </h4>
              <h3>Riya Pandey</h3>
              <h5>GATE 2021</h5>
            </li>

            <li>
              <div id="img-div">
                <img src={p2} alt="" />
              </div>
              <h4>Best for exam cracking</h4>
              <h3>Omkar Sanap</h3>
              <h5>GATE 2022</h5>
            </li>

            <li>
              <div id="img-div">
                <img src={p4} alt="" />
              </div>
              <h4>Got in top 100</h4>
              <h3>Divya Rao</h3>
              <h5>GATE 2021</h5>
            </li>

       

          </ul>
        </div>
      </div>
    </div>
  )
}
