


const userDataModel={
    password:"$2b$12$u00As1dx.U3UWExpbEArYeb.pCpJp7f1O/WOA/0eItWUUQYGgzqWq",
    username:"test",
    id:231211
}

const messageDataModel={
    user:"Yunlong", //Reference to user data model
    created_time:"2019/01/20", //Time stamp
    content: "a test message",
    address:"gps location",
    id:245244
}

const messageBoxDataModel={
    sent_by:"Tianhua", //Reference to user data model
    created_time:"2019/01/20", //Time stamp
    topic:"Hello",
    currently_at:"Adam", //Reference to user data model
    time_arrived_at_current_user:"2019/01/22", //Time stamp
    isMultiUser:true, //true: message box can be passed to other users. false: message can only be picked up by one user.
    viewable_by:["Steven",'Jay','Dehou','Adam'], //A list of references to user data model. Based on isMulti User.
    messages:["mess1","mess2","mess3","mess4"], //A list of references to message data model
    id:2947230875280
}

var list = [
    {
        id:2947230875280,
        sent_by:"Tianhua", 
        created_time:"2019/01/20", 
        topic:"Pigeon1",
        currently_at:"Adam", 
        time_arrived_at_current_user:"2019/01/22", 
        isMultiUser:true,
        viewable_by:["Tianhua","Steven",'Jay','Dehou','Adam'],
        messages:[
            {
                id:32972408,
                user:"Tianhua", 
                created_time:"2019/01/20 14:39:21",
                content: "message 1"
            },
            {
                id:2437123047,
                user:"Steven", 
                created_time:"2019/01/20 15:22:11",
                content: "message 2"
            },
            {
                id:2342143662,
                user:"Jay", 
                created_time:"2019/01/20 18:21:33",
                content: "message 3"
            },
            {
                id:11297087,
                user:"Dehou", 
                created_time:"2019/01/21 10:20:03",
                content: "message 4"
            },
            {
                id:234708374028,
                user:"asd",
                created_time:"2019/01/21 14:30:11",
                content: "message 5"
            },
            {
                id:294723087528020942389,
                user:"Adam", 
                created_time:"2019/01/20 18:28:11",
                content: "message 6"
            }
        ]
    },

    
{
    id:294723087528011,
    sent_by:"Tianhua", 
    created_time:"2019/01/20", 
    topic:"Pigeon2",
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
            content: "message 12"
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
            id:238285634097590,
            user:"Adam", 
            created_time:"2019/01/20 18:28:11",
            content: "message 16"
        }
    ]
},


{
    id:2382856239429034,
    sent_by:"Dehou", 
    created_time:"2019/01/20", 
    topic:"Pigeon3",
    currently_at:"Adam", 
    time_arrived_at_current_user:"2019/01/22", 
    isMultiUser:false,
    viewable_by:["Dehou","Adam"],
    messages:[
        {
            id:2382856820703528,
            user:"Dehou", 
            created_time:"2019/01/20 14:39:21",
            content: "message 11"
        },
        {
            id:23828561231414,
            user:"Dehou", 
            created_time:"2019/01/20 15:22:11",
            content: "message 12"
        },
        {
            id:2382856092382984,
            user:"Adam", 
            created_time:"2019/01/20 18:21:33",
            content: "message 13"
        },
        {
            id:238285612097143,
            user:"Dehou", 
            created_time:"2019/01/21 10:20:03",
            content: "message 14"
        },
        {
            id:2382856097458,
            user:"Adam", 
            created_time:"2019/01/21 14:30:11",
            content: "message 15"
        },
        {
            id:2382856305730479,
            user:"Dehou", 
            created_time:"2019/01/20 18:28:11",
            content: "message 16"
        }
    ]
},


{
    id:238285620394583049,
    sent_by:"Steven", 
    created_time:"2019/01/20", 
    topic:"Pigeon4",
    currently_at:"Jay", 
    time_arrived_at_current_user:"2019/01/22", 
    isMultiUser:false,
    viewable_by:["Steven","Jay"],
    messages:[
        {
            id:238285623308758,
            user:"Steven", 
            created_time:"2019/01/20 14:39:21",
            content: "message 1"
        },
        {
            id:238285348059734580,
            user:"Jay", 
            created_time:"2019/01/20 15:22:11",
            content: "message 2"
        },
        {
            id:2382856030953,
            user:"Jay", 
            created_time:"2019/01/20 18:21:33",
            content: "message 3"
        },
        {
            id:2382856049523904,
            user:"Steven", 
            created_time:"2019/01/21 10:20:03",
            content: "message 4"
        },
        {
            id:238285620394582,
            user:"asd",
            created_time:"2019/01/21 14:30:11",
            content: "message 5"
        },
        {
            id:2382856003457,
            user:"Jay", 
            created_time:"2019/01/20 18:28:11",
            content: "message 6"
        }
    ]
}
]


module.exports = list
