const { default: myallfriendslikes } = require("./friendlikes")

const myallfriendsreducer = function allFriendsReducer() {
    return [
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
}

export default myallfriendsreducer