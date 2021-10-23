
//WORK
const currentWorkHours = document.getElementById('currentWorkHours');
const PreviousWorkHours = document.getElementById('previousWorkHours');
//PLAY
const currentPlayHours = document.getElementById('currentPlayHours');
const PreviousPlayHours = document.getElementById('previousPlayHours');
//STUDY
const currentStudyHours = document.getElementById('currentStudyHours');
const PreviousStudyHours = document.getElementById('previousStudyHours');
//EXERCISE
const currentExerciseHours = document.getElementById('currentExerciseHours');
const PreviousExerciseHours = document.getElementById('previousExerciseHours');
//SOCIAL
const currentSocialHours = document.getElementById('currentSocialHours');
const PreviousSocialHours = document.getElementById('previousSocialHours');
//SELF CARE
const currentSelfCareHours = document.getElementById('currentSelfCareHours');
const previousSelfCareHours = document.getElementById('previousSelfCareHours')
//MAINCARD
const dailyStats = document.getElementById('daily')
const weeklyStats = document.getElementById('weekly')
const monthlyStats = document.getElementById('monthly') 

 

//JSON DATA RETRIEVAL 

getJSON('weekly');

async function getJSON(item){
    const response = await fetch('data.json');
    const data = await response.json();
    
  //WORK
currentWorkHours.innerText = data[0].timeframes[item].current + 'hrs' ;
previousWorkHours.innerText = 'Previous- ' + data[0].timeframes[item].previous + 'hrs';
 //PLAY
 currentPlayHours.innerText = data[1].timeframes[item].current + 'hrs' ;
previousPlayHours.innerText = 'Previous- ' + data[1].timeframes[item].previous + 'hrs';
 //STUDY
 currentStudyHours.innerText = data[2].timeframes[item].current + 'hrs' ;
previousStudyHours.innerText = 'Previous- ' + data[2].timeframes[item].previous + 'hrs';
 //EXERCISE
 currentExerciseHours.innerText = data[3].timeframes[item].current + 'hrs' ;
previousExerciseHours.innerText = 'Previous- ' + data[3].timeframes[item].previous + 'hrs';
 //SOCIAL 
 currentSocialHours.innerText = data[4].timeframes[item].current + 'hrs' ;
previousSocialHours.innerText = 'Previous- ' + data[4].timeframes[item].previous + 'hrs';

//SELF CARE
currentSelfCareHours.innerText = data[5].timeframes[item].current + 'hrs' 
previousSelfCareHours.innerText = 'Previous- ' + data[5].timeframes[item].previous + 'hrs'
}

//ONCLICK FUNCTIONS FOR DAILY, WEEKLY, MONTHLY  

document.getElementById('daily').addEventListener("click", () => getJSON("daily"))
document.getElementById('weekly').addEventListener("click", () => getJSON("weekly"))
document.getElementById('monthly').addEventListener("click", () => getJSON("monthly"))




    
   







