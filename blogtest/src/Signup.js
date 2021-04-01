import { useState } from "react";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [email, setEmail] = useState("");


    const handleSignup = (e) => {
        e.preventDefault();
        const user = { username, password, email };
        

    }
    return (
        <div className="page-forms">
            <h2>Create New Account</h2>
            <form onSubmit={handleSignup}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required placeholder="Username" />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required placeholder="Email Address" />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required placeholder="Password" />
                <label>Re-enter Password:</label>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    required placeholder="Re-enter Password" />
                <button>SignIn</button>
            </form>
        </div>
    );
}

export default Signup;