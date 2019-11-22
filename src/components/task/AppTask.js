import React from 'react';
import Add from './Add';
import SearchTask from './SearchTask';
import Result from './Result';

class AppTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayAdd: false,
            taskEditing: {}
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
        this.setState({
            isDisplayAdd : data
        })
    }

    onSave(data) {
        data.id = this.genarateID();
        var {tasks} = this.state;
        tasks.push(data);
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
        this.setState({
            taskEditing:tasks[index]
        })
        console.log(tasks[index]);
    }

    saveAll(tasks) {
        this.setState({
            tasks: tasks
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

	render() {
        var { tasks, isDisplayAdd } = this.state;
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
                                genarateTasks={this.genarateTasks.bind(this)}/>
                            <br/>
                            <Result 
                                tasks={tasks} 
                                changeStatus={this.changeStatus.bind(this)}
                                onEdit={this.onEdit.bind(this)}/>
                            
                        </div>
                        
                    </div>
                    
                    
                </div>
                
		);
	}
}
export default AppTask;
