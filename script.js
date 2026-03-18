
function showMessage(){
alert("Study Tip: Try the Pomodoro Technique – study for 25 minutes then take a 5 minute break.");
}
function changeImage(){
const img = document.getElementById("toolImage");
if(img.src.includes("tools.jpg")){
img.src = "images/study.jpg";
}else{
img.src = "images/tools.jpg";
}
}
