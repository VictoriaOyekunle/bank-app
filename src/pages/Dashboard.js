import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  let dash = JSON.parse(localStorage.logins)
  let welcome = `Welcome back, ${dash.firstname}😊`

  let accountNo = dash.acctno
  let cardNo = dash.cardno
  let bvnNo = dash.bvn
  let cardName = `${dash.lastname} ${dash.firstname}`

  return (
    <>
    <div className="container-fluid">
   <div className="container-fluid p-0 dashContent">
   <div className="row">
    <div className="col-md-2 dashContent text-white pt-3">
      <h6 className='px-3 welcome'>{welcome}</h6>
        <ul className='dashList'>
          <Link to = '/dashboard' className='text-decoration-none text-light dashLi'><li className='pt-5'>Dashboard</li></Link>
          <Link to ='/dashboard/profile' className= 'text-decoration-none text-light'><li className='pt-4'>Profile</li></Link>
          <Link to = '/dashboard/transaction' className= 'text-decoration-none text-light'><li className='pt-4'>Transaction</li></Link>
          <Link to = '/dashboard/transfer' className= 'text-decoration-none text-light'><li className='pt-4'>Transfer</li></Link>
          <Link to = '/dashboard/fund' className= 'text-decoration-none text-light'><li className='pt-4'>Fund Account</li></Link>
          <Link to = '/dashboard/withdraw' className= 'text-decoration-none text-light'><li className='pt-4'>Withdraw</li></Link>
          <Link to = '/dashboard/settings' className= 'text-decoration-none text-light'><li className='pt-4'>Settings</li></Link>
          <Link to = '/dashboard/signout' className= 'text-decoration-none text-light'><li className='pt-5 my-5 py-3'>Sign out</li></Link>
        </ul>
      </div>
      <div className="col-md-10 bg-light dashContent2">
        <div className="container">
          <div className="row">
          <div className="col-md-3 mt-3 pt-2 mx-4 shadow">
              <h6>Main Account</h6>
              <h2 className='text-center brandText2'>Your Balance is</h2>
              <p className='text-center h5'>$ {dash.accountBal} USD</p>
            </div>
          </div>
          <div className="row my-5">
          <div className="col-md-3 atmCard dashColor mt-3 text-light pt-2 mx-4">
              <h3>VISA</h3>
              <h5 className='mx-5'>Onlyn Banking</h5>
              <h4 className='text-center'>{cardName}</h4>
              <h6 className='cardNo'>{cardNo}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 shadow mx-4 my-4 bg-light pt-2">
              <h6>Account Number</h6>
              <h3 className='text-center brandText2 pt-3'>Your Number is </h3>
              <h2 className='text-center'>{accountNo}</h2>
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

export default Dashboard