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
  let welcome = dash.firstname

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
    <div className="col-md-1 dashContent text-white pt-3 smallScreen">
      <small className='px-3 welcome'>Welcome</small>
      <h5 className='mx-1'>{welcome}😊</h5>
      <Link to = '/dashboard' className='text-decoration-none text-light icon' title='Dashboard'><i className="fa fa-home text-white mt-5 mx-3"></i></Link> <br />
          <Link to ='/dashboard/profile' className= 'text-decoration-none text-light icon' title='Profile'><i className="fa fa-user text-light mt-4 mx-3"></i></Link> <br />
          <Link to = '/dashboard/transaction' className= 'text-decoration-none text-light icon' title='Transaction'><i className="fa fa-line-chart text-light mt-4 mx-3"></i></Link> <br />
          <Link to = '/dashboard/transfer' className= 'text-decoration-none text-light icon' title='Transfer'><i className="fa fa-paper-plane text-light mt-4 mx-3"></i></Link> <br />
          <Link to = '/dashboard/fund' className= 'text-decoration-none text-light icon' title='Fund Acount'><i className="fa fa-money text-light mt-4 mx-3"></i></Link> <br />
          <Link to = '/dashboard/withdraw' className= 'text-decoration-none text-light icon' title='Withdraw'><i className="fa fa-credit-card-alt text-light mt-4 mx-3"></i></Link><br />
          <Link to = '/dashboard' className= 'text-decoration-none text-light icon' title='Settings'><i className="fa fa-cog text-light mt-4 mx-3"></i></Link><br />
          <Link to = '/signin' className= 'text-decoration-none text-light icon' title='Sign out'><i className="fa fa-sign-out text-light mt-5 my-5 mx-3"></i></Link>
      </div>
      <div className="col-md-1 dashContent bigScreen">
      <small className='px-3 text-white'>Welcome</small>
      <h5 className='mx-3 textColor h2'>{welcome}😊</h5>
      <Link to = '/dashboard' className='text-decoration-none textColor icon' title='Dashboard'><i className="fa fa-home"></i></Link> 
          <Link to ='/dashboard/profile' className= 'text-decoration-none textColor icon' title='Profile'><i className="fa fa-user mt-4 mx-3"></i></Link> 
          <Link to = '/dashboard/transaction' className= 'text-decoration-none textColor icon' title='Transaction'><i className="fa fa-line-chart mt-4 mx-3"></i></Link> 
          <Link to = '/dashboard/transfer' className= 'text-decoration-none textColor icon' title='Transfer'><i className="fa fa-paper-plane mt-4 mx-3"></i></Link>
          <Link to = '/dashboard/fund' className= 'text-decoration-none textColor icon' title='Fund Acount'><i className="fa fa-money mt-4 mx-3"></i></Link> 
          <Link to = '/dashboard/withdraw' className= 'text-decoration-none textColor icon' title='Withdraw'><i className="fa fa-credit-card-alt mt-4 mx-3"></i></Link>
          <Link to = '/dashboard' className= 'text-decoration-none textColor icon' title='Settings'><i className="fa fa-cog  mt-4 mx-3"></i></Link>
          <Link to = '/signin' className= 'text-decoration-none textColor icon' title='Sign out'><i className="fa fa-sign-out"></i></Link>
      </div>
      <div className="col-md-11 bg-light dashContent2 py-3">
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