const projectsArr = [];



//Array of common Badges / Highlights
const badges = [
  {
    badgeID: 0,
    badgeName: "Arctic Code Vault Contributor",
    badgeLogo: "./graphics/Arctic.svg",
  },
  {
    badgeID: 1,
    badgeName: "Developer Program Member",
    badgeLogo: "./graphics/Developer.svg",
  },
];

//Array of common technologies
const technologies_arr = [
  {
    techID: 0,
    name: "HTML",
    color: "#e34c26",
    url: "https://github.com/trending?l=HTML",
  },
  {
    techID: 1,
    name: "CSS",
    color: "#563d7c",
    url: "https://github.com/trending?l=CSS",
  },
  {
    techID: 2,
    name: "JavaScript",
    color: "#f1e05a",
    url: "https://github.com/trending?l=JavaScript",
  },
  {
    techID: 3,
    name: "Apollo Guidance Computer",
    color: "#0B3D91",
    url: "https://github.com/trending?l=Apollo-Guidance-Computer",
  },
  {
    techID: 4,
    name: "AppleScript",
    color: "#101F1F",
    url: "https://github.com/trending?l=AppleScript",
  },
  {
    techID: 5,
    name: "ASP.NET",
    color: "#9400ff",
    url: "https://github.com/trending?l=ASP.NET",
  },
  {
    techID: 6,
    name: "C",
    color: "#555555",
    url: "https://github.com/trending?l=C",
  },
  {
    techID: 7,
    name: "C++",
    color: "#f34b7d",
    url: "https://github.com/trending?l=C++",
  },
  {
    techID: 8,
    name: "C#",
    color: "#178600",
    url: "https://github.com/trending?l=Csharp",
  },
  {
    techID: 9,
    name: "Ruby",
    color: "#701516",
    url: "https://github.com/trending?l=Ruby",
  },
  {
    techID: 10,
    name: "Twig",
    color: "#c1d026",
    url: "https://github.com/trending?l=Twig",
  },
];

//Global empty array to store technology selection
const tempTechnologies = [];

//Array of organizations:
const organizations_arr = [
  {
    orgKey: 0,
    orgName: "NSS Evening Cohort 14",
    orgUrl: "https://github.com/nss-evening-cohort-14",
    orgLogo: "./graphics/Cohort14.jpg",
  },
  {
    orgKey: 1,
    orgName: "Autism Possible",
    orgUrl: "https://github.com/Autism-Possisble",
    orgLogo: "./graphics/AutismPossible.png",
  },
  {
    orgKey: 2,
    orgName: "Ubran Green Lab",
    orgUrl: "https://github.com/Urban-Green-Lab",
    orgLogo: "./graphics/UrbanGreenLab.png",
  },
  {
    orgKey: 3,
    orgName: "Nashville Software School",
    orgUrl: "https://github.com/nashville-software-school",
    orgLogo: "./graphics/NashvilleSoftwareSchool.png",
  },
];

//Array of developers
const developers_arr = [
  {
    keyId: 0,
    name: "Harry Potter",
    photo: "./images/HarryPotter.jpg",
    gitHubName: "MagicHarry",
    bio: "Creating magic at the keyboard.",
    longBioHeading: "developer, wizard warrior, loyal friend",
    longBioText: "I'm a developer that can create your application as if by magic. \
                  I enjoy working with javascript, css, and of course, wizardscript. \
                  At the Nashville Software school, I help inspire creations.",

    company: "",
    geoLocation: "Gryffindor at Hogwarts",
    website: "harrypottershop.com",
    twitterName: "@harryPotterFilm",
    badges: [1, 0],
    organizations: [0, 1, 2, 3],
    repositories: [
      {
        repoID: 0,
        pinned: false,
        repoName: "sorting-hat",
        repoDescription: "Mimics the Sorting Hat of J.K. Rowlings Harry Potter Series." +
          " Sorts names into the four houses of Hogwarts",
        technologies: [2, 1, 3],
      },
      {
        repoID: 1,
        pinned: true,
        repoName: "magic-wand",
        repoDescription: "Challenges the user to a series of questions to see if they are ready to handle a magic wand.",
        technologies: [1, 2, 3],
      },
      {
        repoID: 2,
        pinned: true,
        repoName: "broomstick",
        repoDescription: "Aids user in finding the ideal broomstick, with a list of best candidate sticks and their sellers",
        technologies: [4, 2, 6],
      },
      {
        repoID: 3,
        pinned: false,
        repoName: "spellbound",
        repoDescription: "Electronic spellbook. Helps user find the right spell in a jiffy. To be used with caution.",
        technologies: [6, 3, 9],
      },
      {
        repoID: 4,
        pinned: true,
        repoName: "tealeaves",
        repoDescription: "Online ordering of tea, with maps and hours of your favorite tea rooms.",
        technologies: [1, 2, 3],
      },
      {
        repoID: 5,
        pinned: true,
        repoName: "mentormatic",
        repoDescription: "App to help upcoming wizards find their best match for a mentor",
        technologies: [8, 3, 2],
      },
      {
        repoID: 6,
        pinned: true,
        repoName: "c yourself",
        repoDescription: "Tutorial app to aid in learning c.",
        technologies: [7, 1, 2],
      }
    ],  //end of Harry Potter's repositories
    projects: {}
  }
];

const repos_Arr = [];


// PACKAGES PAGE
// Packages array
const packages_arr = [
  {
    title: 'Docker',
    description: 'A software platform used for building applications based on containers -- small and lightweight execution environments.',
    id: 1,
  },
  {
    title: 'Apache Maven',
    description: 'A default package manager used for the Java programming lanuage and the Java runtime environment.',
    id: 2,
  },
  {
    title: 'NuGet',
    description: 'A free and open source package manager used for the Microsoft development platforms including .NET.',
    id: 3,
  },
  {
    title: 'RubyGems',
    description: 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
    id: 4,
  },
  {
    title: 'npm',
    description: 'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.',
    id: 5,
  },
  {
    title: 'Containers',
    description: 'A single place for your team to manage Docker images and decide who can see and access your images.',
    id: 6,
  }
];

// Package card builder
const buildPackages = (arr) => {
  let domString = " ";
  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="packagesCard" style="width: 15rem; background: none;">
    <div class="card-body">
      <h5 class="card-title">${arr[i].title}</h5>
      <p class="card-text">${arr[i].description}</p>
      <button type="button" class="btn btn-secondary">Learn More</button>
      <button type="button" class="btn btn-danger" id=${arr[i].id}>Delete</button>
    </div>
  </div>`;
  };

  printToDom("#gitHubPackages", domString);
};

const addPackage = (e) => {
  e.preventDefault();

  const title = document.querySelector('#packageTitle').value;
  const description = document.querySelector('#packageDescription').value;
  const packageId = packages_arr
    .map((package) => package.id)
    .sort((a, b) => a - b);

  const id = packageId.length ? packageId[packageId.length - 1] + 1 : 1;

  const obj = {
    title,
    description,
    id,
  };

  packages_arr.push(obj);
  buildPackages(packages_arr);

  document.querySelector('form').reset();
};

const deletePackage = (e) => {
  const targetType = e.target.type;
  const targetId = Number(e.target.id);

  if (targetType === 'button') {
    const packageIndex = packages_arr.findIndex(package => package.id === targetId);
    let deletedPackage = packages_arr.splice(packageIndex, 1);
  }
  buildPackages(packages_arr);
};

const packageSearch = (e) => {
  const searchString = e.target.value;
  const filteredPackages = packages_arr.filter(package => package.title.includes(searchString));
  buildPackages(filteredPackages);
};

// END PACKAGES PAGE

const printToDom = (ID, string) => {
  document.querySelector(ID).innerHTML = string;
};

const bioHeading = (userBio) => {
  let bioString = `  <img src="${userBio.photo}" alt="photo of ${userBio.name}">
      <h2>${userBio.name}</h2>
      <h3>${userBio.gitHubName}</h3>
      </p>${userBio.bio}</p>
      <ul class="bio-list">`;
  if (userBio.company != "") {
    bioString += `<li>${userBio.company}</li>`;
  }
  if (userBio.egoLocation != "") {
    bioString += `<li>${userBio.geoLocation}</li>`;
  }
  if (userBio.website != "") {
    bioString += `<li>${userBio.website}</li>`;
  }
  if (userBio.twitterName != "") {
    bioString += `<li>${userBio.twitterName}</li>`;
  }
  return bioString;
};

const bioBadges = (userBio) => {
  let bioString = `<h4>Highlights</h4>
     <ul class="highlights">`;

  for(let i = 0; i< userBio.badges.length; i++) {
    bioString += `<li>${badges[userBio.badges[i]].badgeName}</li>`;
  }
  return bioString;
};

const bioOrganizations = (userBio) => {
  let bioString = `<h4>Organizations</h4>
     <ul class="organizations">`;

  for(let i = 0; i < userBio.organizations.length; i++) {
  //  bioString += `<li>${organizations_arr[userBio.organizations[i]].orgName}</li>`;

    bioString += `<img src="${organizations_arr[userBio.organizations[i]].orgLogo}" class="orgLogo">`;
  }
  return bioString;
};

//Create side-bar bio section
const paintBio = (userBio) => {
  let bioString = bioHeading(userBio);
  bioString += `<hr />`;
  //Display Highlights / Badges
  if (userBio.badges.length) {
    bioString += bioBadges(userBio);
    bioString += `<hr />`;
  }
  if (userBio.organizations.length) {
    bioString += bioOrganizations(userBio);
  }
  printToDom("#gitHubProfile", bioString);
};

const customizePinsButton = () => {
  let pinString =
    `<button type="button" data-toggle="modal" data-target="#pinned-modal" 
      id="customize-pins" class="btn btn-success">Customize your pins</button>`;
  return pinString;
};

//Create about panel
const aboutDeveloper = (developer) => {
  let aboutString =
    `<div class"card bg-dark text-white about-card">
      <h4 class="card-title">About Me</h4>
      <div class="about-main">
      <h5>${developer.longBioHeading}</h5>
      <p class="card-text about-text">${developer.longBioText}</p>
    </div>`;
  printToDom("#about-developer", aboutString);
}



//modal dialog box from bootstrap components
const pinnedDialog = (developer) => {
  let pinnedString = 
      `<div class="modal" id="pinned-modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content" id="key_ID${developer.keyId}">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" id="x-close-pinned-dialog" >&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul class="check-box">`;
  //display list of repositories with checkboxes
  let i = 0;
  let checked = '';
  for (let item of developer.repositories) {
    if (item.pinned) {
      checked = 'checked';
    }
    pinnedString +=
      `<li>
                     <input type="checkbox" id="checkbox_${item.repoID}" name="checkbox_${item.repoName}"
                      value="true" ${checked}>
                    <label for="checkbox_${item.repoID}">${item.repoName}</label>
                  </li>`;
    checked = '';
  }
  pinnedString +=
    `</ul>
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="save-pinned-dialog">Save changes</button>
              <button type="button" class="btn btn-secondary" id="close-pinned-dialog" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;
  return pinnedString;
}



//See if user has pinned any repositories
const hasPinned = (developer) => {
  let pinned = false;
  for (let item of developer.repositories) {
    if (item.pinned) {
      pinned = true;
      break;
    }
  }
  return pinned;
};

//Create respository cards
const paintPinned = (developer) => {
  let pinned = "pinned-repose";
  let pinButton = customizePinsButton();
  let repoString = `<div class="repo-header">`;
  let has_pinned = hasPinned(developer);
  if (has_pinned) {
    repoString += `<h3>Pinned Repositories</h3>${pinButton}
                   </div>
                   <div class="pinned-repos">`;
  } else {
    repoString += `<h3>Repositories</h3>${pinButton}
                  </div>
                  <div class="unpinned-repos">`;
  }
  //created pinned dialog button
  repoString += `<div class="repo-dialog" id="pinned-dialog"></div>`;
  repoString += pinnedDialog(developer);
  let color = '';
  let techIndex = 0; //tells us the most prominent tech used in the repository
  let i = 0; //limit to six repositories
  for (let item of developer.repositories) {
    if (i < 6 && ((item.pinned && has_pinned) || !has_pinned)) {
      techIndex = item.technologies[0];
      color = technologies_arr[techIndex].color;
      repoString += `<div class="repo-card">
                          <div class="card-body">
                            <h3>${item.repoName}</h3>
                            <p class="repo-description">${item.repoDescription}</p>`;
      if (techIndex) {
        repoString += `<div class="tech-type" style="background-color: ${technologies_arr[techIndex].color}"></div>
                            <p class="tech-name">${technologies_arr[techIndex].name}</p>`;
      }
      repoString += `</div>
                       </div>`;
      i++; //limit to six repositories
    }
  }
  repoString += `</div>`;
  printToDom("#gitHubRepos", repoString);
};
// TODO // STRETCH Create event lsitener that is passed a cb function that prints the user's input STRETCH //
// 1. Retrieve the user input by setting the Search Repo to the id of our search bar //
const searchRepo = document.getElementById("searchBar")

const newRepo = () => {
  let createRepoString = "";
  createRepoString = `<form id="newForm">
  <div class="form-group">
    <label for="nameFormControlInput1" style="color: #f0f6fc;">Repository name</label>
    <input type="name"; class="col-md-4 rounded-3 border-1" id="createRepoName" value="" style="background: none; color: #f0f6fc;" required></div>
  <div class="form-group">
  <div id="repoNameHelp" class="form-text" style="color: #f0f6fc;">Great repository names are short and memorable. Need inspiration? How about reimagined-disco?
</div>
    <label for="descriptionText" style="color: #f0f6fc;">Description (optional)</label>
    <textarea class=" col-md-12 rounded-3 border-1" id="descriptionBox" rows="1" style="background: none;"></textarea>
  </div>
  <hr></hr>
  <button type="submit" id="repoSubmit" class="btn btn-success">Create repository</button>
</form>`;

  printToDom("#createNewRepo", createRepoString);
};

// This function prints our repos to the DOM //
const printRepo = (taco) => {
  let printRepoString = "";
  repos_Arr.forEach((item, i) => {
    printRepoString += `
  <div class="card" style= "width: 18rem; background: none;">
<div class="card-body background: none;">
  <h5 class="card-title" style="background: none;  color: #79c0ff;">${item.repoName}</h5>
  <p class="card-text" style="background: none; color: #b1bac4;">${item.repoDescription}</p>
</div>
</div> <hr>`;
  });
  printToDom("#printedRepos", printRepoString);
};

const createRepo = (e) => {
  e.preventDefault();
  let obj = {
    repoName: document.querySelector("#createRepoName").value,
    repoDescription: document.querySelector("#descriptionBox").value,
  };
  repos_Arr.push(obj);
  printRepo();
  // TODO: Call function to print cards to DOM and pass it the repos_Arr // *** DONE ***
  document.querySelector("#newForm").reset();
};

//updates which repositories are pinned using the checkbox form.
const savePinned = (e) => {
  //get id of form.
  let develId = e.srcElement.parentElement.parentElement.id;
  //console.log("develId = " + develId);
  let pinned_form = document.getElementById(develId);
  //extract developer keyId from id of form.
  let develKey = (develId.substr(6));
  let element = '';

  for(let item of developers_arr[develKey].repositories){
    //get the corresponding checkbox for each repository
    element = document.getElementById(`checkbox_${item.repoID}`);
    //console.log(element);
    if (element.checked) {
      item.pinned = true;
    } else {
      item.pinned = false;
    }
  }
  paintPinned(developers_arr[develKey]);
}

//Pinned dialog box event listener
const listenPinnedDialog = (e) => {
  switch (e.target.id) {
    case "customize-pins":
      document.querySelector('#pinned-modal').style.display = "block";
      break;
    case "x-close-pinned-dialog":
    case "close-pinned-dialog":
      document.querySelector('#pinned-modal').style.display = "none";
      break;
    case "save-pinned-dialog":
      savePinned(e);
      document.querySelector('#pinned-modal').style.display = "none";
      break;
  }
}

//fetch the technologies saved

const saveTechnologiesSelections = ()  => {
  let checkbox = ''; 
  for(item of technologies_arr) {
    checkbox = document.getElementById(`tech-checkbox_${item.techID}`);
    if(checkbox.checked) {
      tempTechnologies.push(item.techID);
    }
  }
  //return(temp_arr);
}

const clearCheckBoxes = () => {
  let checkbox = '';
  for (item of technologies_arr) {
    checkbox = document.getElementById(`tech-checkbox_${item.techID}`);
    checkbox.checked = false;
  }
}

const clearNewRepositoryForm = () => {
  clearCheckBoxes();
  document.getElementById("project-name").value = '';
  document.getElementById("repository-description").value = '';
}


//Event listener for new repository form
const listenNewRepository = (e) => {
  let list = document.querySelector('#tech-modal');
  switch (e.target.id) {
    //toggle tech list check boxes
    case "add-technologies":
      if (list.style.display === '') {
        list.style.display = "block";
      } else if (list.style.display === "block") {
        list.style.display = '';
      }
      break;
    case "x-close-tech-dialog":
    case "close-tech-dialog":
      list.style.display = '';
      break;
    case "save-tech-dialog" :
      saveTechnologiesSelections();
      list.style.display = '';
      break;

    default:
      break;
  }
}

//Create checkbox list
const newProjectTechList = () => {
  let techStr = `<ul class="check-box">`;
  //display technologies list
  let i = 0;
  for (let item of technologies_arr) {
    techStr +=
      `<li>
        <input type="checkbox" id="tech-checkbox_${item.techID}" name="tech-checkbox_${item.name}"
        value="true">
      <label for="tech-checkbox_${item.name}">${item.name}</label>`;
  }
  techStr += `</ul>`;
  return techStr;
}

//Create modal dialog with checkboxes listing technologies
const techDialog = () => {
  let techString =
    `<div class="modal" id="tech-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content" id="tech-modal-dialog">
          <div class="modal-header">
            <h5 class="modal-title">Select technologies in your repository</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" id="x-close-tech-dialog" >&times;</span>
            </button>
          </div>
          <div class="modal-body">`
  techString += newProjectTechList();

  techString +=
    `</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="save-tech-dialog">Save changes</button>
            <button type="button" class="btn btn-secondary" id="close-tech-dialog" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;

  return techString;
}

//Create new repository form
const makeNewProject = (developerId) => {
  let projStr = '';
  projStr =
    `<form id="newProject">
      <div class="container" style="width:100%">
      <h2>Create a new project</h2>
      <p>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule</p>
      <hr>
      <label for="project-name">Project board name</label>
      <input style="background: none; border: 1px solid #484f58" type="text" name="project-name" id="project-name" placeholder="Project board name">
      <div class="mb-2">
      <label for="description">Description</label>
      <textarea style="background: none;border: 1px solid #484f58; " id="project-description" name="project-description" rows="3" cols="50"></textarea>
      </div>
      <button type="button" id="project-submit" class="btn btn-success">Create project</button>
      </div>
    </form>`;

  printToDom("#new-project", projStr);
};

const newProject = (developerId) => {
  let projStr = '';
  projStr =
    `<div class="container">
       <h2>Create a new repository</h2>
       <label for="project-name">Repository name</label>
       <input type="text" style="background: none; border: 1px solid #c9d1d9;" name="project-name" id="project-name" placeholder="Repository name">
       <label for="description">Description</label>
       <textarea style="background: none; border: 1px solid #c9d1d9;" id="repository-description" name="repository-description" rows="3"></textarea>
       <div class="new-repo-buttons">
         <button type="button" data-toggle="modal" data-target="#technologies-modal" 
                 id="add-technologies" class="btn btn-success">Add Technologies</button>
         <div class="drop-down" id="tech-list-drop-down">`;
  projStr += techDialog();
  projStr +=
    `</div>
         <button type="button" id="repository-submit" class="btn btn-success">Create repository</button>
       </div>
     </div>`;

  printToDom("#new-pinned-repository", projStr);
};

//Retrieve Project info from the New Project Form
const createNewProject = (e) => {
  e.preventDefault();
  let obj = {
    projectName: document.querySelector("#project-name").value,
    projectDescription: document.querySelector("#project-description").value,
    projectId: e.target.id
  }
  projectsArr.push(obj);
  console.log(projectsArr);
  projectPainter(projectsArr);
  document.querySelector('#newProject').reset();

}

const projectPainter = (arr) => {
  let domString = ""
  for (let i = 0; i < arr.length; i++) {
    domString +=
      `<div class="card-body-flex-container" id=${arr[i].projectId}>
        <h4 class="card-text" id="projectName">${arr[i].projectName}</h4>
        <p class="card-text bg-gray" style="border-bottom: 1px solid #484f58; color: #8b949e;"
       id="projectDescription">${arr[i].projectDescription}</p>
      </div>`

    printToDom("#project-results", domString);

  }
}


const projectSearch = (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = projectsArr.filter((arr) => {
    return (
      arr.projectName.toLowerCase().includes(searchString)
    );
  });
  projectPainter(filteredCharacters);
  // e.preventDefault();
};

//DROPDOWN SORTING FUNCTION





//Add pinned repository
const repositorySubmit = (e) => {
  if (e.target.id == 'repository-submit') {
    let repoName = document.querySelector('#project-name').value;
    let repoDescription = document.querySelector('#repository-description').value;
    if (repoName && repoDescription) {
      let pinned = true;
      let technologies = [0]; //default technology

      if(tempTechnologies.length) {
        technologies = [...tempTechnologies]; //save technologies from modal dial
      }
      tempTechnologies.length = 0; //Clear the array

      let repoID = developers_arr[0].repositories.length; 
      const new_repository = {
        repoID,
        pinned,
        repoName,
        repoDescription,
        technologies
      }
      //add pinned repository to top of the list
      developers_arr[0].repositories.unshift(new_repository);
      //clear the form
      clearNewRepositoryForm();
      //paint repositories
      paintPinned(developers_arr[0]);
    }
  }
}
const projectSubmit = (e) => {
  if (e.target.id == "project-submit") {
    console.log(document.querySelector("#project-name").value);
    console.log(document.querySelector("#project-description").value);
  }
};

const buttonListenerProjects = () => {
  // document.getElementById('new-project').addEventListener('click', projectSubmit); FOR SOME REASON THIS AUTO PRINTED THE NEW PROJECT ON CLICKING INTO THAT DIV
  document.getElementById('project-submit').addEventListener('click', projectSubmit); //THIS WAITS UNTIL YOU HAVE TARGETED THE SPECIFIC BUTTON 'PROJECT-SUBMIT' TO RUN THE PROJECTSUBMIT FUNCTION
  document.getElementById('project-submit').addEventListener('click', createNewProject);
  document.getElementById("query").addEventListener('keyup', projectSearch);
}

const buttonListenerPackages = () => {
  document.querySelector('#addBtn').addEventListener('click', addPackage);
  document.querySelector('#gitHubPackages').addEventListener('click', deletePackage);
  document.querySelector('#searchBar').addEventListener('keyup', packageSearch);
};

const buttonListenerRepo = () => {
  document.querySelector("form").addEventListener("submit", createRepo);
};

const buttonListenerOverview = () => {
  document.getElementById('gitHubRepos').addEventListener('click', listenPinnedDialog);
  document.getElementById('new-pinned-repository').addEventListener('click', listenNewRepository);
  document.getElementById('new-pinned-repository').addEventListener('click', repositorySubmit);
}

const init = () => {
  paintBio(developers_arr[0]);
  const page = window.location.pathname;
  switch (page) {
    case "/index.html":
      aboutDeveloper(developers_arr[0]);
      paintPinned(developers_arr[0]);
      buttonListenerOverview();
      newProject();
      break;

    case "/repositories.html":
      newRepo(repos_Arr);
      printRepo(repos_Arr);
      buttonListenerRepo();
      break;

    case "/projects.html":
      makeNewProject(0);
      buttonListenerProjects();
      break;

    case "/packages.html":
      buildPackages(packages_arr);
      buttonListenerPackages();
      break;
  }

  // paintBio(developers_arr[0]);

}

init();
