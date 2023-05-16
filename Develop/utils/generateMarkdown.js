// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'BSD') {
    return '![BSD License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else if (license === 'Apache 2.0') {
    return '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT/';
  } else if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause/';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    return `This project is licensed under the ${license} license.\n\n${badge}\n\nFor more information, please visit [${license}](${link}).`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license === 'None' ? '' : data.license;
  const licenseSection = renderLicenseSection(license);
  return `# ${data.title}
  ## Description

  ${data.description}

  ## Table of Contents 

  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## Credits
  
  ${data.contribute}
  
  ## License
 
  ${licenseSection}
 
  ## Test
  
  ${data.test}

  ## Questions

  ${data.github}

  ${"https://github.com/" + data.github}

  ${data.email}

  ${data.questions}

`;
}

module.exports = generateMarkdown;
