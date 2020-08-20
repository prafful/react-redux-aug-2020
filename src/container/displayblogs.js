import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios'
import actionBroadcastBlogs from '../actions/broadcastblogs';


class DisplayBlogs extends React.Component {

    componentWillMount(){
        if(this.props.allblogs.length === 0){
            this.getAllBlogs()
        }
    }
    
    getAllBlogs=()=>{
        axios.get('http://localhost:3000/blogs')
            .then(res => {
                console.log(res);
                this.props.sendAllBlogs(res.data)
            }, err => {
                console.log(err);
            })
    }

    renderAllBlogs=()=>{
        return this.props.allblogs.map(b=>{
            return (
                <li key={b.id}>{b.title}</li>
            )
        })
    }

    render() { 
        if(this.props.allblogs.length === 0){
            return ( 
                <div>All Blogs WIll be displayed here!!!!</div>
             );
        }
        return ( 
            <div>
                <div>All Blogs</div>
                <ol>
                    {this.renderAllBlogs()}
                </ol>
            </div>

         );
    }
}

function convertStoreToProps(store){
    return {
        allblogs: store.getblogs
    }
}

function convertFunctionToPropsToBroadcast(dispatch){
    return bindActionCreators({
        sendAllBlogs: actionBroadcastBlogs
    }, dispatch)
}


export default connect(convertStoreToProps, convertFunctionToPropsToBroadcast)(DisplayBlogs)