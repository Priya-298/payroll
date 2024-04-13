// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Sidebar from './Sidebar';
// import LeaveRequest from './LeaveRequest';
// import PayrollDetails from './PayrollDetails';
// import EmployeeDetails from './EmployeeDetails';
// import ProjectDetails from './ProjectDetails';
// import LeaveApproval from './LeaveApproval';
// import Dashboard from './Dashboard'; // Import the Dashboard component
// function App() {
//   return (
//     // <Sidebar/>
//    <BrowserRouter> <Sidebar />

//     <Routes>
//       <Route path="/dash-board" element={<Dashboard />} />
//       <Route path="/employee-details" element={<EmployeeDetails />} />
//       <Route path="/project-details" element={<ProjectDetails />} />
//       <Route path="/generating-payroll" element={<PayrollDetails />} />
//       <Route path="/leave-approval" element={<LeaveApproval />} />
//       <Route path="/leave-request" element={<LeaveRequest />} />
//     </Routes>
//   </BrowserRouter>
//    );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import LeaveRequest from './LeaveRequest';
import PayrollDetails from './PayrollDetails';
import EmployeeDetails from './EmployeeDetails';
import ProjectDetails from './ProjectDetails';
import LeaveApproval from './LeaveApproval';
import Dashboard from './Dashboard';
import Login from './Login'; // Import the Login component
import Signup from './Signup'; // Import the Signup component

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Route for Login */}
                <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
              
                 <Route path="/app" element={<Sidebar />}> {/* Use a nested route for your app's main content */}
                     <Route path="dash-board" element={<Dashboard />} />
                    <Route path="employee-details" element={<EmployeeDetails />} />
                     <Route path="project-details" element={<ProjectDetails />} />
                     <Route path="generating-payroll" element={<PayrollDetails />} />
                    <Route path="leave-approval" element={<LeaveApproval />} />
                    <Route path="leave-request" element={<LeaveRequest />} />
                </Route>
                </Routes>
            
        </BrowserRouter>
    );
}

export default App;
