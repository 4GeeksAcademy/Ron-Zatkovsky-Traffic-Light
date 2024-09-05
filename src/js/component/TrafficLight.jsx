import React from "react"
import { useState } from "react"

export default function TrafficLight(){
    const [color,setColor]=useState("red")

    return(
        <div className="row flex-column mx-auto px-5">
            <button onClick={()=>setColor("red")} id="red" className={`col my-2 bg-danger p-5 border rounded-circle ${color=="red" ? "glow":""}`} ><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>
            <button onClick={()=>setColor("yellow")} id="yellow" className={`col my-2 bg-warning p-5 border rounded-circle ${color=="yellow" ? "glow":""}`}><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>
            <button onClick={()=>setColor("green")} id="green" className={`col my-2 bg-success p-5 border rounded-circle ${color=="green" ? "glow":""}`}><br></br><br></br><br></br><br></br><br></br><br></br><br></br></button>
        </div>
    )
}