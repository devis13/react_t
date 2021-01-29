import post from "./Post.module.css";

function Post() {
    return (
        <div className={post.item}>
            <img src="https://archilab.online/images/1/123.jpg" alt="ava" className={post.image}/>
            <p className={post.text}>asdasd</p>
        </div>
    )
}

export default Post;