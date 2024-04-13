import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './LeaveRequest.css';



// import { DemoItem, DateCalendar } from 'some-library'; // Adjust import path accordingly



function LeaveRequest() {
  // Leave request logic goes here
  const [value, setValue] = useState(null);
  return (
    <div className="leaverq">
        <h2>Leave Requests</h2>
        {/* Leave request UI goes here */}
        <TextField fullWidth label="Leave Reason" id="fullWidth" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label="From" >
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoItem>
            <DemoItem label="To">
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
            </DemoItem>
        </LocalizationProvider>
    </div>
);
}

export default LeaveRequest;


//   return (
//     <div>
//       <h2>Leave Requests</h2>
//       {/* Leave request UI goes here */}
//       <TextField fullWidth label="Leave Reason" id="fullWidth" />
//       <DemoItem label="Controlled calendar">
//   <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
// </DemoItem>
//     </div>
//   );
