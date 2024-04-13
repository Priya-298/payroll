import React from 'react';
import './PayrollDetails.css';

function PayrollDetails() {
  // Assuming you have some payroll data to display
  const payrollData = [
    { id: 1, name: 'John Doe', salary: 5000 },
    { id: 2, name: 'Jane Smith', salary: 6000 },
    // Add more payroll data as needed
  ];

  return (
    <div className="payroll">
      <h2>Payroll Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PayrollDetails;