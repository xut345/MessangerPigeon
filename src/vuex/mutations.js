

export const hideRegisterError = (state) => {
    setTimeout(function(){
        state.registerError = false
    },3000)
}

export const showRegisterError = (state) => {
    state.registerError = true
}

export const hideLoginError = (state) => {
    setTimeout(function(){
        state.loginError = false
    },3000)
}

export const showLoginError = (state) => {
    state.loginError = true
}

export const showFlyingBird = (state) => {
    state.showFlyingBird = true
}

export const hideFlyingBird = (state) => {
    setTimeout(function(){
        state.showFlyingBird = false
    },8000)
    
}

export const login = (state, user) => {
    state.user = user
}

export const logout = (state) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    state.user = null,
    state.token = null
}


export const setToken = (state, token) => {
    state.token = token
}

export const addPigeonToList = (state, newPigeon) => {
    state.userMessageList = state.userMessageList.concat(newPigeon)
}


export const pickNewMessageBox = (state, pigeon) => {
    state.toBePickUpMessageList = pigeon
}

export const sendResponse = (state, data) => {
    state.toBePickUpMessageList.messages = state.toBePickUpMessageList.messages.concat(data)
}
