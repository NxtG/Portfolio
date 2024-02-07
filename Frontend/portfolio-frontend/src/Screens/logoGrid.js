import React from 'react';

const LogoGrid = () => {
  const logos = [
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
    { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' },
    { name: 'Ruby on Rails', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png' },
    { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
    // Add more logos as needed
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <img src={logo.image} alt={logo.name} className="h-16 w-16 object-cover" />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;