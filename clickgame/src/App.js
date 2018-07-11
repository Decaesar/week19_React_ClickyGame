import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    imageClicked: [],
    score: 0,
    highScore: 0,
    rightWrong:"",
  };

  userClick = event => {
    const currentImage = event.target.alt;
    const imageAleardyClicked =
        this.state.imageClicked.indexOf(currentImage) > -1;

    if (imageAleardyClicked) {
        this.setState({
            friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
            }),
            imageClicked: [],
            score: 0,
            rightWrong:"Your Guessed Icorrectly!"

        });
        // alert("Ops. You click the same image twice!!. Try again")


    } else if (!imageAleardyClicked) {
        const newScore = this.state.score + 1
        this.setState({
            friends: this.state.friends.sort(function (a, b) {
                return 0.5 - Math.random();
            }),
            imageClicked: this.state.imageClicked.concat(currentImage),
            score: newScore,
            rightWrong:" Your Guessed Correctly!"
        })

        if (newScore >= this.state.highScore) {
            const topScore = this.state.score + 1;
            this.setState({
                highScore: topScore
            })

            if (newScore === 12) {
            
                // alert("you win");
                this.setState({
                    friends: this.state.friends.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    score: 0,
                    highScore: 0,
                    rightWrong:"You win your memory is great!!"
                });

            }
        }
    }

};
//-----------------------------------------

render() {
    return (

        <div >
        <Navbar score = {
            this.state.score
        }
        highScore = {
            this.state.highScore
        }
        rightWrong= {
            this.state.rightWrong
        }
       
        /> 
        <Jumbotron />

        <container > {
            this.state.friends.map(friend => (

                <FriendCard userClick = {
                    this.userClick
                }
                id = {
                    friend.id
                }
                key = {
                    friend.id
                }
                name = {
                    friend.name
                }
                image = {
                    friend.image
                }

                />

            ))
        }

        </container>


        <Footer />
        </div>
    );
}
}

export default App;
