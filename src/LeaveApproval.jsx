import React, { useState } from 'react';
import './LeaveApproval.css'

function LeaveApproval() {
  // State to manage the leave requests
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, name: 'John Doe', startDate: '2024-04-10', endDate: '2024-04-12', status: 'Pending' },
    { id: 2, name: 'Jane Smith', startDate: '2024-04-15', endDate: '2024-04-17', status: 'Pending' }
    // Add more leave requests as needed
  ]);

  // Function to handle approval of leave request
  const approveLeave = (id) => {
    setLeaveRequests(leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'Approved' } : request
    ));
  };
   // Function to handle rejection of leave request
   const rejectLeave = (id) => {
    setLeaveRequests(leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="leaveApproval">
      <h2>Leave Approval</h2>
      <ul>
        {leaveRequests.map(request => (
          <li key={request.id}>
            <div>
              <strong>Name:</strong> {request.name}<br />
              <strong>Start Date:</strong> {request.startDate}<br />
              <strong>End Date:</strong> {request.endDate}<br />
              <strong>Status:</strong> {request.status}<br />
              {request.status === 'Pending' && (
                <div>
                  <button className="approve" onClick={() => approveLeave(request.id)}>Approve</button>
                  <button className="reject" onClick={() => rejectLeave(request.id)}>Reject</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveApproval;