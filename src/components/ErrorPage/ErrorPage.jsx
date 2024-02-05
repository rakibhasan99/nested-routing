import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" text-center mt-60">
            <p className="text-2xl font-semibold">Oops</p>
            <h2 className="text-2xl text-gray-400">404</h2>
            <p className="text-2xl">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;