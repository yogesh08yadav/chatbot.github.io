import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='header' style={{display:'flex',alignItems:'center',justifyContent:'center',height:'4rem', backgroundColor:'#FFFFFF'}}>
            <img style={{width:'4rem',height:'4rem'}} src="https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg" alt="" />
            <h1 style={{padding:'15px',color:'gray'}}>ChatBot</h1>
        </div> 
    </div>
  )
}

export default Header