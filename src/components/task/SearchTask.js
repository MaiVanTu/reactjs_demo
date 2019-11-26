import React from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class SearchTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword:'',
            sort: {
                by: '',
                value:1
            }
        }
    }
    

    genarateTasks() {
        this.props.generator();
    }

    displayAdd() {
        this.props.onClearTask({
            id: '',
            name : '',
            status: false
        });
        if (!this.props.editTask.id) {
            this.props.toggleForm();
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        })
    }

    onSearch = () => {
        this.props.search(this.state.keyword);
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.search(this.state.keyword);
        }
    }

    onSort(by, value) {
        this.props.sort({by, value});
        this.setState({
            sort: {
                by:by,
                value:value
            }
        })
    }

	render() {
        var { sort } = this.state;
		return (
				
                <div>
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" className="btn btn-primary" onClick={this.displayAdd.bind(this)}>Create Task</button>&nbsp;&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.genarateTasks.bind(this)}>Generate Task</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="keyword" 
                                className="form-control" 
                                placeholder="Search" 
                                id="txtSearch" 
                                onChange={this.onChange}
                                onKeyDown={this.handleKeyDown}/>
                            <div className="input-group-btn">
                            <button className="btn btn-primary" onClick={this.onSearch}>
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                            </div>
                        </div>
                            
                        </div>
                        
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort&nbsp;
                                <span className="fa fa-caret-square-o-down"></span></button>
                                <ul className="dropdown-menu">
                                    <li onClick={this.onSort.bind(this, "name", 1)}>
                                        <button className={sort.by === 'name' && sort.value === 1 ? "fa fa-sort-alpha-asc pointer button-link sort-selected" : "fa fa-sort-alpha-asc pointer button-link"}>&nbsp;&nbsp;A -> Z</button>
                                    </li>
                                    <li onClick={this.onSort.bind(this, "name", -1)}>
                                        <button className={sort.by === "name" && sort.value === -1 ? "fa fa-sort-alpha-asc pointer button-link sort-selected" : "fa fa-sort-alpha-asc pointer button-link"}>&nbsp;&nbsp;Z -> A</button>
                                    </li>
                                    <hr/>
                                    <li onClick={this.onSort.bind(this, "status", 1)}>
                                        <button className={sort.by === "status" && sort.value === 1 ? "pointer button-link sort-selected" : "pointer button-link"}>Active</button>
                                    </li>
                                    <li onClick={this.onSort.bind(this, "status", -1)}>
                                        <button className={sort.by === "status" && sort.value === -1 ? "pointer button-link sort-selected" : "pointer button-link"}>Inactive</button>
                                    </li>
                                </ul>
                            </div>
                        
                        </div>
                    
                    </div>
                </div>
                
		);
	}
}

const mapStateToProps = state => {
    return {
        editTask: state.editTask,
        sort:state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleForm: () => {
            dispatch(action.toggleForm());
        },
        onClearTask: (task) => {
            dispatch(action.onEdit(task))
        },
        generator: () => {
            dispatch(action.generator())
        },
        search: (keyword) => {
            dispatch(action.search(keyword))
        },
        sort: (sort) => {
            dispatch(action.sort(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchTask);
