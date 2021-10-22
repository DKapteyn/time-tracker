



 const cSelfCareHours = document.getElementById('cSelfCareHours')

 getJSON("monthly");

async function getJSON(item){
    const response = await fetch('data.json');
    const data = await response.json();
    
  
    cSelfCareHours.innerText = data[5].timeframes[item].current + 'hrs' 
}

    
   







