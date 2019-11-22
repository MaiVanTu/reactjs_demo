import React from 'react';

class Reset extends React.Component {
    reset() {
        this.props.reset();
    }

    render() {
        return (
            <div>
                
                <button type="button" className="btn btn-lg btn-danger" onClick={this.reset.bind(this)}>Reset</button>
                
            </div>
        )
    }

}

export default Reset;