import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
	<header className = "header">
        <h1> {props.printResult} </h1>
		<h1> ICE COFFEE TIME </h1>
		<h2> Click on each image once </h2>
	</header>

);
export default Jumbotron;