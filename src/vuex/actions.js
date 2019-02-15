
export function createNewPigeon({commit}, newPigeon) {
    return commit ('createNewPigeon', newPigeon)
}
 

export function pickNewMessageBox({commit}, messageBox) {
    return commit ('pickNewMessageBox')
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