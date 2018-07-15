import React, {
    Component
} from "react";
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
        printResult: "",
    };

    userClick = event => {
        event.preventDefault();

        const currentImage = event.target.alt;
        console.log(event.target.alt);
        const imageAleardyClicked =
            this.state.imageClicked.indexOf(currentImage) > -1;

        console.log("image clicked" + imageAleardyClicked);

        const topScore = this.state.highScore;

        if (imageAleardyClicked) {
        alert("Image Already Clicked");
            this.setState({
                friends: this.state.friends.sort(function (a, b) {
                    return 0.5 - Math.random();
                }),
                friends,
                imageClicked: [],
                score: 0,
                highScore: topScore,
                printResult: "OOOhhhh Your Guess was Wrong!"

            });

            console.log("TS"  + topScore);
            console.log(this.state.highScore);

            // console.log(highScore);

        } else if (!imageAleardyClicked) {

            const newScore = this.state.score + 1
    
            if (newScore === 1) {
                this.setState({
                    // friends,
                    score: newScore,
                    // highScore: topScore,
                    printResult: `Need more Coffee. Grab it quickly`,
                }); 
            }
            // if (this.state.score > 1) {
            //     console.log("HS" + + this.state.highScore);
                if (newScore >= this.state.highScore) {
                    this.setState({
                        friends: this.state.friends.sort(function (a, b) {
                            return 0.5 - Math.random();
                        }),
                        friends,
                        imageClicked: this.state.imageClicked.concat(currentImage),
                        highScore: newScore,
                        score: newScore,
                        printResult: `I need more ice coffee `
                    })
                }
            
            if (newScore === 8) {

                // alert("you win");
                this.setState({
                    friends: this.state.friends.sort(function (a, b) {
                        return 0.5 - Math.random();
                    }),
                    score: 0,
                    highScore: 0,
                    printResult: "You are tired. It is nap time "
                });
                alert("this is really hard");
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

            printResult = {
                this.state.printResult
            }

            />  
            <Jumbotron printResult = {
                this.state.printResult
            }
            />

            <container > {
                this.state.friends.map(friend => (

                    <
                    FriendCard userClick = {
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