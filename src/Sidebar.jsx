import React from 'react';
import { App, Menu } from 'antd'; // Import Menu from Ant Design
import { Link,Navigate, useNavigate } from 'react-router-dom'; // Import Link for routing
import { DashboardOutlined, UserOutlined, BookOutlined, PayCircleOutlined, CheckOutlined, ScheduleOutlined } from '@ant-design/icons';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import LeaveRequest from './LeaveRequest';
// import PayrollDetails from './PayrollDetails';
// import EmployeeDetails from './EmployeeDetails';
// import ProjectDetails from './ProjectDetails';
// import LeaveApproval from './LeaveApproval';


function Sidebar() {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };
  return (
    <div >
    <Menu onClick={handleMenuClick} mode="inline" style={{ display: "flex", flexDirection: "row" }}  >
      <Menu.Item key="/dash-board" icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="/employee-details" icon={<UserOutlined />}>
        Employee Details
      </Menu.Item>
      <Menu.Item key="/project-details" icon={<BookOutlined />}>
        Project Details
      </Menu.Item>
      <Menu.Item key="/generating-payroll" icon={<PayCircleOutlined />}>
        Generating Payroll
      </Menu.Item>
      <Menu.Item key="/leave-approval" icon={<CheckOutlined />}>
        Leave Approval
      </Menu.Item>
      <Menu.Item key="/leave-request" icon={<ScheduleOutlined />}>
        Leave Request
      </Menu.Item>
    </Menu>
    <div><App></App></div>

  </div>
  
);
}
export default Sidebar;
  // };
    // <div style={{display:"flex",flexDirection:"row"}}>
    //   <Menu onClick={({key})=>{Navigate(key)}}
    //   items={[{label:"Dashboard",key:"/dash-board",icon:<DashboardOutlined/>},
    //   {label:"Employee Details",key:"/employee-details",icon:<UserOutlined/>},
    //   {label:"Project Details",key:"/project-details",icon:<BookOutlined />},
    //   {label:"Generating Payroll",key:"/generating-payroll",icon:<PayCircleOutlined />},
    //   {label:"Leave Approval",key:"/leave-approval",icon:<CheckOutlined />},
    //   {label:"Leave Request",key:"/leave-request",icon:<ScheduleOutlined />}
    // ]} 
    //   >

        {/* <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dash-board">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/employee-details">Employee Details</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BookOutlined />}>
          <Link to="/project-details">Project Details</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PayCircleOutlined />}>
          <Link to="/generating-payroll">Generating Payroll</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<CheckOutlined />}>
          <Link to="/leave-approval">Leave Approval</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<ScheduleOutlined />}>
          <Link to="/leave-request">Apply Leave</Link>
        </Menu.Item> */}
        
//       // </Menu>
//       <BrowserRouter>

// <Routes>
//   <Route path="/dash-board" element={<Dashboard />} />
//   <Route path="/employee-details" element={<EmployeeDetails />} />
//   <Route path="/project-details" element={<ProjectDetails />} />
//   <Route path="/generating-payroll" element={<PayrollDetails />} />
//   <Route path="/leave-approval" element={<LeaveApproval />} />
//   <Route path="/leave-request" element={<LeaveRequest />} />
// </Routes>
// </BrowserRouter>
//     </div>
//   );
// }

//old
// import React from 'react';
// import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { HomeOutlined, UserOutlined, BookOutlined, PayCircleOutlined, CheckOutlined, ScheduleOutlined } from '@ant-design/icons';



// function Sidebar() {
//   return (
//     <Drawer variant="permanent" anchor="left">
//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/dashboard">
//             <ListItemIcon>
//               <HomeOutlined />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/employee-details">
//             <ListItemIcon>
//               <UserOutlined />
//             </ListItemIcon>
//             <ListItemText primary="Employee Details" />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/project-details">
//             <ListItemIcon>
//               <BookOutlined />
//             </ListItemIcon>
//             <ListItemText primary="Project Details" />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/generating-payroll">
//             <ListItemIcon>
//               <PayCircleOutlined />
//             </ListItemIcon>
//             <ListItemText primary="Generating Payroll" />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/leave-approval">
//             <ListItemIcon>
//               <CheckOutlined />
//             </ListItemIcon>
//             <ListItemText primary="Leave Approval" />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/leave-request">
//             <ListItemIcon>
//               <ScheduleOutlined />
//             </ListItemIcon>
//             <ListItemText primary="Apply Leave" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// }

// export default Sidebar;
