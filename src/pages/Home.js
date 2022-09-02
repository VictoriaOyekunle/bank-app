import React from 'react'
import brandImage from '../images/bg.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="contianer">
        <div className="row">
          <div className="col-md-6 mt-5 text-center">
            <h1 className='pt-3 brandText'>Mobile  Banking:</h1>
            <h2 className='brandText2'>Straight-Forward Way of Finance</h2>
            <p className='pt-5 brandText3'>Meet Capital, a wonderful and staright-forward way of banking. <br /> 
              Always track your expenses, insight and everything necessary. <br/>
              We are the best option for you! <br/>
              All in one @ small charges.
            </p>
           <Link to ="/signup"> <button className='btn btn-lg text-light mt-3 startButton'>Get Started with Us</button></Link>
          </div>
          <div className="col-md-6 p-0 imgDisplay">
            <img src={brandImage} alt=""className='shadow-lg' />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home