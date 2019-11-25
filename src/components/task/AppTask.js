import React from 'react';
import Add from './Add';
import SearchTask from './SearchTask';
import Result from './Result';
import Redux from './../redux/index'

class AppTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayAdd: false,
            taskEditing: {},
            keyword:'',
            by : '',
            value: -1
        }
    }
    
    UNSAFE_componentWillMount() {
        if (localStorage && localStorage.getItem("tasks")) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem("tasks"))
            })
        }
    }
    
    genarateTasks() {
        var tasks = [
            {
                id: this.genarateID(),
                name: 'Learn Reactjs',
                status: Math.floor(Math.random()*100)%2
            },
            {
                id: this.genarateID(),
                name: 'Learn Java',
                status: Math.floor(Math.random()*100)%2
            },
            {
                id: this.genarateID(),
                name: 'Learn Oracle',
                status: Math.floor(Math.random()*100)%2
            }
        ]
        this.saveAll(tasks);
    }

    s4() {
        return Math.floor(new Date().getTime()*Math.random()).toString(16).substring(1);
    }

    genarateID() {
        return this.s4() + '-' + this.s4();
    }

    receviceData(data) {
        this.setState({
            tasks : data
        })
    }

    receviceIsDisplay(data) {
        if (this.state.isDisplayAdd && this.state.taskEditing !== null) {
            this.setState({
                isDisplayAdd : true,
                taskEditing: null
            })
        } else {
            this.setState({
                isDisplayAdd : data,
                taskEditing: null
            })
        }
    }

    onSave(data) {
        var { tasks } = this.state;
        if (data.id === '') {
            data.id = this.genarateID();
            tasks.push(data);
        } else {
            var index = tasks.map(function(e) { 
                return e.id; 
            }).indexOf(data.id);
            tasks[index] = data
        }
        this.setState({
            isDisplayAdd : false
        })
        this.saveAll(tasks);
    }

    changeStatus(id) {
        var { tasks } = this.state;
        var index = tasks.map(function(e) { 
            return e.id; 
        }).indexOf(id);
        tasks[index].status = !tasks[index].status
        this.saveAll(tasks);
    }

    onEdit(id) {
        this.receviceIsDisplay(true);
        var { tasks } = this.state;
        var index = tasks.map(function(e) { 
            return e.id; 
        }).indexOf(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing:taskEditing
        })
    }

    onDelete(id) {
        var { tasks } = this.state;
        var index = tasks.map(function(e) { 
            return e.id; 
        }).indexOf(id);
        this.setState({
            tasks:tasks.splice(index, 1)
        })
        this.saveAll(tasks);
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

    saveAll(tasks) {
        this.setState({
            tasks: tasks
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

	render() {
        var { tasks, isDisplayAdd, keyword, by, value} = this.state;
        if(keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1
            })
        }

        if (by === 'name') {
            tasks.sort((a,b) => {
                console.log(a, " - ", b);
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
        var elementAddTask = isDisplayAdd ? <Add 
            receviceIsDisplay={this.receviceIsDisplay.bind(this)} 
            onSave={this.onSave.bind(this)}
            task={this.state.taskEditing}
            /> : '';
		return (
				
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h1 className="text-center">Task Manegement</h1>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            
                            {elementAddTask}
                            
                        </div>
                        
                        <div className={isDisplayAdd ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                            
                            <SearchTask  receviceIsDisplay={this.receviceIsDisplay.bind(this)} 
                                receviceData={this.receviceData.bind(this)} 
                                isDisplayAdd={this.state.isDisplayAdd} 
                                genarateTasks={this.genarateTasks.bind(this)}
                                onSearch={this.onSearch.bind(this)}
                                onSort={this.onSort.bind(this)}/>
                            <br/>
                            <Result 
                                tasks={tasks} 
                                changeStatus={this.changeStatus.bind(this)}
                                onEdit={this.onEdit.bind(this)}
                                onDelete={this.onDelete.bind(this)}/>
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                
		);
	}
}
export default AppTask;
