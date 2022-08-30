import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fund from '../images/fund (2).png'

const Fund = () => {
    let dash = JSON.parse(localStorage.logins)
    // console.log(dash.acctno)
    let welcome = `Welcome back, ${dash.firstname}😊
    `
    let totalBal;
    const [amount, setamount] = useState("")
    const submit = (e) => {
      totalBal = parseInt(dash.accountBal + amount);
      console.log(totalBal);
      alert('Your Wallet have been succesfully funded')
      // e.preventDefault();
    }
  return (
    <>
      <div className="container-fluid">
   <div className="container-fluid p-0 dashContent">
   <div className="row">
    <div className="col-md-2 dashContent text-white pt-3">
      <h6 className='px-3'>{welcome}</h6>
        <ul className='dashList'>
          <Link to = '/dashboard' className='text-decoration-none text-light'><li className='pt-5'>Dashboard</li></Link>
          <Link to ='/dashboard/profile' className= 'text-decoration-none text-light'><li className='pt-4'>Profile</li></Link>
          <Link to = '/dashboard/transaction' className= 'text-decoration-none text-light'><li className='pt-4'>Transaction</li></Link>
          <Link to = '/dashboard/transfer' className= 'text-decoration-none text-light'><li className='pt-4'>Transfer</li></Link>
          <Link to = '/dashboard/fund' className= 'text-decoration-none text-light'><li className='pt-4'>Fund Account</li></Link>
          <Link to = '/dashboard/withdraw' className= 'text-decoration-none text-light'><li className='pt-4'>Withdraw</li></Link>
          <Link to = '/dashboard/settings' className= 'text-decoration-none text-light'><li className='pt-4'>Settings</li></Link>
          <Link to = '/dashboard/signout' className= 'text-decoration-none text-light'><li className='pt-5 my-5 py-3'>Sign out</li></Link>
        </ul>
      </div>
      <div className="col-md-10 bg-light dashContent2 py-4">
        <div className="container my-5 shadow rounded w-75">
          <div className="row">
             <div className="col-md-7 body">
               <img src={fund} alt="" />
            </div>
             <div className="col-md-5 border ">
            <p className='signinText text-center'>Fund Account</p>
            <hr />
            <form onSubmit={submit}> 
               <input type="text" className='form-control p-2  mt-4' value={dash.firstname} required/>
              <input type="text" className='form-control p-2 mt-2' value={dash.lastname} required/>
              <input type="number" className='form-control p-2 mt-2' placeholder="Amount to Deposit"
              onChange={(e)=>setamount(e.target.value)} required/>
              <input type="number" className='form-control p-2 mt-2'value={dash.acctno} required/>
            
                <button className='btn text-white w-100 my-5'>Deposit</button>
            </form>
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

export default Fund