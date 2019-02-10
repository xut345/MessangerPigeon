

export const createNewMessageBox = (state, messageBox) => {
    state.userMessageList = state.userMessageList.concat(messageBox)
}


export const pickNewMessageBox = (state) => {
    var list = {

        private:{
            id:2947230875280,
            sent_by:"Tianhua1", 
            created_time:"2019/01/20", 
            topic:"Hello1",
            currently_at:"Tianhua", 
            time_arrived_at_current_user:"2019/01/22", 
            isMultiUser:false,
            viewable_by:["Tianhua"],
            messages:[
                {
                    id:32972408,
                    user:"Tianhua", 
                    created_time:"2019/01/20 14:39:21",
                    content: "message 1"
                },
            ]
        },
    
        
        public: {
            id:294723087528011,
            sent_by:"Tianhua2", 
            created_time:"2019/01/20", 
            topic:"Hello2",
            currently_at:"Adam", 
            time_arrived_at_current_user:"2019/01/22", 
            isMultiUser:true,
            viewable_by:["Tianhua","Steven",'Jay','Dehou','Adam'],
            messages:[
                {
                    id:238285613123,
                    user:"Tianhua", 
                    created_time:"2019/01/20 14:39:21",
                    content: "message 11"
                },
                {
                    id:238285623423,
                    user:"Steven", 
                    created_time:"2019/01/20 15:22:11",
                    content: "message 12 message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12message 12"
                },
                {
                    id:23828569867,
                    user:"Jay", 
                    created_time:"2019/01/20 18:21:33",
                    content: "message 13"
                },
                {
                    id:2382856983574,
                    user:"Dehou", 
                    created_time:"2019/01/21 10:20:03",
                    content: "message 14"
                },
                {
                    id:2382856975280954,
                    user:"Steven", 
                    created_time:"2019/01/21 14:30:11",
                    content: "message 15"
                },
                {
                    id:2382856340975905,
                    user:"Adam", 
                    created_time:"2019/01/20 18:28:11",
                    content: "message 16"
                },
                {
                    id:2382856340975904,
                    user:"Adam", 
                    created_time:"2019/01/20 18:28:11",
                    content: "message 16"
                },
                {
                    id:2382856340975903,
                    user:"Adam", 
                    created_time:"2019/01/20 18:28:11",
                    content: "message 16"
                },
                {
                    id:2382856340975901,
                    user:"Adam", 
                    created_time:"2019/01/20 18:28:11",
                    content: "message 16"
                },
                {
                    id:2382856340975902,
                    user:"Adam", 
                    created_time:"2019/01/20 18:28:11",
                    content: "message 16"
                }
            ]
        }
        
        
    }
    
    state.toBePickUpMessageList = list
}
