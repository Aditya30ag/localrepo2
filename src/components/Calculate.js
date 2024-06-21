import React,{useState} from "react";
import Textarea from "./Textarea";
import Button from "./Button";
import Button2 from "./Button2";
import Shorts from "./Shorts";
import Button3 from "./Button3";


export default function Calculate() {
  const [text,settext]=useState("");
  const clickbtn=(e)=>{
    settext(text+e.target.value)
  }
  const clearBtn=()=>{
    settext("")
  }
  const finalbtn=()=>{
    try {
      settext(eval(text));
    } catch (error) {
      settext("error")
    }
  }
  return (
    <div className="container">
      <div className="main">
        <div className="container2">
          <Textarea text={text}/>
        </div>
        <div className="buttonarea">
          <Button3 button={"AC"} clickbtn={clearBtn} text={text}/>
          <Button3 button={"+/-"} clickbtn={clickbtn} text={text}/>
          <Button3 button={"%"} clickbtn={clickbtn} text={text}/>
          <Button3 button={"/"} clickbtn={clickbtn} text={text}/>
          <Button  button={7} clickbtn={clickbtn}/>
          <Button  button={8} clickbtn={clickbtn}/>
          <Button  button={9} clickbtn={clickbtn}/>
          <Button2 button={"*"} clickbtn={clickbtn} />
          <Button  button={4} clickbtn={clickbtn} />
          <Button  button={5} clickbtn={clickbtn} />
          <Button  button={6} clickbtn={clickbtn}/>
          <Button2 button={"-"} clickbtn={clickbtn}/>
          <Button  button={3} clickbtn={clickbtn}/>
          <Button  button={2} clickbtn={clickbtn}/>
          <Button  button={1} clickbtn={clickbtn}/>
          <Button2 button={"+"} clickbtn={clickbtn}/>
        </div>
        <div className="buttonarea2">
          <Shorts button={0} clickbtn={clickbtn}/>
          <Button  button={"."} clickbtn={clickbtn}/>
          <Button2 button={"="} clickbtn={finalbtn}/>
        </div>
      </div>
    </div>
  );
}
