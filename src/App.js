import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
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
import Signout from './pages/Signout';



function App() {

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
      <Route path = "/dashboard/signout" element = {<Signout/>}/>
      <Route path = "/signout" element={<Navigate to="/dashboard/signout"/>}/>
      <Route path= "/*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
