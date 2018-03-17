// constants

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ONLY_COMPLETED = "SHOW_ONLY_COMPLETED";


// actions

let nextTodoId = 0
export const addTodo = text => {

    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        payload: text
    }
}



export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const showOnlyCompleted = () => {
    return {
        type: SHOW_ONLY_COMPLETED,
        payload: null
    }
}