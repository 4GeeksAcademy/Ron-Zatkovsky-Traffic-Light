import React from "react";
import TrafficLight from "./TrafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
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
				<TrafficLight/>
			</div>
		</div>
	);
};

export default Home;
