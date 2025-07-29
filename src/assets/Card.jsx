import React from 'react'
import './scss/style.scss'
function Card() {
  return (
    <div className='d-flex flex-column card-container rounded-3'>
      <img src='images/batman.png'></img>
      <div className='title'>The Flash Vol v1</div>
      <div>Sameer Khatri</div>
    </div>
  )
}

export default Card
