// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Creative Commons') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'Boost'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'IBM') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Creative Commons') {
    return 'https://creativecommons.org/publicdomain/zero/1.0/deed.en';
  } else if (license === 'Boost') {
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } else if (license === "Apache 2.0") {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'MIT') {
    return 'https://opensource.org/license/mit/';
  } else if (license === 'IBM') {
    return 'https://www.ibm.com/about/software-licensing/us-en';
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (licenseBadge && licenseLink) {
    return `## License
    This project is licensed under the [${license}](${link}) license. ${badge}`;
  } else if (license === 'None') {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

-[Usage](#usage)
-[Installation](#installation)
-[Contributions](#contributions)
-[Tests](#tests)
-[License](#license)
-[Questions](#questions)

## Usage

${data.usage}

## Installation

${data.installation}

## Contributions

${data.contributions}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about this project or need further assitance, feel free to contact me:

-Github: [${data.github}](https://github.com/${data.github})
-Email: ${data.email}

`;
}

module.exports = generateMarkdown;
