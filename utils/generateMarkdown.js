// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (data.license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'Creative Commons 0') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else {
    return null
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return 'https://opensource.org/license/mit/'
  } else if (data.license === 'Apache 2.0') {
    return 'https://opensource.org/license/mit/'
  }  else if (data.license === 'Creatice Commons 0') {
    return 'https://creativecommons.org/public-domain/cc0/'
  } else {
    return 'no license selected'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title
  ${data.title}
  ${renderLicenseBadge(data)}
  
  # Description
  ${data.description}
      
  # Installation
  ${data.installation}
  
  # License 
  ${data.license}
  ${renderLicenseLink(data)}
  `;
};

module.exports = renderLicenseBadge;
module.exports = renderLicenseLink; 
module.exports = generateMarkdown;
