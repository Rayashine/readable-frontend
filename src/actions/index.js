export const SET_CATEGORIES = 'SET_CATEGORIES' // 类别列表
export const SET_NOTES = 'SET_NOTES' // 全部帖子列表

// 类别列表的setter action
export function set_categories_action({categories}) {
    return {
        type: SET_CATEGORIES,
        categories
    }
}
// 全部帖子列表的setter action
export function set_notes_action({notes}) {
    return {
        type: SET_NOTES,
        notes
    }
}