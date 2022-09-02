import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import withdraw from '../images/withdraw.png'

const Fund = () => {
  const [amount, setamount] = useState('')
  const [purpose, setpurpose] = useState('')
  const [date, setdate] = useState('')
  const [time, settime] = useState('')
  // const [first, setfirst] = useState(second)
  const [dash, setdash] = useState({})

  useEffect (()=> {
    setdash(JSON.parse(localStorage.logins))
  }, [])
  let navigate = useNavigate();
  let welcome = `Welcome back, ${dash.firstname}😊`

  const submit = (e) => {
    if(dash.accountBal >= amount) {
      let newBal = Number(dash.accountBal) - Number(amount)
      let withdrawal = dash.firstname + " "+ dash.lastname
      let newwithdrawHistory = {purpose, withdrawal, amount, date, time}
      let allHistory = dash.allHistories.withdrawalHistories
      dash.allHistories.withdrawalHistories =[...allHistory, newwithdrawHistory]
      // let withdrawArr = dash.allHistories
      // dash.allHistories.withdrawalHistories = [{purpose, withdrawal, amount, date, time}]
      setdash((d)=>({...d, accountBal:newBal}))
      localStorage.setItem("logins", JSON.stringify({...dash, accountBal:newBal}));
      let applicants = JSON.parse(localStorage.applicants).map((each, i)=>dash.email === each.email ? {...each, accountBal:newBal} : each);
      localStorage.setItem("applicants", JSON.stringify(applicants));
      alert(`You have successfully withdraw $ ${Number(amount)} from your account for the purpose of ${purpose}`)
      navigate('/dashboard');
    }else {
      alert('Insufficient fund! Cannot proceed with this transaction')
      e.peventDefault();
    }
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
      <div className="col-md-10 bg-light dashContent2 py-3">
        <div className="container my-5 shadow rounded w-75">
          <div className="row">
             <div className="col-md-7 body p-0 profileImage">
               <img src={withdraw} alt="" />
            </div>
             <div className="col-md-5 border ">
            <p className='signinText text-center'>Withdraw </p>
            <hr />
            <form onSubmit = {submit}> 
               <input type="text" className='form-control p-2  mt-4' value={dash.firstname} required/>
              <input type="text" className='form-control p-2 mt-2' value={dash.lastname} required/>
              <input type="number" className='form-control p-2 mt-2'onChange={(e)=>setamount(e.target.value)} placeholder="Amount to Withdraw" required/>
              <input type="number" className='form-control p-2 mt-2'value={dash.acctno} required/>
              <input type="text" className='form-control p-2 mt-2' onChange={(e)=>setpurpose(e.target.value)} placeholder="Purpose of withdrawal" required/>
              <div className="row">
                <div className="col-md-6">
                <input type="date" className='form-control p-2 mt-2' onChange={(e)=>setdate(e.target.value)} placeholder="Purpose of withdrawal" required/>
                </div>
                <div className="col-md-6">
                <input type="time" className='form-control p-2 mt-2' onChange={(e)=>settime(e.target.value)} placeholder="Purpose of withdrawal" required/>
                </div>
              </div>
                <button className='btn text-white w-100 my-4'>Withdraw</button>
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