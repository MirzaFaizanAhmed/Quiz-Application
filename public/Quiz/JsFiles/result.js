let name = sessionStorage.getItem("userName");
let score = sessionStorage.getItem("Score");
let sec = sessionStorage.getItem("sec");
let min = sessionStorage.getItem("min");
let total = parseInt(sessionStorage.getItem("Total"));


document.querySelector('.name').innerHTML = name ;
document.querySelector('#score').innerHTML = score;
document.querySelector('#sec').innerHTML = sec;
document.querySelector('#min').innerHTML = min;

var per = score*100/total;
if(per >= 80){
    document.querySelector('#remarks').innerHTML = "Excellent";
}
else if(per >= 70){
    document.querySelector('#remarks').innerHTML = "Good";   
}
else if(per >= 60){
    document.querySelector('#remarks').innerHTML = "Average";  
}
else{
    document.querySelector('#remarks').innerHTML = "Fail !"; 
}