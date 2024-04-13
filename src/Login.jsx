import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import the CSS file for styling

function Login() {
    // State variables for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');
    
    const navigate = useNavigate(); // Create navigate function

    // Event handler functions
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRoleChange = (e) => setRole(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here, e.g., sending data to an API
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Role:', role);
        
        // Reset the form
        setUsername('');
        setPassword('');
        setRole('employee');
    };

    // Function to handle signup click
    const handleSignupClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div className="login-container">
            <h2>Payroll and Management Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={role} onChange={handleRoleChange} required>
                        <option value="hr">HR</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
                <button type="submit">Login</button>
                <div className="signup">
                    <a href="#" onClick={handleSignupClick}>Signup</a> {/* Updated signup link */}
                </div>
            </form>
        </div>
    );
}

export default Login;
