import React from 'react';
import Post from "./Post/Post";
import myPosts from "./MyPosts.module.css";


function MyPosts(props) {    
    const newPostElement =  React.createRef();

    let onChangeValue = () => {
        let text = newPostElement.current.value;

        props.newPostValue(text);
    }

    const post = props.state.postData.map((obj) => {
        return <Post    className={myPosts.item}
                        id={obj.id} 
                        text={obj.text}/>;
    });
    
    return (
        
        <div className={myPosts.myPosts + " " + props.className}>
            <h2 className={myPosts.title}>My posts</h2>
            <div className={myPosts.textWrap}>
                <textarea   ref={newPostElement} 
                            className={myPosts.mytext} 
                            value={props.state.postValue}
                            onChange={onChangeValue}/>
                <button onClick={ props.addPost } className={myPosts.button}>Send</button>
            </div>

            <div className={myPosts.posts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;