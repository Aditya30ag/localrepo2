import React from 'react'

export default function Button(props) {
  return (
    <button style={{height:"60px",width:"60px",backgroundColor:"#E35E17",margin:"5px 5px",fontSize:"28px",border:"none",borderRadius:"50%",textAlign:"center"}} onClick={props.clickbtn} value={props.button}>
        {props.button}
    </button>
  )
}
