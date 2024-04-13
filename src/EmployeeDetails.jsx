import React, { useState } from 'react';
import './EmployeeDetails.css'; // Import the CSS file for styling

function EmployeeDetails() {
    // Example employee data (you may replace this with real data from an API)
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'John Doe',
            role: 'Software Engineer',
            email: 'johndoe@example.com',
            phone: '123-456-7890'
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Project Manager',
            email: 'janesmith@example.com',
            phone: '234-567-8901'
        },
        // Add more employees as needed
    ]);

    // Function to handle employee deletion
    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <div className="employeedet">
            <h2>Employee Details</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <strong>Name:</strong> {employee.name} <br />
                        <strong>Role:</strong> {employee.role} <br />
                        <strong>Email:</strong> {employee.email} <br />
                        <strong>Phone:</strong> {employee.phone} <br />
                        {/* Add Edit and Delete buttons */}
                        <button className="edit-btn">Edit</button>
                        <button
                            className="delete-btn"
                            onClick={() => deleteEmployee(employee.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeDetails;
