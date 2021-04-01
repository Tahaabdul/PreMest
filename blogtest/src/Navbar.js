import {Link, useHistory, }from 'react-router-dom';


const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
    const history = useHistory();
    const handleLogOut =(e) =>{
        e.preventDefault();
        setIsLoggedIn(false);
        history.push("/");
    }
    return (
        <nav className="navbar">
            <h1> React Test Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
                {!isLoggedIn && <Link to="/login">Login</Link>}
                {!isLoggedIn && <Link to="/Signup">Signup</Link>}
                {isLoggedIn && <button style={{
                    background: "#f1356d",
                    color: "#fff",
                    border: "0",
                    padding: "8px",
                    borderRadius: "8px",
                    cursor: "pointer",
                 } }    onClick={handleLogOut}>LogOut</button>}
            </div>
        </nav>
     );
}
 
export default Navbar;