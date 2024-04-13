import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css'; // Import the CSS file for styling

function Signup() {
    // State variables for form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');
    
    const navigate = useNavigate(); // Create navigate function

    // Event handler functions
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRoleChange = (e) => setRole(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here, e.g., sending data to an API
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Role:', role);
        // Reset the form
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setRole('employee');
    };

    // Function to handle login click
    const handleLoginClick = () => {
        navigate('/'); // Navigate to the login page
    };

    return (
        <div className="signup-container">
            <h2>Payroll and Management Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="firstname">Firstname:</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        placeholder="Enter your firstname"
                        required
                    />
                </div>
                <div class="input-group">
                    <label htmlFor="lastname">Lastname:</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={lastName}
                        onChange={handleLastNameChange}
                        placeholder="Enter your lastname"
                        required
                    />
                </div>
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
                <div class="input-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={role}
                        onChange={handleRoleChange}
                        required
                    >
                        <option value="hr">HR</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>
                {/* Uncomment the following line to add a forgot password link */}
                {/* <a href="#" className="forgot-password">Forgot password?</a> */}
                <button type="submit">Signup</button>
                <div className="login">
                    <a href="#" onClick={handleLoginClick}>Login</a> {/* Updated login link */}
                </div>
            </form>
        </div>
    );
}

export default Signup;
