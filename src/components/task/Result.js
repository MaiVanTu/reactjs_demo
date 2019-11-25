import React from 'react';

class Result extends React.Component {

    changeStatus(id) {
        this.props.changeStatus(id);
    }

    onEdit(id) {
        this.props.onEdit(id);
    }

    onDelete(id) {
        this.props.onDelete(id);
    }

	render() {
        var element = this.props.tasks.map((task, index) => {
            return <tr key={index}>
                        <td className="col-md-1 text-center">{index}</td>
                        <td className="col-md-5">{task.name}</td>
                        <td className="col-md-2 text-center">
                            <span onClick={this.changeStatus.bind(this, task.id)} className={task.status ? "label label-success pointer" : "label label-danger pointer"}>
                            {task.status ? "Active" : "Inactive"}</span>
                        </td>
                        <td className="text-center col-md-4">
                            
                            <button type="button" className="btn btn-sm btn-warning" onClick={this.onEdit.bind(this, task.id)}>
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
export default Result;
