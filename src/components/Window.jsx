import React, { useState } from 'react'
import  './styleSheet/Window.css'
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../redux/actions';

const Window = () => {
  
  const list = useSelector((state)=>state.chatBotReducer.list)
  
  console.log('list', list)
  
  const dispatch = useDispatch()

  const[msg, setMsg] = useState('')
  const[showMsg, setShowMsg] = useState('')
  const[count,setCount] = useState(0)
  
  const sendMsg = () => {
    if(msg !== ''){
      const data = {
        id: count ,
        msg: msg
      }
      
      dispatch(addChat(data))
      
      setShowMsg(msg)
    }

    setMsg('')
    
  }
  return (
    <div className='window'>
        <div className='showMsg'>
           {
            list.filter((f)=> {
              if(f.id === count){
                return f
              }
               })
            .map((currValue)=>{
               return(
                 <div key={currValue.id}>
                   <div className='msgFrmUser'>
                   <p id='userMsg'>{ currValue.msg} </p>
                   </div>
                  

                   <div className='chatBotMsg' >
                   <p id='botMsg' >{ currValue.msg} </p>
                   </div>
                 </div>
               )
             })

             
           }

         


           
        </div>
        
        <div className='inputMsg'>
            <input type="text" value={msg} onChange={(e)=>setMsg(e.target.value)} />
            <Button onClick={sendMsg}>
            <SendIcon/>

            </Button>
            
        </div>

    </div>
  )
}

export default Window