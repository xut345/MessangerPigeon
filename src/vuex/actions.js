
export function createNewMessageBox({commit}, messageBox) {
    return commit ('createNewMessageBox', messageBox)
}
 

export function pickNewMessageBox({commit}, messageBox) {
    return commit ('pickNewMessageBox')
}
 