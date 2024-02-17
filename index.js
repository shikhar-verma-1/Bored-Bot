const button = document.getElementById('bot-btn');

button.addEventListener("click",function(){
    fetch("https://www.boredapi.com/api/activity")
    .then(res=>res.json())
    .then(data=>
        document.getElementById("suggestion").textContent = `"${data.activity}"`);  
});
    
