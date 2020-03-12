const { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } = require("./todoActionTypes");

const createTodo = function(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

const toggleTodo = function(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

const deleteTodo = function(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

const editTodo = function(id, text) {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,
            text: text
        }
    }
}


module.exports = { createTodo, toggleTodo, deleteTodo, editTodo };