import { userAltSlash } from 'fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Withdraws = () => {
    const [historyArr, sethistoryArr] = useState([])
  let dash = JSON.parse(localStorage.logins)
  let welcome = `Welcome back, ${dash.firstname}😊`
  useEffect(()=> {
    sethistoryArr(dash.allHistories.withdrawalHistories)
  }, [])
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
      <p className='signinText text-center'>Transactions</p>
      <div className="container-fliud">
        <div className="row">
          <div className="col-md-4">
           <Link to='/dashboard/transaction'><button className='btn text-white bg-success'>Deposit Transaction</button></Link>
          </div>
          <div className="col-md-4">
            <Link to='/dashboard/transaction/withdraws'><button className='btn text-white bg-danger margins'>Withdraw Transaction</button></Link>
          </div>
          <div className="col-md-4">
            <Link to='/dashboard/transaction/transfers'><button className='btn text-white margins'>Transfer Transaction</button></Link>
          </div>
        </div>
        <p className='text-danger mt-4'>Withdraw Transactions</p>
        <table className='table table-striped border'>
         <thead>
         <tr className='border border-dark'>
            <th>S/N</th>
            <th>Name</th>
            <th>Purpose</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
         </thead>
         <tbody>
            {historyArr.map((each, i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{each.withdrawal}</td>
                    <td>{each.purpose}</td>
                    <td>{each.amount}</td>
                    <td>{each.time}</td>
                    <td>{each.date}</td>
                </tr>
            ))}
         </tbody>
        </table>
      </div>
      </div>
    </div>
   </div>
    </div>
   
    </>
  )
}

export default Withdraws