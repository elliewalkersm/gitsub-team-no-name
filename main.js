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
  }
];



//Array of developers
const developers_arr = [
  {
    keyId : 0, 
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
    badges: [ 1, 0 ],
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
    projects: { }
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
    `<h4>Highlights</h4>
     <ul class="highlights">`;
  for(let i = 0; i< userBio.badges.length; i++) {
    //console.log(badges[userBio.badges[i]].badgeName);
    bioString += `<li>${badges[userBio.badges[i]].badgeName}</li>`;
  }
  return bioString;
}

const bioOrganizations = (userBio) => {
  let bioString =
    `<h4>Organizations</h4>
     <ul class="organizations">`;
  for(let i = 0; i < userBio.organizations.length; i++) {
    //console.log(organizations_arr[userBio.organizations[i]].orgName);
  //  bioString += `<li>${organizations_arr[userBio.organizations[i]].orgName}</li>`;
    bioString += `<img src="${organizations_arr[userBio.organizations[i]].orgLogo}" class="orgLogo">`;
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
  if(userBio.organizations.length) {
    bioString += bioOrganizations(userBio);
  }
  printToDom('#gitHubProfile', bioString);
}

const customizePinsButton = () => {
  let pinString = 
    `<button type="button" data-toggle="modal" data-target="#pinned-modal" 
      id="customize-pins" class="btn btn-success">Customize your pins</button>`;
  return pinString;
}

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
  //console.log(developer.keyId);
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
              for(let item of developer.repositories) {
                if(item.pinned) {
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
  for(let item of developer.repositories) {
    if(item.pinned){
      pinned = true;
      break;
    }
  }
  return pinned;
}


//Create respository cards
const paintPinned = (developer) => {
  let pinned = "pinned-repose";
  let pinButton = customizePinsButton();
  let repoString =  `<div class="repo-header">`;
  let has_pinned = hasPinned(developer);
  if (has_pinned){
    repoString +=  `<h3>Pinned Repositories</h3>${pinButton}
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
  for(let item of developer.repositories) {
    if(i < 6 && ((item.pinned && has_pinned) || !has_pinned)) {
      techIndex = item.technologies[0];
      //console.log("tech index: " + techIndex);
      color = technologies_arr[techIndex].color;
      //console.log(color);
      //console.log(technologies[techIndex].name);
      //console.log(technologies[techIndex].color);
        repoString += `<div class="repo-card">
                          <div class="card-body">
                            <h3>${item.repoName}</h3>
                            <p class="repo-description">${item.repoDescription}</p>`;
        if(techIndex) {
          repoString +=   `<div class="tech-type" style="background-color: ${technologies_arr[techIndex].color}"></div>
                            <p class="tech-name">${technologies_arr[techIndex].name}</p>`;
        }
          repoString += `</div>
                       </div>`;
      i++; //limit to six repositories
    } 
  }
  repoString += `</div>`;
  printToDom('#gitHubRepos', repoString);
}

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
    //console.log(item.repoID);
    //get the corresponding checkbox for each repository
    element = document.getElementById(`checkbox_${item.repoID}`);
    //console.log(element);
    if(element.checked) {
      item.pinned = true;
    } else {
      item.pinned = false;
    }
    //console.log(item);
  }
  paintPinned(developers_arr[develKey]);
}

//Pinned dialog box event listener
const listenPinnedDialog = (e) => {
  switch(e.target.id) {
    case "customize-pins" :
      document.querySelector('#pinned-modal').style.display = "block";
      break;
    case "x-close-pinned-dialog" :
    case "close-pinned-dialog" :
      document.querySelector('#pinned-modal').style.display = "none";
      break;
    case "save-pinned-dialog" :
      savePinned(e);
      document.querySelector('#pinned-modal').style.display = "none";
      break;
  }
}

//fetch the technologies saved
const saveTechnologiesSelections = ()  => {
//  console.log(e.srcElement.parentElement.parentElement.id);
  let checkbox = ''; 
  for(item of technologies_arr) {
    checkbox = document.getElementById(`tech-checkbox_${item.techID}`);
    //console.log(item.techID);
    if(checkbox.checked) {
      tempTechnologies.push(item.techID);
    }
  }
  //console.log(tempTechnologies);
  //return(temp_arr);
}

const clearCheckBoxes = ()  =>{
  let checkbox = ''; 
  for(item of technologies_arr) {
    checkbox = document.getElementById(`tech-checkbox_${item.techID}`);
    checkbox.checked = false;
  }
}

const clearNewRepositoryForm = () => {
  clearCheckBoxes();
  document.getElementById("project-name").value = '';
  document.getElementById("project-description").value = '';
}


//Event listener for new repository form
const listenNewRepository = (e) => {
  //console.log(e.target.id);
  let list = document.querySelector('#tech-modal');
  switch(e.target.id) {
    //toggle tech list check boxes
    case "add-technologies" :
      if(list.style.display === '') {
        list.style.display = "block";
      } else if(list.style.display === "block") {
        list.style.display = '';
      } 
      break;
    case "x-close-tech-dialog" :
    case "close-tech-dialog"   :
      list.style.display = '';
      break;
    case "save-tech-dialog" :
      //console.log("save-tech-dialog hit");
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
  for(let item of technologies_arr) {
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
const newProject = (developerId) => {
  let projStr = '';
  projStr = 
    `<div class="container">
       <h2>Create a new repository</h2>
       <label for="project-name">Repository name</label>
       <input type="text" name="project-name" id="project-name" placeholder="Repository name">
       <label for="description">Description</label>
       <textarea id="project-description" name="project-description" rows="3"></textarea>
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
}

//Add pinned repository
const repositorySubmit = (e) => {
  if(e.target.id == 'repository-submit') {
    let repoName = document.querySelector('#project-name').value;
    let repoDescription = document.querySelector('#project-description').value;
    if(repoName && repoDescription) {
      let pinned = true;
      let technologies = [0]; //default technology
      if(tempTechnologies.length) {
        //console.log("has technologies");
        //console.log(tempTechnologies);
        technologies = [...tempTechnologies]; //save technologies from modal dial
      } 
      tempTechnologies.length = 0; //Clear the array
      let repoID = developers_arr[0].repositories.length; 
      //console.log(repoID);
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

const buttonListener = () => {
  document.getElementById('gitHubRepos').addEventListener('click', listenPinnedDialog);
  document.getElementById('new-pinned-repository').addEventListener('click', listenNewRepository);
  document.getElementById('new-pinned-repository').addEventListener('click', repositorySubmit);
}
   

const init = () => {
  let page = window.location.pathname;
  paintBio(developers_arr[0]);
  aboutDeveloper(developers_arr[0]);
  paintPinned(developers_arr[0]);
  newProject(0);
  buttonListener();
}

init(); 
