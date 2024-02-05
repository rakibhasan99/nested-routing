import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className=" grid grid-cols-3 gap-4 p-4 text-center">
            {
                posts.map(post => <Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;