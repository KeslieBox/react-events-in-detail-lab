import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    handleClick = (e) => {
        const array = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}