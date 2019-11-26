import React from 'react';
import Add from './Add';
import SearchTask from './SearchTask';
import Result from './Result';
import { connect } from 'react-redux';
// import * as action from './../../actions/index'
// import Redux from './../redux/index'

class AppTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:'',
            by : '',
            value: -1
        }
    }

    onSearch(keyword) {
        this.setState({
            keyword : keyword
        })
    }

    onSort(by, value) {
        console.log(by, " - ", value);
        this.setState({
            by:by,
            value:value
        })
    }

	render() {
        var { isDisplayForm } = this.props;
        // if(keyword) {
        //     tasks = tasks.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1
        //     })
        // }

        // if (by === 'name') {
        //     tasks.sort((a,b) => {
        //         console.log(a, " - ", b);
        //         if (a.name > b.name) return -value;
        //         else if (a.name < b.name) return value;
        //         return 0;
        //     })
        // } else {
        //     tasks.sort((a,b) => {
        //         if (a.status > b.status) return -value;
        //         else if (a.status < b.status) return value;
        //         return 0;
        //     })
        // }
        var elementAddTask = isDisplayForm ? <Add/> : '';
		return (
				
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h1 className="text-center">Task Manegement</h1>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                            
                            {elementAddTask}
                            
                        </div>
                        
                        <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                            
                            <SearchTask
                                onSearch={this.onSearch.bind(this)}
                                onSort={this.onSort.bind(this)}/>
                            <br/>
                            <Result 
                                />
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                
		);
	}
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AppTask);