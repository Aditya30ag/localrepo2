import React from 'react'

export default function Button3(props) {
  return (
    <button style={{height:"60px",width:"60px",backgroundColor:"#B4B0B0",margin:"5px 5px",border:"none",borderRadius:"50%",fontSize:"20px",color:"black"}} onClick={props.clickbtn} value={props.button} disabled={props.text.length===0?true:false}>
        {props.button}
    </button>
  )
}
