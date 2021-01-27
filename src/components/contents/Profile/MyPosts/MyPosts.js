// import Post from "./Post/Post";

import myPosts from "./MyPosts.module.css";

function MyPosts() {
    return (
        <div className="myPosts">
            <h2 className={myPosts.title}>My posts</h2>
            <textarea />
            {/* <Post /> */}
        </div>
    )
}

export default MyPosts;