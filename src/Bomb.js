// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // generateCountdown = () => {
    //     if (this.state.secondsLeft <= 0) {
    //         return 'Boom!'
    //     }else{
    //         (this.state.secondsLeft)
    //     }
    //}

    render() {
        //const SECONDS_LEFT = this.state.secondsLeft
        return(
            <div>
                {this.state.secondsLeft < 1 ?  "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}

export default Bomb;
