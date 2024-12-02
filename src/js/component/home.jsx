import React from "react";
import { SecondsCounter } from "./seconds";
import { TensOfSecondsCounter } from "./tensofseconds";
import { HundredsOfSecondsCounter } from "./hundredsofseconds";
import { ThousandsOfSecondsCounter } from "./thousandsofseconds";
import { TensOfThousandsOfSecondsCounter } from "./tensofthousandsofseconds";
import { HundredsOfThousandsOfSecondsCounter } from "./hundredsofthousandsofseconds";
import { Split } from "./split";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container d-flex justify-content-center ">
				<div className="row">
					<div className="counter-box d-flex"><i className="fa fa-clock"></i></div>
					<div className="counter-box"><HundredsOfThousandsOfSecondsCounter></HundredsOfThousandsOfSecondsCounter></div>
					<div className="counter-box"><TensOfThousandsOfSecondsCounter></TensOfThousandsOfSecondsCounter></div>
					<div className="counter-box"><ThousandsOfSecondsCounter></ThousandsOfSecondsCounter></div>
					<div className="counter-box"><HundredsOfSecondsCounter></HundredsOfSecondsCounter></div>
					<div className="counter-box"><TensOfSecondsCounter></TensOfSecondsCounter></div>
					<div className="counter-box"><SecondsCounter></SecondsCounter></div>
				</div>
			</div>
			
		</>
	);
};



export default Home;
