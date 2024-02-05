import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-300 text-blue-600'>
            <div className='flex gap-6 justify-center p-4 mb-8'>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
};

export default Header;