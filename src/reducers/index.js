import {combineReducers} from 'redux'
import * as actions from '../actions/index'

const initialState = {
    categories: [],
    notes: []
}

// reducer for categories/notes setter
function setterData(state = initialState, action) {
    switch (action.type) {
        case actions.SET_CATEGORIES: // 全部类别
            const categories = action.categories

            return {
                ...state,
                categories
            }
        case actions.SET_NOTES: // 全部帖子
            const notes = action.notes

            return {
                ...state,
                notes
            }
        default:
            return state
    }
}

export default combineReducers({
    setterData
})