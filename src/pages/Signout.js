import { useState } from 'react'
import { Link } from 'react-router-dom'
import signImage from '../images/bye.png'
import loginIcon from '../images/loginIcon (2).png'

const Signout = () => {
    const [mail, setmail] = useState('')
    const [pass, setpass] = useState('')
    let dash = JSON.parse(localStorage.logins)

    const logout = () => {

    }
  return (
    <>
    <div className="container-fluid">
      <div className="container mt-4 border p-0 shadow rounded w-75gir">
        <div className="row">
          <div className="col-md-8">
            <img src={signImage} alt="" className='w-100 rounded'/>
          </div>
          <div className="col-md-4 ">
           <p className='mt-3 text-center signinText'>Sign out</p>
           <hr />
           <center>
            <img src={loginIcon} alt="" className='w-25 mt-4' />
            </center>
           <form action="" className='mt-4'>
           <div className="alert alert-danger d-none" role="alert">
              <p>Please sign in properly or register if you have not!</p>
            </div>
            <input type="text" placeholder='E-mail' className='form-control p-2'onChange={(e)=>setmail(e.target.value)} value = {dash.email} required/>
            <input type="password" placeholder='Password' className='form-control p-2 mt-2' onChange={(e)=>setpass(e.target.value)} value= {dash.password} required />
            {/* <button className='btn text-white w-100 mt-4 mb-4' onClick={logout}>Log in </button> */}
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

export default Signout