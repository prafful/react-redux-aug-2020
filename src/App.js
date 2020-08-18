import React from 'react';
import FriendList from './container/friendlist';
import FriendDetail from './container/frienddetail';
import FriendLikes from './container/friendlikes';
import AddFriend from './container/addfriend';


function App() {
  return (
    <div >
               <FriendList></FriendList>
               <hr></hr>
               <FriendDetail></FriendDetail>
               <hr></hr>
               <FriendLikes></FriendLikes>
               <hr></hr>
               <AddFriend></AddFriend>
       
    </div>
  );
}

export default App;
