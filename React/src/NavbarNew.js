import { Link } from "react-router-dom";

const NavbarNew = () =>{
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create blog</Link></li>
            </ul>
        </>
    )
}

export default NavbarNew;