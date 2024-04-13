import React, { useState } from 'react';
import './ProjectDetails.css';


function ProjectDetails() {
  // Example project data (you may replace this with real data from an API)
  const projects = [
    {
      id: 1,
      name: 'Project A',
      description: 'This is the first project.',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      status: 'Ongoing',
      teamMembers: ['John Doe', 'Jane Smith', 'Alice Johnson'],
    },
    {
      id: 2,
      name: 'Project B',
      description: 'This is the second project.',
      startDate: '2023-11-01',
      endDate: '2024-02-15',
      status: 'Completed',
      teamMembers: ['Michael Brown', 'Emily Davis'],
    },
    // Add more projects as needed
  ];

  return (
    <div className="project">
      <h2>Project Details</h2>
      <div>
        <h3>Project List</h3>
        {projects.map((project) => (
          <div key={project.id}>
            <h4>{project.name}</h4>
            <p>Description: {project.description}</p>
            <p>Start Date: {project.startDate}</p>
            <p>End Date: {project.endDate}</p>
            <p>Status: {project.status}</p>
            <p>Team Members: {project.teamMembers.join(', ')}</p>
            {/* Add action buttons here, e.g., Edit and Delete */}
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ProjectDetails;
