import React from 'react'

export default function Button(props) {
  return (
    <button style={{height:"60px",width:"60px",backgroundColor:"#414244",margin:"5px 5px",border:"none",borderRadius:"50%",fontSize:"20px",color:"#CECBCA"}} onClick={props.clickbtn} value={props.button}>
        {props.button}
    </button>
  )
}
