const { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } = require("./visibilityActionTypes");

const initialState = { visibility: SHOW_ALL };

const visibilityReducer = function(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALL:
            return {
                ...state,
                visibility: SHOW_ALL
            }
        case SHOW_COMPLETED:
            return {
                ...state,
                visibility: SHOW_COMPLETED
            }
        case SHOW_UNCOMPLETED:
            return {
                visibility: SHOW_UNCOMPLETED
            }
        default:
            return state
    }
}

module.exports = visibilityReducer;