import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Menu from '../menu/Menu';
import Footer from '../Footer/Footer';
import Payment from '../payment/Payment';
import "../../App.css";
import "../../components/icons/feather.css";
import {UserContext} from "../Context";


const data = {
  title:"Spice Hut Indian Restaurant",
  address:"2036 2ND AVE, NEW YORK, NY 10029"
}

function Home() {
  return (
    <>
      <div className='main'>
        <UserContext.Provider value={data}>
         <Navbar />
         <Header />
         <Menu />
         <Payment />
         <Footer /> 
         </UserContext.Provider>
      </div>
    </>
  )
}

export default Home