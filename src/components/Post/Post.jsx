import { Link, useNavigate, useNavigation } from "react-router-dom";

const Post = ({ post }) => {
    const {id,  userId, title } = post;
    const navigate = useNavigate();
    const handlePostDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='rounded-lg pt-6 pb-6 bg-gray-200'>
            <div className="mb-3">
                <p className="text-2xl">UserId: {userId}</p>
                <p className=""><small>Title: {title}</small></p>

            </div>
            <button onClick={handlePostDetails} className='bg-blue-600 text-white hover:bg-blue-500 font-semibold hover:text-yellow-400 p-2 rounded-lg'>Post Details</button>
        </div>
    );
};

export default Post;