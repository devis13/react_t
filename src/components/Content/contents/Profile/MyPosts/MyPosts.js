import React from 'react';
import Post from "./Post/Post";
import myPosts from "./MyPosts.module.css";
import { updatePostValueActionCreator, addPostActionCreator } from '../../../../../redux/profile_reducer';


function MyPosts(props) {    
    const newPostElement =  React.createRef();
    

    const onChangeValue = () => {
        const text = newPostElement.current.value;
        props.dispatch(updatePostValueActionCreator(text));
    } 

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const post = props.state.postData.map((obj) => {
        return <Post    className={ myPosts.item }
                        id={ obj.id } 
                        text={ obj.text }/>;
    });
    
    return (
        
        <div className={ myPosts.myPosts + " " + props.className }>
            <h2 className={ myPosts.title }>My posts</h2>
            <div className={ myPosts.textWrap }>
                <textarea   ref={ newPostElement } 
                            className={ myPosts.mytext } 
                            value={ props.state.postValue }
                            onChange={ onChangeValue }/>
                <button onClick={ addPost } className={myPosts.button}>Send</button>
            </div>

            <div className={ myPosts.posts }>
                { post }
            </div>
        </div>
    )
}

export default MyPosts;