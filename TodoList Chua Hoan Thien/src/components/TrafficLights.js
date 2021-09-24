import React, {Component} from 'react'
import classNames from 'classnames';

import './TrafficLights.css';

const RED = 0
const YELLOW = 1
const GREEN = 2

class TrafficLights extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: YELLOW
        }

        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            }) 
        }, 1000)
    }

    getNextColor(color) {
        switch(color){
            case RED:
                return YELLOW
            case YELLOW:
                return GREEN
            case GREEN:
                return RED
            default:
                return RED
        }
    }

    render() {
        const {currentColor} = this.state

        return <div className="TrafficLights">

            <div className={classNames('buld', 'green', {
                active: currentColor === GREEN
            })} />
            <div className={classNames('buld', 'yellow', {
                active: currentColor === YELLOW
            })} />
            <div className={classNames('buld', 'red', {
                active: currentColor === RED
            })} />


        </div>;
    }
}

export default TrafficLights
