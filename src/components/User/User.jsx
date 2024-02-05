import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className='bg-blue-200 rounded-lg pt-6 pb-6 '>
            <div className='mb-3'>
                <p className='text-4xl mb-1'>{name}</p>
                <p className='text-xl'>Email: {email}</p>
                <p><small>Phone: {phone}</small></p>

            </div>
            <Link to={`/user/${id}`} className='bg-blue-600 text-white hover:bg-blue-500 font-semibold hover:text-yellow-400 p-2 rounded-lg'><button>Show Details</button></Link>
        </div>

    );
};

User.propTypes = {
    optionalObject: PropTypes.object
}
export default User;