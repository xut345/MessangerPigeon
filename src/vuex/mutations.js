

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
    state.userPigeonList = state.userPigeonList.concat(newPigeon)
}


export const pickNewMessageBox = (state, pigeon) => {
    state.toBePickUpMessageList = pigeon
    state.userPigeonList = state.userPigeonList.concat(pigeon)
}

export const sendResponse = (state, data) => {
    state.toBePickUpMessageList.messages = state.toBePickUpMessageList.messages.concat(data)
}

export const respondPigeon = (state, data) => {
  state.userPigeonMessageList = state.userPigeonMessageList.concat(data)
}

export const getPigeonList = (state, pigeonList) => {
  state.userPigeonList = pigeonList

}

export const getPigeonMessage = (state, messageList) => {
  state.userPigeonMessageList = messageList
  state.userPigeonMessageList.sort((a,b) => { return a.sent_time - b.sent_time;});
}

export const declinePigeon = (state, pigeonId) => {
  state.userPigeonList = state.userPigeonList.filter(function (pigeon) {
    return pigeonId !== pigeon.id
  })
}
