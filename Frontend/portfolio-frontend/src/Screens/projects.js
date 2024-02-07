import React from 'react';

const projectList = [
  { id: 1, imgSrc: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+1' },
  { id: 2, imgSrc: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+2' },
  { id: 3, imgSrc: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+3' },
  { id: 4, imgSrc: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+4' },
  { id: 5, imgSrc: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+5' },
  { id: 6, imgSrc: 'https://via.placeholder.com/150/000000/FFFFFF?text=Project+6' }
];

const Projects = () => (
  <ul className="grid grid-cols-3 gap-4">
    {projectList.map((project, index) => (
      <li key={project.id} className="bg-gray-200 p-2 rounded">
        <img src={project.imgSrc} alt={`Project ${project.id}`} className="w-full h-auto rounded" />
      </li>
    ))}
  </ul>
);

export default Projects;