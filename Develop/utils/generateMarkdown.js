function generateMarkdown(data) {
  return `
  ![npm bundle size](https://img.shields.io/badge/license-${data.License}-blue.svg)
  # ${data.Title} 
  
  ## description: 
  ${data.Description}  
  ## Installation: 
  ${data.installation} 
  ## Usage: 
  ${data.usage} 
  `;
}

module.exports = generateMarkdown;
