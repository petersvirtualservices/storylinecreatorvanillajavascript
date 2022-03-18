var newAnalysis = document.getElementById('newAnalysis');
var newConnection = document.getElementById('newConnection');
var nextVideo = document.getElementById('nextVideo');
//var vidPlayer = document.getElementById("videoPlayer");
var connectionIDPlace = document.getElementById("connectionID");
var currentTimePlace = document.getElementById("currentTimeHereNow");
var uploadButton = document.getElementById("uploadFile");
var getEntries = document.getElementById("getEntries");
var jsonRead = document.getElementById("jsonRead");
var videoURL = document.getElementById("videoURL");
//var submit = document.getElementById("submit");
var start = document.getElementById('newVideo');
var myVar, counter;
var username = "CharleneP";
var actionJSON = [];
var emailTheFollowing = document.getElementById('emailTheFollowing');
buttons();

//start.addEventListener("click", function (e) {

//})


start.addEventListener("click", function (e) {
  e.preventDefault();
  //var videoTest = JSON.parse(this.responseText);
  console.log(videoURL.value);
  var video = videoURL.value;
  var vidPlayer = document.getElementById("videoPlayer");
  //var vidURL = document.getElementById("videoURL");
  //vidURL.innerText = video;
  //**Video Player */

  //Youtube Videos  
  var output = '';
  output += `<iframe id="videoChange" width="560" height="315" src=${video} title="YouTube 
      video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  //Output for videos not on Youtube and Vimeo
  /*
        output += `<video id="videoChange" width="500" height="400" controls>
        <source src="` + videoTest[0].url + `" type="video/` + videoTest[0].media + `" />
      Your browser does not support the video tag.
      </video>`;
  */

  vidPlayer.innerHTML = output;

  return video;
})

function buttons() {
  //"Desisive Movements", "Poke/Tap", "Crime", "Non-Verbal Sound From Mouth", "Gather - Social",  "Run", "Search", "Clean", "Shiver", "Take", "Organize (Objects)", "Watch", "To March/Skip", "Stimulate", "Sexual Attraction", "Challenge", 
  var actions = ["Aerobic/Cardio", "Affectionate", "Agreement", "Analyze", "Angry Movements", "Annoy/Insult", "Arrive", "Balance", "Bend", "Bleed", "Bite", "Carry", "Climb", "Close", "Confusion", "Cook", "Cool/Freeze", "Cover", "Creative Arts", "Cut", "Decrease", "Die", "Dirty", "Discipline", "Disgust", "Drop", "Eat/Drink", "Fall", "Fearful Movements", "Feeling Positive", "Financial Transaction", "Finger Movement", "Float/Water Movement", "Follow", "Forced Entry", "Give", "Grab", "Grow", "Hand Dancing", "Hand Movement - Shake", "Heat/Light Up/Ignite", "Ignore", "Imitate", "Increase", "Inform", "Insert", "Jailed", "Kick", "Kidnap", "Kill", "Leadership Movements", "Learn", "Lift", "Limp", "Listen", "Maintenance", "Material Damage", "Mechanical Operation", "Mouth Movements", "Neutral Hands Connecting With Something", "No Movement", "Non-Life Threatening Bodily Harm", "Open", "Pain (Feel)", "Persuade", "Preserve/Protect", "Pull", "Push", "Quicken", "Realization", "Redo", "Reject", "Relax", "Relief (Feel)", "Relief (Provide)", "Remove/Send Away/Leave", "Resist", "Reverse", "Rise", "Rub", "Sadness", "Scrape", "Separate", "Shoot", "Show Something", "Sit", "Slow", "Smell", "Social Movements (Inclusive)", "Stumble", "Succeed", "Sway", "Throw", "Threaten", "To Scare", "Touch", "Trust", "Twist/Turn", "Uncover", "Verbal Speech", "Walk", "Wish to Create Positive Emotions", "Write/Document"];

  for (i = 0; i < actions.length; i++) {

    var CreateButton = document.createElement("button");
    CreateButton.innerText = actions[i];
    document.getElementById("actions").appendChild(CreateButton);
    CreateButton.addEventListener("click", function (e) {
      e.preventDefault();

      var actionAdd = {
        action: this.innerHTML,
        date: Date(),
        currentTime: currentTimePlace.innerHTML,
        videoID: videoURL.value,
        connectionID: connectionIDPlace.innerText,
        username: username
      }
      actionJSON.push(actionAdd);
      console.log(actionJSON);
    })
  }
  return actionJSON;
}

newAnalysis.addEventListener("click", function (e) {
  e.preventDefault();
  var actionAdd = {
    action: "New Analysis",
    date: Date(),
    currentTime: '0',
    videoID: '"' + videoURL.value + '"',
    connectionID: connectionIDPlace.innerText,
    username: username
  }
  clearInterval(myVar);
  counter = 0;
  myVar = setInterval(restartTimer, 1000);

  actionJSON.push(actionAdd);
})

newConnection.addEventListener("click", function (e) {
  e.preventDefault();
  var connectionIDCreation = Math.floor(Math.random() * 100000000);
  connectionIDPlace.innerHTML = connectionIDCreation;
  clearInterval(myVar);
  counter = 0;
  myVar = setInterval(restartTimer, 1000);
})


function restartTimer() {
  counter++;
  var t = counter;
  currentTimePlace.innerHTML = t;
}

uploadButton.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.setItem("actionJSON", JSON.stringify(actionJSON));
});

getEntries.addEventListener("click", function (e) {
  e.preventDefault();
  jsonRead.value = localStorage.getItem("actionJSON");
});

emailTheFollowing.addEventListener("click", function (e) {
  e.preventDefault();
  navigator.clipboard.writeText(jsonRead.value);

});
