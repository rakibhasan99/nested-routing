import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const postData = useLoaderData();
    console.log(postData);
    const {title, body} = postData;
    const navigate = useNavigate();
    const handlePostBack = () =>{
        navigate(-1);
    }
    return (
        <div className="text-center bg-blue-200 p-6 rounded-lg ml-60 mr-60">
            <p className="text-xl">Title: {title}</p>
            <p><small> Description: {body}</small></p>
            <button className="p-2 bg-blue-600 text-white rounded-lg mt-2"  onClick={handlePostBack}>Back</button>
        </div>
    );
};

export default PostDetails;