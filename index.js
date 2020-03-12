const redux = require("redux");
const createStore = redux.createStore;

const rootReducer = require("./rootReducer");

//import todo action creators
const { createTodo, deleteTodo, editTodo, toggleTodo } = require("./todo/index");

//import visibility action creators
const { setShowAll, setShowCompleted, setShowUncompleted } = require("./visibility/index");

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(function() {
    console.log('Update Received');
    console.log(store.getState().todo.todos);
    console.log(store.getState().visibility)
});

store.dispatch(createTodo({ text: 'Watch Porn', id: 0 }))
store.dispatch(setShowCompleted())
store.dispatch(createTodo({ text: 'Learn Redux', id: 1 }))
store.dispatch(createTodo({ text: 'Learn React', id: 2 }))
store.dispatch(createTodo({ text: 'Learn Redux-Redux', id: 3 }))
store.dispatch(toggleTodo(1))
store.dispatch(setShowCompleted())
store.dispatch(editTodo(3, 'Learn React Redux'))
store.dispatch(deleteTodo(0))
store.dispatch(setShowUncompleted())
unsubscribe();