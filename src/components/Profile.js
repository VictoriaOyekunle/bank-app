import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.png'
const Profile = () => {
  let dash = JSON.parse(localStorage.logins)
  // console.log(dash.acctno)
  let welcome = `Welcome back, ${dash.firstname}😊`

  const [editfn, seteditfn] = useState("")
  const [editln, seteditln] = useState("")
  const [editem, seteditem] = useState("")
  const [editpw, seteditpw] = useState("")
  const [editpn, seteditpn] = useState("")
  const [editacct, seteditacct] = useState("")
  const [alledits, setalledits] = useState([])

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
             <div className="col-md-7">
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