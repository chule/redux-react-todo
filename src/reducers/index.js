import { combineReducers } from 'redux'

import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SHOW_ONLY_COMPLETED
} from "../actions";


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.payload, completed: false, id: action.id }];
        case DELETE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.payload;
            })
        case COMPLETE_TODO:
            return state.map((todo) => {
                if (action.payload === todo.id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })

        default:
            return state;
    }
}

function visibilityFilter(state = false, action) {
    switch (action.type) {
        case SHOW_ONLY_COMPLETED:
            return !state;
        default:
            return state;
    }
}

export default combineReducers({
    visibilityFilter,
    todos
})