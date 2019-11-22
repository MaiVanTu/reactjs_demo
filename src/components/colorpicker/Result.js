import React from 'react';

class Result extends React.Component {

    setColor() {
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.size
        }
    }

    render() {
        return (
            <div>
            <p>Color : {this.props.color} - Size : {this.props.size}</p>
                <div id="content" style={this.setColor()}>
                    Content demo: Tu dep trai
                </div>
            </div>
        )
    }

}

export default Result;