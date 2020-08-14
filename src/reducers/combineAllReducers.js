//combine all reducers anc export the same so that it 
//can be used to create store in index.js


import myallfriendsreducer from "./allfriends";
import myallfriendslikes from "./friendlikes";
import myotherfriends from "./otherfriends";

import { combineReducers } from 'redux';
import friendNameClickedReducer from "./friendnameclickedreducer";
import getblogsreducer from "./reducergetblogs";

const allReducers = combineReducers({

    allfriends: myallfriendsreducer,
    allfriendslikes: myallfriendslikes,
    otherfriends: myotherfriends,
    friendclicked: friendNameClickedReducer,
    getblogs: getblogsreducer
})

export default allReducers