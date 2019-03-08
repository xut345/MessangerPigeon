
export function addPigeonToList({commit}, newPigeon) {
    return commit ('addPigeonToList', newPigeon)
}
 

export function pickNewMessageBox({commit}, messageBox) {
    return commit ('pickNewMessageBox')
}

export function sendRespond({commit}, message) {
    return commit ('sendResponse')
}


export function login({commit}, user) {
    return commit ('login')
}


export function logout({commit}) {
    return commit ('logout')
}


export function setToken({commit}, token) {
    return commit ('setToken')
}


export function showFlyingBird({commit}) {
    return commit ('showFlyingBird')
}

export function hideFlyingBird({commit}) {
    return commit ('hideFlyingBird')
}

export function showLoginError({commit}) {
    return commit ('showLoginError')
}

export function hideLoginError({commit}) {
    return commit ('hideLoginError')
}


export function showRegisterError({commit}) {
    return commit ('showRegisterError')
}

export function hideRegisterError({commit}) {
    return commit ('hideRegisterError')
}