import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
	<header className = "header">
        <h1> {props.printResult} </h1>
		<h2> ICE COFFEE TIME </h2>
		{/* <h2> Click on each image once </h2> */}
	</header>

);
export default Jumbotron;