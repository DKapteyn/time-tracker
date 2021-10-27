
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

let dBlue = 'rgb(111, 118, 200)'

 


//LOAD STATE
getJSON('daily', "Yesterday ");
dailyStats.style.color = 'white'


//JSON DATA RETRIEVAL 

async function getJSON(item, lasttime){
    const response = await fetch('data.json');
    const data = await response.json();
    
  //WORK
currentWorkHours.innerText = data[0].timeframes[item].current + 'hrs' ;
previousWorkHours.innerText = lasttime + "-"+ " " + data[0].timeframes[item].previous + 'hrs';
 //PLAY
 currentPlayHours.innerText = data[1].timeframes[item].current + 'hrs' ;
previousPlayHours.innerText = lasttime + "-"+ " " + data[1].timeframes[item].previous + 'hrs';
 //STUDY
 currentStudyHours.innerText = data[2].timeframes[item].current + 'hrs' ;
previousStudyHours.innerText = lasttime + "-"+ " " + data[2].timeframes[item].previous + 'hrs';
 //EXERCISE
 currentExerciseHours.innerText = data[3].timeframes[item].current + 'hrs' ;
previousExerciseHours.innerText = lasttime + "-"+ " "+ data[3].timeframes[item].previous + 'hrs';
 //SOCIAL 
 currentSocialHours.innerText = data[4].timeframes[item].current + 'hrs' ;
previousSocialHours.innerText = lasttime + "-"+ " "+ data[4].timeframes[item].previous + 'hrs';

//SELF CARE
currentSelfCareHours.innerText = data[5].timeframes[item].current + 'hrs' 
previousSelfCareHours.innerText = lasttime + "-"+ " "+ data[5].timeframes[item].previous + 'hrs'


}

//ONCLICK FUNCTIONS FOR DAILY, WEEKLY, MONTHLY  

document.getElementById('daily').addEventListener("click", () => getJSON("daily", "Yesterday "))
document.getElementById('weekly').addEventListener("click", () => getJSON("weekly", "Last Week "))
document.getElementById('monthly').addEventListener("click", ()=> getJSON("monthly", "Last Month "))


document.getElementById('daily').addEventListener("click", () => {dailyStats.style.color = 'white'; weeklyStats.style.color  = dBlue; monthlyStats.style.color = dBlue
})
document.getElementById('weekly').addEventListener("click", () => {dailyStats.style.color = dBlue; weeklyStats.style.color  = 'white'; monthlyStats.style.color = dBlue
})
document.getElementById('monthly').addEventListener("click", () => {dailyStats.style.color = dBlue; weeklyStats.style.color  = dBlue; monthlyStats.style.color = 'white'
})


/*const lowerBox = document.querySelectorAll(".lowerbox");
const ellipsis = document.querySelectorAll(".icon-ellipsis"); 

ellipsis.forEach((pic) => pic.addEventListener("mouseover", () =>{
  lowerBox.forEach((l) => l.style.backgroundColor = "rgb(28, 31, 74)")
} ));*/







