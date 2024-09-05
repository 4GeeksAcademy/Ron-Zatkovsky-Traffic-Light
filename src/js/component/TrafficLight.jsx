import React from "react"

export default function TrafficLight(props){
    return(
        <div className="row flex-column mx-auto px-5">
            <button onClick={()=>props.setColor("red")} id="red" className={`col my-2 bg-danger p-5 border rounded-circle ${props.color=="red" ? "glow":""}`} ><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>
            <button onClick={()=>props.setColor("yellow")} id="yellow" className={`col my-2 bg-warning p-5 border rounded-circle ${props.color=="yellow" ? "glow":""}`}><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>
            <button onClick={()=>props.setColor("green")} id="green" className={`col my-2 bg-success p-5 border rounded-circle ${props.color=="green" ? "glow":""}`}><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>
            {props.purple? <button onClick={()=>props.setColor("purple")} id="purple" style={{backgroundColor:"purple"}} className={`col my-2 p-5 border rounded-circle ${props.color=="purple" ? "glow":""}`}><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>:null}
        </div>
    )
}