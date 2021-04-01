import { useState } from "react";
import { useHistory } from "react-router";

const Login = ({setIsLoggedIn, isLoggedIn}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history =useHistory();


    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "taha"&& password==="123456"){
            setIsLoggedIn(true);
            history.push("/");

        }
    }
    return (
        <div className="page-forms">
            <h2>Please Sign in to Continue</h2>
            <form onSubmit={handleLogin}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required placeholder="Username" />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required placeholder="Password" />
                <button>SignIn</button>
            </form>
        </div>
    );
}

export default Login;