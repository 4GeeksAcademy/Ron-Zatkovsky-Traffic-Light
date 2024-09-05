import React from "react";
import { useState } from "react"
import TrafficLight from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color,setColor]=useState("red")
	const [colors,setColors]=useState(["yellow","green","red"]);
	const [purple,setPurple]=useState(false);
	const [flag,setFlag]=useState(false);

	const changeColor=()=>{
		console.log(colors);
		let current=colors.shift();
		setColor(current);
		colors.push(current);
		setColors(colors);
	};

	const addPurple=()=>{
		for(let i=0;i<colors.length;i++){
			if(colors[i]==="green"){
				let first=colors.slice(0,i+1)
				first.push("purple");
				let second=colors.slice(i+1,colors.length);
				 setColors([...first,...second])
				 console.log(colors);
			}
		}
	};

	//setInterval(changeColor,4000)

	return (
		<div className="container mx-auto justify-content-center">
			<div className="col-1 bg-dark mx-auto">
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</div>
			<div className="col-4 p-2 py-5 bg-dark mx-auto">
				<TrafficLight setColor={setColor} color={color} purple={purple}/>
			</div>
			<button className="" onClick={changeColor}>Change Light</button>
			<button className="" onClick={()=>{setPurple(!purple);setFlag(true);!flag?addPurple():null;}}>Add purple</button>
		</div>
	);
};

export default Home;
