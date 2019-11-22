import React from 'react';

class SearchTask extends React.Component {

    genarateTasks() {
        this.props.genarateTasks();
    }

    displayAdd() {
        this.props.receviceIsDisplay(!this.props.isDisplayAdd);
    }

	render() {
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
                            <input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
                            <div className="input-group-btn">
                            <button className="btn btn-primary">
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
                                    <li><button className="fa fa-sort-alpha-asc pointer button-link">&nbsp;&nbsp;A -> Z</button></li>
                                    <li><button className="fa fa-sort-alpha-desc pointer button-link">&nbsp;&nbsp;Z -> A</button></li>
                                    <hr/>
                                    <li><button className="pointer button-link">Active</button></li>
                                    <li><button className="pointer button-link">Inactive</button></li>
                                </ul>
                            </div>
                        
                        </div>
                    
                    </div>
                </div>
                
		);
	}
}
export default SearchTask;
