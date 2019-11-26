import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
};

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
};

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
};

export const changeStatus = (id) => {
    return {
        type: types.CHANGE_STATUS,
        id:id
    }
};

export const onDelete = (id) => {
    return {
        type: types.ON_DELETE,
        id:id
    }
};

export const onEdit = (task) => {
    return {
        type: types.ON_EDIT,
        task
    }
};

export const generator = () => {
    return {
        type: types.GENERATOR
    }
};

export const search = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
};

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
};