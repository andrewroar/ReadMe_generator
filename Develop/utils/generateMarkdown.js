function generateMarkdown(data) {
  return `
  ![npm bundle size](https://img.shields.io/badge/license-${data.license}-blue.svg)
  # ${data.title} 
  
  ## Description: 
  ${data.description} 

  ## Installation: 
  ${data.installation} 

  ## Contribution:
  ${data.contribution} 
  
  ## Test:
  ${data.test} 

  ## Usage: 
  ${data.usage} 

  ## Question:

  ${data.question} 

  ![profile](${data.profile})

  ${data.email} 
  `;
}

module.exports = generateMarkdown;
