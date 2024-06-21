import React from 'react'

export default function Shorts(props) {
  return (
    <button style={{height:"60px",width:"130px",fontSize:"20px",backgroundColor:"#414244",border:"none",borderTopLeftRadius:"35%",borderBottomLeftRadius:"35%",borderTopRightRadius:"35%",borderBottomRightRadius:"35%"}} onClick={props.clickbtn} value={props.button}>
        {props.button}
    </button>
  )
}
