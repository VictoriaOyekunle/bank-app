import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import fund from '../images/fund (2).png'

const Fund = () => {
  const [dash, setdash] = useState({});
  const [amount, setamount] = useState("")
  const [date, setdate] = useState('')
  const [time, settime] = useState('')
  // const [dashAllHistory, setdashAllHistory] = useState([])
  // const [deposit, setdeposit] = useState(second)
  // const [histories, sethistories] = useState([])
  
  

  useEffect (()=> {
    setdash(JSON.parse(localStorage.logins))
  }, [])
//  useEffect(()=> {
//   setdashAllHistory(allHistory)
//  }, [])
  let navigate = useNavigate();
  let welcome = `Welcome back, ${dash.firstname}😊`
  
  const submit = (e) => {
    let newBal = Number(dash.accountBal) + Number(amount)
    let depositor = dash.firstname + " "+ dash.lastname
      let newdepositHistory = {depositor, amount, date, time}
      let allHistory = dash.allHistories.depositHistories
      let depositHistories =[...allHistory, newdepositHistory]
      // let depositHistories =[{depositor, amount, date, time}]
      let withdrawalHistories =[]
      let transferHistories = []
      let allHistories = {depositHistories, withdrawalHistories, transferHistories}
      setdash((d)=>({...d, accountBal:newBal, allHistories}))
      localStorage.setItem("logins", JSON.stringify({...dash, accountBal:newBal, allHistories}));
      let applicants = JSON.parse(localStorage.applicants).map((each, i)=>dash.email === each.email ? {...each, accountBal:newBal, allHistories} : each);
      localStorage.setItem("applicants", JSON.stringify(applicants));
      alert('Your account has been funded with $'+Number(amount))
      navigate('/dashboard')
      // console.log(depositHistories);
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
        <div className="container my-5 shadow rounded w-75 ">
          <div className="row">
             <div className="col-md-7 body profileImage">
               <img src={fund} alt="" />
            </div>
             <div className="col-md-5 border ">
            <p className='signinText text-center'>Fund Account</p>
            <hr />
            <form onSubmit={submit}> 
               <input type="text" className='form-control p-2  mt-4' value={dash.firstname} required/>
              <input type="text" className='form-control p-2 mt-2' value={dash.lastname} required/>
              <input type="number" className='form-control p-2 mt-2' placeholder="Amount to Deposit"
              onChange={(e)=>setamount(e.target.value)} value={amount}/>
              <input type="number" className='form-control p-2 mt-2'value={dash.acctno} required/>
                <input type="date" className='form-control p-2 mt-2' placeholder="Purpose of withdrawal"
                onChange={(e)=>setdate(e.target.value)} required/>
                <input type="time" className='form-control p-2 mt-2' placeholder="Purpose of withdrawal"
                onChange={(e)=>settime(e.target.value)} required/>
                <button className='btn text-white w-100 mt-4 mb-3'>Deposit</button>
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