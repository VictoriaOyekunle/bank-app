import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Transfers = () => {
    const [historyArr, sethistoryArr] = useState([])
  let dash = JSON.parse(localStorage.logins)
  let welcome = dash.firstname
  useEffect(()=> {
    sethistoryArr(dash.allHistories.transferHistories)
  }, [])
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
        <p className='textColor mt-4'>Withdraw Transactions</p>
        <table className='table table-striped border'>
         <thead>
         <tr className='border border-dark'>
            <th>S/N</th>
            <th>Account Name</th>
            <th>Account Number</th>
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
                    <td>{each.accountName}</td>
                    <td>{each.acctnum}</td>
                    <td>{each.purpose}</td>
                    <td>{each.transAmt}</td>
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

export default Transfers