import React from "react";
import { NavLink } from "react-router-dom";
import emojii from "../../Images/emojii.png";

function Home() {
  return (
    <div
      style={{
        minHeight: '90vh',
        margin: 0,
        padding: 0,
        fontFamily: 'Segoe UI, sans-serif',
        color: 'white',
        backgroundImage: `
          linear-gradient(to right, #0f2027, #203a43, #2c5364),
          url('https://images.unsplash.com/photo-1734359052721-be5fddda39db?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000')
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        display: 'flex',
        backgroundPosition: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
      className="px-4 sm:px-0"
    >
      <h1
        className="
          text-4xl      
          sm:text-6xl     
          font-bold
          ml-0            
          sm:ml-90        
          mb-5
          text-transparent
          bg-clip-text
          bg-gradient-to-r from-blue-600 to-white
          animate-pulse
        "
      >
        Welcome To PayETHUSD
      </h1>

      <p
        className="
          text-base     
          sm:text-lg       
          font-bold
          ml-0              
          sm:ml-90         
          max-w-full       
          sm:max-w-[700px]  
          leading-relaxed
        "
        style={{ marginTop: '10px', lineHeight: '1.6' }}
      >
        PayETHUSD is a powerful decentralized platform that transforms the way you
        send and receive payments by enabling seamless Ethereum (ETH) to USD
        transactions. Whether you're lending, borrowing, or managing funds,
        PayETHUSD ensures speed, transparency, and security, all powered by
        blockchain technology. With a clean user interface and smart contract
        automation, it's your gateway to the future of crypto finance.
      </p>

      <p
        className="
          mt-4
          text-xl        
          sm:text-2xl    
          font-bold
          animate-bounce
          ml-0           
          sm:ml-80       
          drop-shadow-lg
        "
      >
        🚀 Make Your Transaction
      </p>

      <NavLink
        to="/Send"
        className="
          mt-2
          ml-0               
          sm:ml-85           
          inline-block
          bg-gradient-to-r from-purple-500 to-blue-500
          hover:from-pink-500 hover:to-yellow-500
          text-white
          font-semibold
          py-2 px-4
          rounded-full
          shadow-lg
          transform hover:scale-105
          transition duration-300 ease-in-out
          animate-pulse
        "
      >
        Send Money
      </NavLink>

      <NavLink to="/Contact">
        <img
          src={emojii}
          alt="emoji"
          className="
            w-28              
            sm:w-90            
            absolute
            bottom-4           
            sm:bottom-30      
            left-2             
            sm:left-2          
            object-cover
            rounded-xl
            transition-transform duration-300
            hover:scale-110
          "
        />
      </NavLink>
    </div>
  );
}

export default Home;
