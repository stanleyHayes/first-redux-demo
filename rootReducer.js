const redux = require("redux");
const combineReducers = redux.combineReducers;
const todoReducer = require("./todo/todoReducer");
const visibilityReducer = require("./visibility/visibilityReducer");

const rootReducer = combineReducers({
    todo: todoReducer,
    visibility: visibilityReducer
})


module.exports = rootReducer;