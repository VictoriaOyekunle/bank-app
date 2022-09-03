import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import signup from '../images/card.jpg'

  const Signup = () => {
  const navigate = useNavigate()
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phonenumber, setphonenumber] = useState("")
  const [alluser, setalluser] = useState([])

  let applicantArr = []
  if (localStorage.applicants != null){
    applicantArr = JSON.parse(localStorage.applicants)
  }else {
    applicantArr = []
  }
  useEffect (()=> {
    setalluser(applicantArr)
  }, [])
  
  const sign = (e) => {
    if (firstname !== "" && lastname !== "" && email !== "" && password !== "" && phonenumber !== "") { 
        let acctno = `0264${Math.floor(Math.random()*1000000)}`
        let cardno = `431${Math.floor(Math.random()*100000000)}`
        let bvn = `${Math.floor(Math.random()*100000000000000)}`
        let accountBal = 0;
        let depositHistories = []
        let withdrawalHistories =[]
        let transferHistories = []
        let allHistories = {depositHistories, withdrawalHistories, transferHistories}
        let newUser = {firstname, lastname, email, password, phonenumber, acctno, cardno, bvn, accountBal, allHistories}
        let userArr = [...alluser, newUser]
        alert(`You have successfully been registered. Your account number is ${acctno}`)
        navigate('/signin')
        localStorage.applicants = JSON.stringify(userArr)
    }
  }
  return (
    <>
    <hr />
    <div className="container-fluid mt-5">
      <div className="container border shadow p-0 rounded">
      <div className="row">
      <div className="col-md-8">
            <img src={signup} alt="" className='w-100 rounded' />
          </div>
          <div className="col-md-4">
            <p className='signinText text-center'>Sign up</p>
            <hr />
            <form onSubmit={sign}>
              <input type="text" placeholder='First Name' className='form-control p-2 mt-4'onChange={(e)=>setfirstname(e.target.value)} required/>
              <input type="text" placeholder='Last Name' className='form-control p-2 mt-2'onChange={(e)=>setlastname(e.target.value)} required/>
              <input type="email" placeholder='E-mail' className='form-control p-2 mt-2'onChange={(e)=>setemail(e.target.value)} required/>
              <input type="password" placeholder='Password' className='form-control p-2 mt-2'onChange={(e)=>setpassword(e.target.value)} required/>
              <input type="number" placeholder='Phone Number' className='form-control p-2 mt-2'onChange={(e)=>setphonenumber(e.target.value)} required/>
              <input type="checkbox" name="" id=""  required/> <small className='text-danger'>Agree with the terms and conditions</small>
              {/* <Link to="/signin"> */}
                <button className='btn text-white w-100 mt-4 mb-4'>Sign up </button>
                {/* </Link> */}
            </form>
            <center>
          <Link to = "/signin" className='text-decoration-none text-dark'> <small className='pt-2'><i>Don't have an account? </i>
          <br /> <span className='bg-dark text-white p-1 rounded'>Sign in</span></small></Link>
          </center>
          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Signup