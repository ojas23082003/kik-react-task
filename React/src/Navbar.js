import {Link} from 'react-router-dom';

const Navbar = () =>{
    return (
        <>
            <ul>
                <Link to="/" style={{textDecoration:"None !important", fontSize:"20px"}}>Home</Link><br></br>
                <Link to="/create" style={{textDecoration:"None !important", fontSize:"20px"}}>New Blog</Link>
            </ul>
        </>
    )
}
export default Navbar;