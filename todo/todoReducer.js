const { EDIT_TODO, ADD_TODO, TOGGLE_TODO, DELETE_TODO } = require("./todoActionTypes");

const initialTodoState = {
    todos: []
};

const todoReducer = function(state = initialTodoState, action) {
    let updatedTodos = null;
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                    { text: action.payload.text, completed: false, id: action.payload.id }
                ]
            }
        case TOGGLE_TODO:
            updatedTodos = state.todos.map(function(todo) {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }

                return todo;
            })
            return {
                ...state,
                todos: updatedTodos
            }

        case EDIT_TODO:
            updatedTodos = state.todos.map(function(todo) {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo;
            })

            return {
                ...state,
                todos: updatedTodos
            }
        case DELETE_TODO:
            updatedTodos = state.todos.filter(function(todo) {
                return todo.id !== action.payload
            })
            return {
                ...state,
                todos: updatedTodos
            }
        default:
            return state;
    }
}

module.exports = todoReducer;