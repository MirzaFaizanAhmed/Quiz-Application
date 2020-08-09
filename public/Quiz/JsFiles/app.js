window.onload = function(){
    showQuestions(0);
    startTime();
    let name = sessionStorage.getItem("userName");
    document.querySelector(".name").innerHTML = name;

}



let questions = [
    {
        id:1,
        question: "The term computer is derived from ?",
        answer: "Latin",
        options: [
            "Latin",
            "German",
            "French",
            "Arabic"
        ]
    },
    {
        id:2,
        question: "ALU stands for ?",
        answer: "Arthmatic Logic Unit",
        options: [
            "Application Logic Unit",
            "Arthmatic Logic Unit",
            "Array Logic Unit",
            "None of These"
        ]
    },
    {
        id:3,
        question: "The brain of a computer is ?",
        answer: "CPU",
        options: [
            "ALU",
            "Memory",
            "CPU",
            "None of These"
        ]
    },
    {
        id:4,
        question: "Which of the following computer generation uses concept of artifical intelligence ?",
        answer: "Forth Generation",
        options: [
            "First Generation",
            "Second Generation",
            "Third Generation",
            "Forth Generation"
        ]
    },
    {
        id:5,
        question: "When a key is pressed on a keyboard , which standard is used for converting the keystroke in to the corresponding bits ?",
        answer: "ASCII",
        options: [
            "ANSI",
            "EBCDIC",
            "ISO",
            "ASCII"
        ]
    },
    {
        id:6,
        question: "Which of the following is valid storage type ?",
        answer: "Pen Drive",
        options: [
            "CPU",
            "Keyboard",
            "Pen Drive",
            "Track Ball"
        ]
    },
    {
        id:7,
        question: "The List of coaded instruction is called ?",
        answer: "Computer Program",
        options: [
            "Algorithm",
            "Computer Program",
            "Flow Chart",
            "Utility Program"
        ]
    },
    {
        id:8,
        question: "Source code is available to view, modified and redistribute in ?",
        answer: "Open Source",
        options: [
            "Open Source",
            "Closed Souce",
            "Both of above",
            "None of these"
        ]
    }


];


function submitForm(e){
    e.preventDefault();
    let userName = document.forms["start"]["userName"].value;
    
    sessionStorage.setItem("userName",userName);
    location.href = "quiz.html";
}

let quesCount = 0;
let score = 0;
sessionStorage.setItem("Total",questions.length);

function next(){
    let answer = document.querySelector("li.option.active").innerHTML;
    if(answer == questions[quesCount].answer){
        score +=1;
        sessionStorage.setItem("Score",score);
    }

    if(quesCount == questions.length -1){
        location.href="score.html";
        clearInterval(interval);
        sessionStorage.setItem("sec",sec);
        sessionStorage.setItem("min",min);
        return;
    }
    quesCount++;
    showQuestions(quesCount);
}

function showQuestions(count){
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>"+questions[count].question+"</h2>";

    question.innerHTML = `<h2>${questions[count].question}</h2>
        <ul class="options">
            <li class="option">${questions[count].options[0]}</li>
            <li class="option">${questions[count].options[1]}</li>
            <li class="option">${questions[count].options[2]}</li>
            <li class="option">${questions[count].options[3]}</li>
        </ul>
    `;
    activeOption()
}

function activeOption(){
    let option = document.querySelectorAll("li.option");

    for(let i=0 ; i< option.length ; i++){
        document.querySelector('.next').style.display = "none";
        option[i].onclick = function(){
            for(let j=0 ; j<option.length ; j++){
                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
            document.querySelector('.next').style.display = "inline";
            
        }
    }
}

function checkAnswer(count){
    if(questions[count].options[0]===questions[count].answer){
        console.log("Correct");
    }
}

var min = 0;
var sec = 0;
var interval;
var minh = document.getElementById("min");
var sech = document.getElementById("sec");


function timer(){
   
    sec++
    sech.innerHTML = sec; 
    if(sec === 60){
        min++
        minh.innerHTML = min;
        sec= 0;
    }
}
function startTime(){
    interval = setInterval(timer ,1000);
}


