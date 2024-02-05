import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2 className="text-center text-4xl text-blue-600">Users total Data: {users.length}</h2>
            <div className=" grid grid-cols-3 gap-4 p-4 text-center">
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;