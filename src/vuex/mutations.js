

export const createNewMessageBox = (state, messageBox) => {
    state.userMessageList = state.userMessageList.concat(messageBox)
}
