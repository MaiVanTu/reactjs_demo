import React from 'react';

class Size extends React.Component {

    editSize(size) {
        if (this.props.size + size >= 8 && this.props.size + size <= 36) {
            this.props.onRecevice(
                this.props.size + size
            )
        }
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.size}</h3>
                </div>
                <div className="panel-body">
                    
                    <button type="button" className="btn btn-large btn-block btn-success" onClick={this.editSize.bind(this, 2)}>
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"> </span>
                        <span> </span>
                        Increase 
                    </button>
                    <button type="button" className="btn btn-large btn-block btn-success" onClick={this.editSize.bind(this, -2)}>
                    <span className="glyphicon glyphicon-minus" aria-hidden="true"> </span>
                        <span> </span>
                        Decrease</button>
                    
                </div>
            </div>
        )
    }

}

export default Size;