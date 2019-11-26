import React from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name : '',
            status: false
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name : nextProps.task.name,
                status: nextProps.task.status
            });
        } else if (nextProps && nextProps.task === null) {
            this.onClear();
        }
    }
    
    UNSAFE_componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name : this.props.task.name,
                status: this.props.task.status
            });
        } else {
            this.onClear();
        }
    }

    displayAdd() {
        // this.props.receviceIsDisplay(false);
        this.props.closeForm();
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.name === '') return;
        this.props.addTask(this.state);
        this.props.closeForm();
    }

    onClear = () => {
        this.setState({
            id: '',
            name : '',
            status: false
        })
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.name === "status" ? event.target.value === "true" ? true : false : event.target.value
        })
        
    }

	render() {
		return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { this.state.id !== '' ? 'Update Task' : 'Create Task'}
                        <span className="fa fa-times-circle pull-right pointer" onClick={this.displayAdd.bind(this)}></span></h3>
                    
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label>Task name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            onChange={this.onChange.bind(this)}
                            value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            
                            <select
                            onChange={this.onChange.bind(this)}
                            name="status" 
                            className="form-control"
                            required="required"
                            value={this.state.status}>
                                <option value={true}>Active</option>
                                <option value={false}>Inactive</option>
                            </select>
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
                
		);
	}
}

const mapStateToProps = (state) => {
    return {
        task : state.editTask
    }
}

//action
const mapDispatchToProps = (dispatch, props) => {
    return {
        addTask: (task) => {
            dispatch(action.addTask(task));
        },
        closeForm: () => {
            dispatch(action.closeForm());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Add);
