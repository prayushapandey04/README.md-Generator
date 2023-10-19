// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// return URL string to license badge link (it is somewhere in github
//documentation)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
