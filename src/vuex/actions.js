
export const set_news_state = ({ dispatch }, index, val, fn) => {
    dispatch('SET_NEWS_STATE', index, val)
    !!fn && fn()
}
export const delete_news = ({ dispatch }, index, fn) => {
    dispatch('DELETE_NEWS', index)
    !!fn && fn()
}
export const get_menu_wechat_list = ({ dispatch }, fn) => {
    let list = require('../mock/chat')
    dispatch('SET_MENU_WECHAT_LIST', list)
    !!fn && fn()
}
export const set_chat = ({ dispatch }, model) => {
    dispatch('CHAT', model)
}



// export const deleteTodo = makeAction('DELETE_TODO')
// export const toggleTodo = makeAction('TOGGLE_TODO')
// export const editTodo = makeAction('EDIT_TODO')
// export const toggleAll = makeAction('TOGGLE_ALL')
// export const clearCompleted = makeAction('CLEAR_COMPLETED')

// function makeAction (type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args)
// }
