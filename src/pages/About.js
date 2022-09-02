import React from 'react'
import card1 from '../images/coin.webp'
import transfer from '../images/transfer.jpg'
import card2 from '../images/trans.webp'
const About = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-light text-center">
          <h1 className='signinText my-4'>Our Key Features</h1>
          <p className='brandText3 mt-4 text-secondary'>It's pretty similar to other out financial app you found out there. <br/>
            However, we have multiple type of transaction with the <br/> newest
             technology, and also secured.
          </p>
          <div className="container mt-5 shadow rounded p-0">
            <div className="row justify-content-around">
              <div className="card col-md-3 shadow m-4 p-0">
                  <img src={card1} alt="" className='rounded'/>
                <div className="card-body ">
                  <h5 className='textColor '>Multiple Method</h5>
                  <p className='brandText3'>Tons of ways to handle you transaction process, 
                  and by it's pretty insane right.</p>
                </div>
              </div>
              <div className="card col-md-3 shadow m-4 p-0">
              <img src={card2} alt="" className='rounded'/>
                <div className="card-body">
                  <h5 className=''>Multiple Method</h5>
                  <p className='brandText3'>Tons of ways to handle you transaction process, 
                  and by it's pretty insane right.</p>
                </div>
              </div>
              <div className="card col-md-3 shadow m-4 p-0">
              <img src={transfer} alt="" className='rounded'/>
                <div className="card-body">
                  <h5 className='textColor'>Multiple Method</h5>
                  <p className='brandText3'>Tons of ways to handle you transaction process, 
                  and by it's pretty insane right.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About