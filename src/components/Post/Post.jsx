const Post = ({post}) => {
    const {userId, title} = post;
    return (
        <div>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
        </div>
    );
};

export default Post;