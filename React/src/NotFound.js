import { Link } from "react-router-dom";

const NotFound = () =>{
    return (
        <>
            <div>Sorry</div>
            <p>The page you are trying to access could not be found...</p>
            <Link to="/">Back to home page</Link>
        </>
    )
}

export default NotFound;