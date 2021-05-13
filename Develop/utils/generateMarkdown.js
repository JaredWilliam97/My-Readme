// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  ///if/else statement
  return license;
}
## table of Contents 

function rendertoc(data) {
  if (!data.toc) {
    return "";
}
}

function renderInstallation(install) {
  for (let [key, value]  of object.entries(install)) {
    console.log(`${key}: ${value}`);

  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description

  ${data.description}
  
${renderToc(data)}
${renderInstallation(data)}
${renderLicenseSection(data.license)}
`;
}

module.exports =generateMarkdown;


text = '

  ## Table of Contents





  *[Installation](#installation)

  ${renderLicenseLink(data.license)}



`;
}

module.exports = generateMarkdown;
