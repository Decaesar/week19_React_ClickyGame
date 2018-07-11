import React, { Component } from "react";
import "./Navbar.css";

const Navbar = props => (
      
  <nav class="navbar navbar-toggler navbar-light ">
  
  <ul>
  <li className="Left">Test your momery</li>
  <li className="Center"> {props.rightWrong}</li>
  <li className="Right">Score: {props.score}</li>
  <li className="Right">highScore: {props.highScore}</li>
</ul>
</nav>

    );
  
export default Navbar;