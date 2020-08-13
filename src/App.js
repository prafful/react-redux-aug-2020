import React from 'react';
import FriendList from './container/friendlist';
import FriendDetail from './container/frienddetail';
import FriendLikes from './container/friendlikes';


function App() {
  return (
    <div >
               <FriendList></FriendList>
               <hr></hr>
               <FriendDetail></FriendDetail>
               <hr></hr>
               <FriendLikes></FriendLikes>
       
    </div>
  );
}

export default App;
