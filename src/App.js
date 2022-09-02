import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Dasboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './components/Profile';
import Transaction from './components/Transaction';
import Fund from './components/Fund';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';
import Withdraws from './components/Withdraws';
import Transfers from './components/Transfers';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


function App() {
  // const navigate = useNavigate()
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phonenumber, setphonenumber] = useState("")
  const [alluser, setalluser] = useState([])

  // console.log(JSON.parse(localStorage.applicants))

  // const first = (e) => {
  //   setfirstname(e.target.value)
  // }
  // const last= (e) => {
  //   setlastname(e.target.value)
  // }
  // const emails = (e) => {
  //   setemail(e.target.value)
  // }
  // const pass = (e) => {
  //   setpassword(e.target.value)
  // }
  // const phoneno = (e) => {
  //   setphonenumber(e.target.value)
  // }

  // useEffect (()=> {
  //   setalluser(JSON.parse(localStorage.applicants))
  // }, [])

  // const sign = (newUser) => {
  //   if (firstname != "" && lastname != "" && email != "" && password != "" && phonenumber != "") {
  //     let allNewUser = setalluser([...alluser, newUser])
  //     let acctno = `0264${Math.floor(Math.random()*1000000)}`
  //   //   let newUser = {firstname, lastname, email, password, phonenumber, acctno}
  //   // let userArr = [...alluser, newUser]
  //   alert(`You have successfully been registered. Your account number is ${acctno}`)
  //   // navigate('/signin')
  //   localStorage.applicants = JSON.stringify(allNewUser)
  //   }
  // }
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/home" element={<Navigate to="/"/>}/>
      <Route path= "/about" element={<About/>}/>
      <Route path= "/signin" element={<Signin/>}/>
      <Route path= "/signup" element={<Signup/>}/>
      {/* <Route path= "/signup" element={<Signup/>} first ={first} last={last} emails={emails} pass={pass} phoneno={phoneno}
      alluser= {alluser} firstname={firstname} lastname={lastname} email={email} phonenumber={phonenumber} password={password} useeffect ={useEffect}/> */}
      <Route path= "/contact" element={<Contact/>}/>
      <Route path = "/dashboard" element={<Dasboard/>} />
      <Route path = "/dashboard/profile" element={<Profile/>} />
      <Route path = "/dashboard/transaction" element = {<Transaction/>}/>
      <Route path = "/dashboard/transfer" element = {<Transfer/>}/>
      <Route path = "/dashboard/fund" element = {<Fund/>} />
      <Route path = "/dashboard/withdraw" element = {<Withdraw/>}/>
      <Route path = "/dashboard/transaction/withdraws" element = {<Withdraws/>}/>
      <Route path = "/dashboard/transaction/transfers" element = {<Transfers/>}/>
      <Route path= "/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
