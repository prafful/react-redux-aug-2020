const { default: myallfriendslikes } = require("./friendlikes")

const myallfriendsreducer = function allFriendsReducer(state = null, action) {
    var allfriends =  [
        {
            id: 1,
            name: 'OBB',
            location: 'Chennai',

            since: 4
        },
        {
            id: 2,
            name: 'BNP',
            location: 'Ahmedabad',

            since: 6

        },
        {
            id: 3,
            name: 'CAS',
            location: 'Bengaluru',

            since: 2

        },
        {
            id: 4,
            name: 'OWIOH',
            location: 'Japan',

            since: 9
        }
    ]


    switch (action.type) {
        case "NEW_FRIEND":
            console.log('add name, location for new friend....')                       
            console.log(state);
            console.log(action.payload);
            let length = state.length
            let newallfriends = [{ 
                                        id:length+1, 
                                        name: action.payload.name,
                                        location: action.payload.location,
                                        since: action.payload.since
                                    }, ...state]
            return newallfriends
    
        default:
            break;
    }

    return allfriends
}

export default myallfriendsreducer