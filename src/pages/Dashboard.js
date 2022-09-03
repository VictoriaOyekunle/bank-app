import { Link } from 'react-router-dom'

const Dashboard = () => {
  let dash = JSON.parse(localStorage.logins)
  let welcome =  dash.firstname

  let accountNo = dash.acctno
  let cardNo = dash.cardno
  let cardName = `${dash.lastname} ${dash.firstname}`

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
      <div className="col-md-11 bg-light dashContent2">
        <div className="container ">
          <div className="row">
          <div className="col-md-3 mt-4 pt-2 shadow noMargin">
              <h6>Main Account</h6>
              <h2 className='text-center brandText2'>Your Balance is</h2>
              <p className='text-center h5'>$ {dash.accountBal} USD</p>
            </div>
          </div>
          <div className="row my-5">
          <div className="col-md-3 atmCard dashColor mt-3 text-light pt-2">
              <h3>VISA</h3>
              <h5 className='mx-5'>Onlyn Banking</h5>
              <h4 className='text-center'>{cardName}</h4>
              <h6 className='cardNo'>{cardNo}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 shadow my-4 bg-light pt-2">
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