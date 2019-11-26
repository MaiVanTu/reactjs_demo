import React from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

class Result extends React.Component {

    changeStatus(id) {
        this.props.changeStatus(id);
    }

    onEdit(task) {
        this.props.onEdit(task);
        this.props.openForm();
    }

    onDelete(id) {
        this.props.onDelete(id);
        this.props.closeForm();
    }

	render() {
        var { keyword, tasks, sort } = this.props;
        if(keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            })
        }
        var {by, value} = sort;
        if (by === 'name') {
            tasks.sort((a,b) => {
                if (a.name > b.name) return -value;
                else if (a.name < b.name) return value;
                return 0;
            })
        } else {
            tasks.sort((a,b) => {
                if (a.status > b.status) return -value;
                else if (a.status < b.status) return value;
                return 0;
            })
        }
        var element = tasks.map((task, index) => {
            return <tr key={index}>
                        <td className="col-md-1 text-center">{index}</td>
                        <td className="col-md-5">{task.name}</td>
                        <td className="col-md-2 text-center">
                            <span onClick={this.changeStatus.bind(this, task.id)} className={task.status ? "label label-success pointer" : "label label-danger pointer"}>
                            {task.status ? "Active" : "Inactive"}</span>
                        </td>
                        <td className="text-center col-md-4">
                            
                            <button type="button" className="btn btn-sm btn-warning" onClick={this.onEdit.bind(this, task)}>
                                <span className="fa fa-edit"></span>
                                &nbsp;
                                Edit
                                </button>
                            &nbsp;&nbsp;
                            <button type="button" className="btn btn-sm btn-danger" onClick={this.onDelete.bind(this, task.id)}>
                                <span className="fa fa-window-close"></span>
                                &nbsp;
                                Delete
                                </button>
                            
                        </td>
                    </tr>
        });
		return (
            <div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr className="info">
                            <th className="text-center">No.</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>                
		);
	}
}

const mapStateReduxToProps = (state) => {
    return {
        tasks: state.tasks,
        keyword: state.search,
        sort:state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        changeStatus: (id) => {
            dispatch(action.changeStatus(id))
        },
        onDelete: (id) => {
            dispatch(action.onDelete(id))
        },
        onEdit: (task) => {
            dispatch(action.onEdit(task))
        },
        closeForm: () => {
            dispatch(action.closeForm());
        },
        openForm: () => {
            dispatch(action.openForm());
        },
    }
}
export default connect(mapStateReduxToProps, mapDispatchToProps)(Result);
