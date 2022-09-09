// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg`
  } else {
    return ('')
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else if (license === "MPL2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license === "EPL 1.0") {
    return "https://opensource.org/licenses/EPL-1.0";
  } else {
    return ('')
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  <a name="introduction"></a>
  ## Installation
  ${data.installation}

  <a name="usage"></a>
  ## Usage
  ${data.usage}

  <a name="license"></a>
  ## License
  This application is licensed under ${data.license}. For more information check out ${renderLicenseLink(data.license)};

  <a name="contributing"></a>
  ## Contributing
  ${data.contributing}

  <a name="tests"></a>
  ## Tests
  ${data.tests}

  <a name="questions"></a>
  ## Questions
  To view this project as well as any of my other work please visit my Github profile at ${data.github}.
  If you have any questions please feel free to email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
