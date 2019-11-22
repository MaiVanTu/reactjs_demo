import React from 'react';

class ColorPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors : ['red', 'green', 'blue', 'yellow']
        }
    }
    
    showColor(color) {
        return {
            backgroundColor: color
        };
    }

    sendColor(color) {
        this.props.onRecevice(color);
    }

    render() {
        var elementColor = this.state.colors.map((color, index) => {
            return <span 
                key={index} 
                className={this.props.color === color ? "color-picker active" : "color-picker" }
                style={this.showColor(color)}
                onClick={this.sendColor.bind(this,color)}
            ></span>
        })
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color picker</h3>
                </div>
                <div className="panel-body">
                    {elementColor}
                    <hr/>
                </div>
            </div>
        )
    }

}

export default ColorPicker;