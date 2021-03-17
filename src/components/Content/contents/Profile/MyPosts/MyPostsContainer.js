import React from 'react';
import { updatePostValueActionCreator, addPostActionCreator } from '../../../../../redux/profile_reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {  
    const state = props.store.getState();
    const statePosts = state.contents.profile.myPosts;
    
    const onChangeValue = (text) => {
        props.store.dispatch(updatePostValueActionCreator(text));
    } 

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return <MyPosts postData={ statePosts.postData }
                    postValue={ statePosts.postValue }
                    addPost={ addPost }
                    onChangeValue={ onChangeValue }/>
}

export default MyPostsContainer;