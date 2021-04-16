import React from 'react';
import Post from "./Post/Post";
import myPosts from "./MyPosts.module.css";

function MyPosts(props) {    
    const newPostElement =  React.createRef();
    

    const onChangeValue = () => {
        const text = newPostElement.current.value;
        props.updatePostValue(text);
    } 

    const addPost = () => {
        props.addPost();
    }

    const post = props.postData.map((obj) => {
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
                            value={ props.postValue }
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