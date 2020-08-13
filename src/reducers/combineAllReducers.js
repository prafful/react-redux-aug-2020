//combine all reducers anc export the same so that it 
//can be used to create store in index.js


import myallfriendsreducer from "./allfriends";
import myallfriendslikes from "./friendlikes";
import myotherfriends from "./otherfriends";

import { combineReducers } from 'redux';
import friendNameClickedReducer from "./friendnameclickedreducer";

const allReducers = combineReducers({

    allfriends: myallfriendsreducer,
    allfriendslikes: myallfriendslikes,
    otherfriends: myotherfriends,
    friendclicked: friendNameClickedReducer
})

export default allReducers