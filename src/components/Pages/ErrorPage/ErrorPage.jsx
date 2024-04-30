import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="text-center mt-12">
                <h2>404 Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to='/'>Go To Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;