import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.png'
const Profile = () => {
  let dash = JSON.parse(localStorage.logins)
  // console.log(dash.acctno)
  let welcome = dash.firstname

  const [editfn, seteditfn] = useState("")
  const [editln, seteditln] = useState("")
  const [editem, seteditem] = useState("")
  const [editpw, seteditpw] = useState("")
  const [editpn, seteditpn] = useState("")
  const [editacct, seteditacct] = useState("")
  const [alledits, setalledits] = useState([])

  // const name = (e) => {
  //   seteditfn(dash.firstname)
  //   seteditfn(e.target.value);
  // }
  const submit = (e) => {
    let editted = {editfn, editln, editem, editpw, editpn, editacct}
    let editUser = [...alledits, editted]
    e.preventDefault()
    console.log(editUser);
  }
  // const editfirstname = () => {
  // seteditfn(dash.firstname)
  // }
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
             <div className="col-md-7 profileImage">
               <img src={profile} alt=""/>
            </div>
             <div className="col-md-5 border ">
            <p className='signinText text-center'>Edit Profile</p>
            <hr />
            <form onSubmit={submit}> 
               <input type="text" className='form-control p-2  mt-4' onChange={(e)=>seteditfn(e.target.value)} value={dash.firstname} />
              <input type="text" className='form-control p-2 mt-2'onChange={()=>seteditln(dash.lastname)} value={dash.lastname}  />
              <input type="email" className='form-control p-2 mt-2' value={dash.email} />
              <input type="text" className='form-control p-2 mt-2' value={dash.password} />
              <input type="number" className='form-control p-2 mt-2' value={dash.phonenumber} />
              <input type="number" className='form-control p-2 mt-2'value={dash.acctno}/>
            
                <button className='btn text-white w-100 mt-4 mb-4'>Update Profile</button>
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

export default Profile