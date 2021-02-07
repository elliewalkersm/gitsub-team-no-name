console.log("Team No-Name");

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

const technologies = [

    { 
      techID: 0,
      name: "CSS",
      color: "#563d7c",
      url: "https://github.com/trending?l=CSS"
    },
    { 
      techID: 1,
      name: "HTML",
      color: "#e34c26",
      url: "https://github.com/trending?l=HTML"
    },
    { 
      techID: 2,
      name: "JavaScript",
      color: "#f1e05a",
      url: "https://github.com/trending?l=JavaScript"
    },
];

//Array of developers
const developers_arr = [
  {
    keyId : 0, 
    name: "Harry Potter",
    photo: "./images/HarryPotter.jpg",
    gitHubName: "MagicHarry",
    bio: "Creating magic at the keyboard.",
    company: "",
    geoLocation: "Gryffindor at Hogwarts",
    website: "harrypottershop.com",
    twitterName: "@harryPotterFilm",
    badges: [ 1, 0 ],
    repositories: [
      {
        repoID: 0,
        repoName: "sorting-hat",
        repoDescription: "Mimics the Sorting Hat of J.K. Rowlings Harry Potter Series." +
                         " Sorts names into the four houses of Hogwarts",
        technologies: [1, 0, 2], 
      },
      {
        repoID: 1,
        repoName: "magic-wand",
        repoDescription: "Challenges the user to a series of questions to see if they are ready to handle a magic wand.",
        technologies: [0, 1, 2],
      } 
    ]  //end of Harry Potter's repositories
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
      <ul class="bio-list">`;
  if(userBio.company != '') {
    bioString += `<li>${userBio.company}</li>`;
  }
  if(userBio.egoLocation != '') {
    bioString += `<li>${userBio.geoLocation}</li>`;
  }
  if(userBio.website != '') {
    bioString += `<li>${userBio.website}</li>`;
  }
  if(userBio.twitterName!= '') {
    bioString += `<li>${userBio.twitterName}</li>`;
  }
  return bioString;
}

const bioBadges = (userBio) => {
  let bioString = 
    `<h3>Highlights</h3>
     <ul class="highlights">`;
  for(let i = 0; i< userBio.badges.length; i++) {
    console.log(badges[userBio.badges[i]].badgeName);
    bioString += `<li>${badges[userBio.badges[i]].badgeName}</li>`;
  }
  return bioString;
}

//Create side-bar bio section
const paintBio = (userBio) => {
  let bioString = bioHeading(userBio); 
  //Display Highlights / Badges
  if(userBio.badges.length) {
    bioString += bioBadges(userBio);
  }
  printToDom('#gitHubProfile', bioString);
}

const paintPinned = (developer) => {
  let repoString =  `<h3>Pinned</h3>
                     <div class="pinned-repos">`;
  let techIndex = 0;
  for(let item of developer.repositories) {
    techIndex = item.technologies[0];
    console.log(technologies[techIndex].name);
    console.log(technologies[techIndex].color);
      repoString += `<div class="repo-card">
                        <div class="card-body">
                          <h3>${item.repoName}</h3>
                          <p>${item.repoDescription}</p>
                          <div class="tech-type" style="background-color: ${technologies[techIndex].color}"></div>
                          <p class="tech-name">${technologies[techIndex].name}</p>
                        </div>
                    </div>`;
  }
  repoString += `</div>`;
  printToDom('#gitHubRepos', repoString);
}

const newProject = (developerId) => {
  let projStr = '';
  projStr = 
    `<div class="container">
     <p>Coordinate, track, and update your work in one place, so projects stay transparent and on schedule</p>
      <h2>Create a new project</h2>
      <label for="project-name">Project board name</label>
      <input type="text" name="project-name" id="project-name" placeholder="Project board name">
      <label for="description">Description</label>
      <textarea id="project-description" name="project-description" rows="3" cols="50"></textarea>
      <button type="button" id="project-submit" class="btn btn-success">Create project</button>
    </div>`;

  printToDom("#new-project", projStr);
}

const projectSubmit = (e) => {
  console.log(e);
  if(e.target.id == 'project-submit') {
    console.log(document.querySelector('#project-name').value);
    console.log(document.querySelector('#project-description').value);
  }
}

const buttonListener = () => {
  document.getElementById('new-project').addEventListener('click', projectSubmit);
}
   

const init = () => {
  paintBio(developers_arr[0]);
  paintPinned(developers_arr[0]);
  newProject(0);
  buttonListener();
}

init(); 
