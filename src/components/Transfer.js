import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import transfer from '../images/transf.png'

const Fund = () => {
     const [transAmt, settransAmt] = useState('')
     const [name, setname] = useState('')
     const [acctnum, setacctnum] = useState('')
     const [purpose, setpurpose] = useState('')
     const [time, settime] = useState('')
     const [date, setdate] = useState('')
     const [dash, setdash] = useState([])


     const applicantArr = JSON.parse(localStorage.applicants)
     let welcome = `Welcome back, ${dash.firstname}😊`
     let navigate = useNavigate()


    useEffect (()=> {
      setdash(JSON.parse(localStorage.logins))
    }, [])

    const submit = (e)=> {
      let val = applicantArr.find(val=>val.firstname == name && val.acctno == acctnum)
      if (val) {
        if(dash.accountBal >= transAmt) {
          let newBal = Number(dash.accountBal) - Number(transAmt)
          let accountName = val.firstname + " "+ val.lastname
          let newtransferHistory = {accountName, purpose, acctnum, transAmt, date, time}
          let allHistory = dash.allHistories.transferHistories
          dash.allHistories.transferHistories =[...allHistory, newtransferHistory]
          setdash((d)=>({...d, accountBal:newBal}))
          localStorage.setItem("logins", JSON.stringify({...dash, accountBal:newBal}));
          let applicants = JSON.parse(localStorage.applicants).map((each, i)=>dash.email === each.email ? {...each, accountBal:newBal} : each);
          localStorage.setItem("applicants", JSON.stringify(applicants));
          alert(`You have successfully transfer $ ${Number(transAmt)} from your account to ${name}`)
          navigate('/dashboard');
        }else {
          alert('Insufficient fund, cannot proceed with this transaction');
          e.preventDefault();
        }
      }else {
        alert('The beneficiary details does not exist')
        e.preventDefault()
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
          <Link to = '/dashboard' className='text-decoration-none text-light'><li className='pt-5 dashLi'>Dashboard</li></Link>
          <Link to ='/dashboard/profile' className= 'text-decoration-none text-light'><li className='pt-4'>Profile</li></Link>
          <Link to = '/dashboard/transaction' className= 'text-decoration-none text-light'><li className='pt-4'>Transaction</li></Link>
          <Link to = '/dashboard/transfer' className= 'text-decoration-none text-light'><li className='pt-4'>Transfer</li></Link>
          <Link to = '/dashboard/fund' className= 'text-decoration-none text-light'><li className='pt-4'>Fund Account</li></Link>
          <Link to = '/dashboard/withdraw' className= 'text-decoration-none text-light'><li className='pt-4'>Withdraw</li></Link>
          <Link to = '/dashboard/settings' className= 'text-decoration-none text-light'><li className='pt-4'>Settings</li></Link>
          <Link to = '/dashboard/signout' className= 'text-decoration-none text-light'><li className='pt-5 my-5 py-3'>Sign out</li></Link>
        </ul>
      </div>
      <div className="col-md-10 bg-light dashContent2 py-3 ">
        <div className="container my-5 shadow rounded w-75">
          <div className="row">
             <div className="col-md-7 body p-0 profileImage">
               <img src={transfer} alt="" />
            </div>
             <div className="col-md-5 border ">
            <p className='signinText text-center'>Fund Transfer</p>
            <hr />
            <form onSubmit={submit}> 
               <input type="text" className='form-control mt-4' value={dash.firstname} required/>
              <input type="text" className='form-control  mt-2' value={dash.lastname} required/>
              <input type="number" className='form-control mt-2' placeholder="Amount to Transfer"
              onChange={(e)=>settransAmt(e.target.value)} required/>
              <input type="number" className='form-control mt-2'value={dash.acctno} required/>
              <input type="text" className='form-control mt-2' placeholder='Purpose'
              onChange={(e)=>setpurpose(e.target.value)} required/>
               <div className="row">
              <div className="col-md-6">
              <input type="text" className='form-control mt-2' placeholder='Name of beneficiary'
              onChange={(e)=>setname(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                <input type="number" className='form-control mt-2'placeholder='Beneficiary Account Number'
              onChange={(e)=>setacctnum(e.target.value)} title='Beneficiary Account Number' required/>
                </div>
                </div>
              <div className="row">
              <div className="col-md-6">
                <input type="time" className='form-control mt-2' placeholder="Purpose of withdrawal"
                onChange={(e)=>settime(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                <input type="date" className='form-control mt-2' placeholder="Purpose of withdrawal"
                onChange={(e)=>setdate(e.target.value)} required/>
                </div>
                </div>
            
                <button className='btn text-white w-100 my-3'>Transfer</button>
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