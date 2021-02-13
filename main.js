console.log("Team No-Name");
const projectsArr = [];



//Array of common Badges / Highlights
const badges = [
  {
    badgeID: 0,
    badgeName: "Arctic Code Vault Contributor",
    badgeLogo: "./graphics/Arctic.svg"
  },
  {
    badgeID: 1,
    badgeName: "Developer Program Member",
    badgeLogo: "./graphics/Developer.svg"
  }
];

//Array of common technologies
const technologies = [

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
  }
];

//Array of developers
const developers_arr = [
  {
    keyId: 0,
    name: "Harry Potter",
    photo: "./images/HarryPotter.jpg",
    gitHubName: "MagicHarry",
    bio: "Creating magic at the keyboard.",
    company: "",
    geoLocation: "Gryffindor at Hogwarts",
    website: "harrypottershop.com",
    twitterName: "@harryPotterFilm",
    badges: [1, 0],
    organizations: [0, 1, 2, 3],
    repositories: [
      {
        repoID: 0,
        pinned: true,
        repoName: "sorting-hat",
        repoDescription: "Mimics the Sorting Hat of J.K. Rowlings Harry Potter Series." +
          " Sorts names into the four houses of Hogwarts",
        technologies: [1, 0, 2],
      },
      {
        repoID: 1,
        pinned: true,
        repoName: "magic-wand",
        repoDescription: "Challenges the user to a series of questions to see if they are ready to handle a magic wand.",
        technologies: [0, 1, 2],
      },
      {
        repoID: 2,
        pinned: true,
        repoName: "broomstick",
        repoDescription: "Aids user in finding the ideal broomstick, with a list of best candidate sticks and their sellers",
        technologies: [3, 1, 5],
      },
      {
        repoID: 3,
        pinned: true,
        repoName: "spellbound",
        repoDescription: "Electronic spellbook. Helps user find the right spell in a jiffy. To be used with caution.",
        technologies: [5, 2, 8],
      },
      {
        repoID: 4,
        pinned: true,
        repoName: "tealeaves",
        repoDescription: "Online ordering of tea, with maps and hours of your favorite tea rooms.",
        technologies: [0, 1, 2],
      },
      {
        repoID: 5,
        pinned: true,
        repoName: "mentormatic",
        repoDescription: "App to help upcoming wizards find their best match for a mentor",
        technologies: [7, 2, 3],
      },
      {
        repoID: 6,
        pinned: true,
        repoName: "c yourself",
        repoDescription: "Tutorial app to aid in learning c.",
        technologies: [6, 0, 1],
      }
    ],  //end of Harry Potter's repositories
    projects: {}
  }
];




const printToDom = (ID, string) => {
  document.querySelector(ID).innerHTML = string;
}

const bioHeading = (userBio) => {
  let bioString =
    `  <img src="${userBio.photo}" alt="photo of ${userBio.name}">
      <h2>${userBio.name}</h2>
      <h3>${userBio.gitHubName}</h3>
      </p>${userBio.bio}</p>
      <ul class="bio-list">`;
  if (userBio.company != '') {
    bioString += `<li>${userBio.company}</li>`;
  }
  if (userBio.egoLocation != '') {
    bioString += `<li>${userBio.geoLocation}</li>`;
  }
  if (userBio.website != '') {
    bioString += `<li>${userBio.website}</li>`;
  }
  if (userBio.twitterName != '') {
    bioString += `<li>${userBio.twitterName}</li>`;
  }
  return bioString;
}

const bioBadges = (userBio) => {
  let bioString =
    `<h4>Highlights</h4>
     <ul class="highlights">`;
  for (let i = 0; i < userBio.badges.length; i++) {
    console.log(badges[userBio.badges[i]].badgeName);
    bioString += `<li>${badges[userBio.badges[i]].badgeName}</li>`;
  }
  return bioString;
}

const bioOrganizations = (userBio) => {
  let bioString =
    `<h4>Organizations</h4>
     <ul class="organizations">`;
  for (let i = 0; i < userBio.organizations.length; i++) {
    console.log(organizations_arr[userBio.organizations[i]].orgName);
    //  bioString += `<li>${organizations_arr[userBio.organizations[i]].orgName}</li>`;
    bioString += `<img src="${organizations_arr[userBio.organizations[i]].orgLogo}" class="orgLogo">`;
  }
  return bioString;
}

//Create side-bar bio section
const paintBio = (userBio) => {
  let bioString = bioHeading(userBio);
  //Display Highlights / Badges
  if (userBio.badges.length) {
    bioString += bioBadges(userBio);
  }
  if (userBio.organizations.length) {
    bioString += bioOrganizations(userBio);
  }
  printToDom('#gitHubProfile', bioString);
}

const customizePinsButton = () => {
  let pinString =
    `<button type="button" id="customize-pins" class="btn btn-success">Customize your pins</button>`;
  return pinString;
}

//See is user has pinned any repositories
const hasPinned = (developer) => {
  let pinned = false;
  for (let item of developer.repositories) {
    if (item.pinned) {
      pinned = true;
      break;
    }
  }
  return pinned;
}


//Create respository cards
const paintPinned = (developer) => {
  let pinned = "pinned-repos";
  let pinButton = customizePinsButton();
  let repoString = '';
  if (hasPinned(developer)) {
    repoString = `<h3>Pinned</h3>${pinButton}
                       <div class="pinned-repos">`;
  } else {
    repoString = `<h3>Repositories</h3>${pinButton}
                    <div class="unpinned-repos">`;
  }
  let techIndex = 0; //tells us the most prominent tech used in the repository
  let i = 0; //limit to six repositories
  for (let item of developer.repositories) {
    if (i < 6) {
      techIndex = item.technologies[0];
      //console.log(technologies[techIndex].name);
      //console.log(technologies[techIndex].color);
      repoString += `<div class="repo-card">
                          <div class="card-body">
                            <h3>${item.repoName}</h3>
                            <p>${item.repoDescription}</p>
                            <div class="tech-type" style="background-color: ${technologies[techIndex].color}"></div>
                            <p class="tech-name">${technologies[techIndex].name}</p>
                          </div>
                      </div>`;
      i++; //limit to six repositories
    }
  }
  repoString += `</div>`;
  printToDom('#gitHubRepos', repoString);
}

const newProject = (developerId) => {
  let projStr = '';
  projStr =
    `<form id="newProject">
      <div class="container">
     <p>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule</p>
      <h2>Create a new project</h2>
      <label for="project-name">Project board name</label>
      <input style="background: none; border: 1px solid #c9d1d9;" type="text" name="project-name" id="project-name" placeholder="Project board name">
      <label for="description">Description</label>
      <textarea style="background: none;border: 1px solid #c9d1d9; " id="project-description" name="project-description" rows="3" cols="50"></textarea>
      <button type="button" id="project-submit" class="btn btn-success">Create project</button>
      </div>
    </form>`;

  printToDom("#new-project", projStr);
}

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
        <p class="card-text" id="projectName">${arr[i].projectName}</p>
        <p class="card-text bg-gray border-bottom" id="projectDescription">${arr[i].projectDescription}</p>
      </div>`

    printToDom("#project-results", domString);

  }
}


const projectSubmit = (e) => {
  if (e.target.id === 'button') {
    console.log(document.querySelector('#project-name').value);
    console.log(document.querySelector('#project-description').value);
  }
  //  projectPainter (projectsArray);
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




const buttonListener = () => {
  // document.getElementById('new-project').addEventListener('click', projectSubmit); FOR SOME REASON THIS AUTO PRINTED THE NEW PROJECT ON CLICKING INTO THAT DIV
  document.getElementById('project-submit').addEventListener('click', projectSubmit); //THIS WAITS UNTIL YOU HAVE TARGETED THE SPECIFIC BUTTON 'PROJECT-SUBMIT' TO RUN THE PROJECTSUBMIT FUNCTION
  document.getElementById('project-submit').addEventListener('click', createNewProject);
  document.getElementById("query").addEventListener('keyup', projectSearch);
}




const init = () => {
  let page = (window.location.pathname);
  switch (page) {
    case "/index.html":
      paintPinned(developers_arr[0]);
      newProject(0);
      break;

    case "/repositories.html":

      break;

    case "/projects.html":
      newProject(0);

      break;

    case "/packages.html":
      break;
  };
  paintBio(developers_arr[0]);
  buttonListener();
}

init();
