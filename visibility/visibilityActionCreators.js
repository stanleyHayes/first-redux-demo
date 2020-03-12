const { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } = require("./visibilityActionTypes");

const setShowAll = function() {
    return {
        type: SHOW_ALL
    }
}

const setShowCompleted = function() {
    return {
        type: SHOW_COMPLETED
    }
}

const setShowUncompleted = function() {
    return {
        type: SHOW_UNCOMPLETED
    }
}

module.exports = { setShowAll, setShowCompleted, setShowUncompleted };