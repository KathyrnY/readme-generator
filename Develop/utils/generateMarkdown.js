// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/bower/l/MI?style=plastic)';
  } else if (license ==='BSD') {
    return '![BSD License](https://img.shields.io/pypi/l/Lice?style=plastic)';
  } else if (license === 'Apache 2.0') {
    return '![Apache License](https://img.shields.io/hexpm/l/apa?style=plastic)';
  } else {
  return '';
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/license/mit/';
  } else if (license ==='BSD') {
    return 'https://opensource.org/license/bsd-3-clause/';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/license/apache-2-0/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  if (link) {
    return `## License\n\nThis is covered under [${license}](${link}) license.\n\n`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
 
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
 
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
