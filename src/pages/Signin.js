import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import signImage from '../images/istockphoto-700287204-612x612.jpg'
import loginIcon from '../images/loginIcon (2).png'


const Signin = () => {
  const navigate = useNavigate()
  const [mail, setmail] = useState("")
  const [pass, setpass] = useState("")
  const [err, seterr] = useState("")
  const applicantArr = JSON.parse(localStorage.applicants)

  const login = (e) => {
    let val = applicantArr.find(val=>val.email == mail && val.password == pass)
    if (val) {
      alert(`Login Successful`)
      navigate('/dashboard')
      localStorage.logins = JSON.stringify(val)
    } else {
      // let showedit = {
      //   display:'block'
      // }
      // let hideit = {
      //   display:'none'
      // }
        e.preventDefault();
        alert('Wrong details')
      // seterr(err.className = "d-block");
    }
  }
  return (
    <>
    <div className="container-fluid">
      <div className="container mt-4 border p-0 shadow rounded">
        <div className="row">
          <div className="col-md-8">
            <img src={signImage} alt="" className='w-100 rounded'/>
          </div>
          <div className="col-md-4 ">
           <p className='mt-3 text-center signinText'>Sign in</p>
           <hr />
           <center>
            <img src={loginIcon} alt="" className='w-25 mt-4' />
            </center>
           <form action="" className='mt-4'>
           <div className="alert alert-danger d-none" role="alert">
              <p>Please sign in properly or register if you have not!</p>
            </div>
            <input type="text" placeholder='E-mail' className='form-control p-2'onChange={(e)=>setmail(e.target.value)} value = {mail} required/>
            <input type="password" placeholder='Password' className='form-control p-2 mt-2' onChange={(e)=>setpass(e.target.value)} value= {pass} required />
            <button className='btn text-white w-100 mt-4 mb-4' onClick={login}>Log in </button>
          <center>
          <Link  to = "/signup" className='text-decoration-none text-dark'><small className='pt-3'><i>Don't have an account? </i>
          <br /> <span className='bg-dark text-white p-1 rounded'>Sign up</span></small></Link>
          </center>
           </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signin