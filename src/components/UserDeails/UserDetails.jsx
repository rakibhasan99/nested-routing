import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const details = useLoaderData();
    const {name, email, phone, website} = details;
    return (
        <div className="text-center bg-blue-300 p-6 rounded-lg">
            <p className="text-2xl text-gray-500">{name}</p>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: <small>{website}</small></p>
        </div>
    );
};

export default UserDetails;