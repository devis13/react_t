import Post from "./Post/Post";

import myPosts from "./MyPosts.module.css";

function MyPosts() {
    return (
        <div className={myPosts.myPosts}>
            <h2 className={myPosts.title}>My posts</h2>
            <div className={myPosts.textWrap}>
                <textarea className={myPosts.mytext}></textarea>
                <button className={myPosts.button}>Send</button>
            </div>

            <div className={myPosts.posts}>
                <div className={myPosts.item}><Post text="Hi"/></div>
                <div className={myPosts.item}><Post text="Hi"/></div>
                <div className={myPosts.item}><Post text="Hi"/></div>
            </div>
        </div>
    )
}

export default MyPosts;