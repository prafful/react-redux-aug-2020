import React from 'react';

import FriendList from '../container/friendlist';
import FriendDetail from '../container/frienddetail';
import FriendLikes from '../container/friendlikes';
import AddFriend from '../container/addfriend';
import DisplayBlogs from '../container/displayblogs';


class ContainerHolder extends React.Component {
    state = {  }
    render() { 
        return (
            <div>

               <FriendList></FriendList>
               <hr></hr>
               <FriendDetail></FriendDetail>
               <hr></hr>
               <FriendLikes></FriendLikes>
               <hr></hr>
               <AddFriend></AddFriend>
               <hr></hr>
               <DisplayBlogs></DisplayBlogs>
            </div>
          );
    }
}
 
export default ContainerHolder;