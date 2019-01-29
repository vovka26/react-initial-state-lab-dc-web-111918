import React, {Component} from 'react'

export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = 
        {
           secondsLeft: props.initialCount
        }
    }

    timer = () => {
        const newTime = this.state.secondsLeft - 1
        this.setState
        ({
            secondsLeft: newTime
        })
    }

    render (){
        return <div>{this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}</div>
    }

}
