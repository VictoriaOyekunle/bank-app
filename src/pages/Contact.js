import React, { useState } from 'react'

const Contact = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  return (
    <>
    <div className="container">
      <div className="row">
        <center>
          <div className="col-md-4 border my-5 shadow">
          <p className='signinText text-center'>Contact Us</p>
          <small>We are available to solve your problems</small>
            <hr />
            <form>
              <input type="text" placeholder='First Name' className='form-control p-2 mt-4'onChange={(e)=>setfirstname(e.target.value)} required/>
              <input type="text" placeholder='Last Name' className='form-control p-2 mt-2'onChange={(e)=>setlastname(e.target.value)} required/>
              <input type="email" placeholder='E-mail' className='form-control p-2 mt-2'onChange={(e)=>setemail(e.target.value)} required/>
              <input type="password" placeholder='Password' className='form-control p-2 mt-2'onChange={(e)=>setpassword(e.target.value)} required/>
              <input type="number" placeholder='Phone Number' className='form-control p-2 mt-2'onChange={(e)=>setphonenumber(e.target.value)} required/>
              <small className='text-danger'>We will reply you within seconds!</small>
                <button className='btn text-white w-100 my-4 mb-4'>Submit</button>
                {/* </Link> */}
            </form>
          </div>
        </center>
      </div>
    </div>
    </>
  )
}

export default Contact