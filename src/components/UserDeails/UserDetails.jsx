import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }
    const {name, email, phone, website} = details;
    return (
        <div className="text-center bg-blue-300 p-6 rounded-lg ml-60 mr-60">
            <p className="text-2xl text-gray-500">{name}</p>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p className="mb-2">Website: <small>{website}</small></p>
            <Link className="p-2 bg-blue-600 text-white rounded-lg mt-2" onClick={handleBack}><button>Back</button></Link>
        </div>
    );
};

export default UserDetails;