import Post from "./Post/Post";

import myPosts from "./MyPosts.module.css";

function MyPosts() {
    return (
        <div className={myPosts.myPosts}>
            <h2 className={myPosts.title}>My posts</h2>
            <textarea className={myPosts.text}></textarea>
            <button className={myPosts.button}>Send</button>
            <Post />
        </div>
    )
}

export default MyPosts;