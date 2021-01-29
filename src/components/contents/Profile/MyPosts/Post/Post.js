import post from "./Post.module.css";

function Post() {
    return (
        <div className={post.item}>
            <img src="#" alt="ava" className={post.image}/>
            <p className={post.text}>asdasd</p>
        </div>
    )
}

export default Post;