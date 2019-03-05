

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

export const createNewPigeon = (state, newPigeon) => {
    state.userMessageList = state.userMessageList.concat(messageBox)
}


export const pickNewMessageBox = (state) => {
    var list = {
        private:{
            id:2947230875280,
            sent_by:"Tianhua", 
            created_time:"2019/01/20", 
            topic:"Hello world",
            currently_at:"Tianhua", 
            time_arrived_at_current_user:"2019/01/22", 
            isMultiUser:false,
            viewable_by:["Tianhua"],
            messages:[
                {
                    id:32972408,
                    user:"Tianhua", 
                    created_time:"2019/01/20 14:39:21",
                    content: "This is the first message I send to you."
                },
            ]
        },
        public: {
            id:294723087528011,
            sent_by:"Tianhua", 
            created_time:"2019/01/20", 
            topic:"Anyone who knows John Bracio?",
            currently_at:"Adam", 
            time_arrived_at_current_user:"2019/01/22", 
            isMultiUser:true,
            viewable_by:["Tianhua","Steven",'Jay','Dehou','Adam'],
            messages:[
                {
                    id:238285613123,
                    user:"Tianhua", 
                    created_time:"2019/01/20 14:39:21",
                    content: "Who's that?"
                },
                {
                    id:238285623423,
                    user:"Steven", 
                    created_time:"2019/01/20 15:22:11",
                    content: "An amaing instructor I've never met before"
                },
                {
                    id:23828569867,
                    user:"Jay", 
                    created_time:"2019/01/20 18:21:33",
                    content: "Really?"
                },
                {
                    id:2382856983574,
                    user:"Dehou", 
                    created_time:"2019/01/21 10:20:03",
                    content: "Have no chance to take his courses, but I know him."
                },
                {
                    id:2382856975280954,
                    user:"Steven", 
                    created_time:"2019/01/21 14:30:11",
                    content: "Go to select his course, highly recommend!"
                },
                {
                    id:2382856340975905,
                    user:"Yunlong", 
                    created_time:"2019/01/20 18:28:11",
                    content: "Agree with Steven, he is super nice"
                },
                {
                    id:2382856340975904,
                    user:"Xiao", 
                    created_time:"2019/01/20 18:28:11",
                    content: "I got an A+ in one of his course"
                },
                {
                    id:2382856340975903,
                    user:"Ximing", 
                    created_time:"2019/01/20 18:28:11",
                    content: "What's the courses he taught?"
                },
                {
                    id:2382856340975901,
                    user:"Ang", 
                    created_time:"2019/01/20 18:28:11",
                    content: "I successfully selected COMP 4350. Any others?"
                },
                {
                    id:2382856340975902,
                    user:"Adam", 
                    created_time:"2019/01/20 18:28:11",
                    content: "Hope there's still space available."
                }
            ]
        }
        
        
    }
    
    state.toBePickUpMessageList = list
}
