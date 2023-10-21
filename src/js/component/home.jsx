import React from "react";
import Light from "./light" 
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div class="tall d-block bg-dark"></div>
			<Light />
			<Light />
			<Light />
		</div>
	);
};

export default Home;
