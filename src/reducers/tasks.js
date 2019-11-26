import * as types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    var index = findIndex(state, action.id);
    switch(action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if (task.id) {            
                state[findIndex(state, task.id)] = task;
            } else {
                task.id = genarateID();
                state.push(task);
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.CHANGE_STATUS:
            state[index].status = !state[index].status;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.ON_DELETE:
            state.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.GENERATOR:
            var tasks = genarateTasks();
            localStorage.setItem("tasks", JSON.stringify(tasks));
            return tasks;
        default: return state;
    }
};

var s4 = () => {
    return Math.floor(new Date().getTime()*Math.random()).toString(16).substring(1);
}

var genarateID = () => {
    return s4() + '-' + s4();
}

var findIndex = (map, id) => {
    var result = -1;
    map.forEach((element, index) => {
        if (element.id === id) {
            result = index;
        }
    });
    return result;
}

var genarateTasks = () => {
    var tasks = [
        {
            id: genarateID(),
            name: 'Learn Reactjs',
            status: Math.floor(Math.random()*100)%2
        },
        {
            id: genarateID(),
            name: 'Learn Java',
            status: Math.floor(Math.random()*100)%2
        },
        {
            id: genarateID(),
            name: 'Learn Oracle',
            status: Math.floor(Math.random()*100)%2
        }
    ]
    return tasks;
}

export default myReducer; 