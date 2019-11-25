import * as types from './../constants/ActionTypes';

var initialState = {
    by:'name',
    value: 1
}

var myReducer = (state = initialState, action) => {
    if (action.type === types.SORT) {
        var { by, value} = action.sort;
        return {by, value};
    }
    return state;
    // var { by, value } = action.sort;
    // return { by,value }
}

export default myReducer;