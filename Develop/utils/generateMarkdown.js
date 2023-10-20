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
  } else {
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
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// call badge
//call link
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License used: ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
