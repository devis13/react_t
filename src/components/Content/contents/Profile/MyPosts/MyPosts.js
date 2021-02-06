import Post from "./Post/Post";

import myPosts from "./MyPosts.module.css";

function MyPosts(props) {
    return (
        <div className={myPosts.myPosts + " " + props.className}>
            <h2 className={myPosts.title}>My posts</h2>
            <div className={myPosts.textWrap}>
                <textarea className={myPosts.mytext}></textarea>
                <button className={myPosts.button}>Send</button>
            </div>

            <div className={myPosts.posts}>
                <Post className={myPosts.item} text="Hi"/>
                <Post className={myPosts.item} text="Hi"/>
                <Post className={myPosts.item} text="Hi"/>
            </div>
        </div>
    )
}

export default MyPosts;