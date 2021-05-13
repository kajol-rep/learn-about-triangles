var op1 = document.querySelector("#option1");
var op2 = document.querySelector("#option2");
var op3 = document.querySelector("#option3");
var op4 = document.querySelector("#option4");
let answr = document.getElementsByName('answer');
var submitBtn = document.querySelector("#submitbtn");
var nextBtn = document.querySelector("#nextbtn");
var startBtn = document.querySelector("#startbtn")
var num = document.querySelector("#number");
var q = document.querySelector("#question");


startBtn.addEventListener("click", handleStart)
submitBtn.addEventListener("click", proccessQuiz)
nextBtn.addEventListener("click", handleNext)

let count = 0;
var i = 0;
var x =""
var y=""
const qna = [
    {
        question: "What is a triangle?",
        option1: "Triangle is a polygon",
        option2: "Triangle is closed shape",
        option3: "Triangle is 2-dimensional shape",
        option4: "All of the above",
        answer: "4"
    },
    {
        question: "How many sides a triangle has?",
        option1: "2",
        option2: "3",
        option3: "5",
        option4: "8",
        answer: "2"
    },
    {
        question: "What is the sum of the interior angles of a triangle?",
        option1: "100",
        option2: "120",
        option3: "180",
        option4: "140",
        answer: "3"
    },
    {
        question: "A triangle having all the three sides equal is:",
        option1: "Equilateral triangle",
        option2: "Scalene triangle",
        option3: "Isosceles triangle",
        option4: "None of the above",
        answer: "1"
    },
    {
        question: "A triangle having only two sides equal is:",
        option1: "Equilateral triangle",
        option2: "Scalene triangle",
        option3: "Isosceles triangle",
        option4: "None of the above",
        answer: "3"
    },
    {
        question: "A triangle having only all the sides unequal is:",
        option1: "Equilateral triangle",
        option2: "Scalene triangle",
        option3: "Isosceles triangle",
        option4: "None of the above",
        answer: "2"
    },
    {
        question: "A triangle ∆ABC, having three angles : 20, 30, 130 is:",
        option1: "Obtuse triangle",
        option2: "Right triangle",
        option3: "Acute triangle",
        option4: "None of the above",
        answer: "1"
    },
    {
        question: "A triangle ∆ABC, having three angles : 90, 30, 70 is:",
        option1: "Obtuse triangle",
        option2: "Acute triangle",
        option3: "Right triangle",
        option4: "None of the above",
        answer: "3"
    },
    {
        question: "A triangle ∆ABC, having three angles : 50, 50, 80 is:",
        option1: "Obtuse triangle",
        option2: "Acute triangle",
        option3: "Right triangle",
        option4: "None of the above",
        answer: "2"
    },
    {
        question: "What is the area of a triangle",
        option1: "1/2(length*breadth)",
        option2: "2(height*base)",
        option3: "1/2(height+base)",
        option4: "1/2(height*base)",
        answer: "4"
    }
];



function handleStart(){
    x = "";
    y = "";
    document.getElementById("quizpanel").style.display = "block";
    document.getElementById("welcomepanel").style.display = "none";

    num.innerHTML = i+1;

        var currentqna = qna[i];
        console.log(i)
        q.innerHTML = currentqna.question;
        op1.innerHTML = currentqna.option1;
        op2.innerHTML = currentqna.option2;
        op3.innerHTML = currentqna.option3;
        op4.innerHTML = currentqna.option4;
        
        
        console.log(i)
    answr.forEach((answr) => {
        if (answr.checked) {
            answr.checked = false;
            console.log("nextttt")


        }
    })
    submitBtn.disabled = true;
    submitBtn.className = "submit-button"
    nextBtn.disabled = true;
    nextBtn.className = "submit-button"

    
        

    
    
    
    console.log("disabled buttons")

}

function handleNext() {
    console.log(x,y)
    
       console.log(qna.length)
       
       if(i<qna.length-1){
        if(y==x){
            document.getElementById(x).removeAttribute("style");
    
        }else{
            console.log("y is :" + y)
            
            document.getElementById(x).removeAttribute("style");
            document.getElementById(y).removeAttribute("style");
        }
           i++
           handleStart();
       }
    
    

}

//answr.addEventListener("click", onChange)
function handleClick() {
    answr.forEach((answr) => {
        if (answr.checked) {
            console.log(`You selected: ${answr.value}`);
            submitBtn.disabled = false;
            submitBtn.className = "enabled-button"
        }
    })


}



function proccessQuiz() {
    var ans = "";
    var currentQnA = "";
    
    


    answr.forEach((answr) => {

        if (answr.checked) {
            ans = answr.value;
            console.log(ans)
        }

    })
    console.log("value of iteratig i: " + i)
    currentQnA = qna[i];
    console.log("he" + ans);
    console.log(currentQnA.answer);

    if (ans == currentQnA.answer) {
        console.log(ans);
        console.log(currentQnA.answer);
        console.log("right")
        count+=1
        console.log("value of x:" + x)
        document.getElementById(currentQnA.answer).style.backgroundColor = "lightgreen";

    } else {
        console.log("wrong")
        
        
        console.log("value of y: " + y)
        document.getElementById(ans).style.border = "2px solid red";
        document.getElementById(currentQnA.answer).style.backgroundColor = "lightgreen";
    }

    y = ans
    x = currentQnA.answer

    if(i>=qna.length-1){
        i=0
        document.getElementById("nextbtn").style.display = "none";
           document.getElementById("scorebtn").style.display = "inline";
           


    }else{
        nextBtn.disabled = false;
        nextBtn.className = "enabled-button"
    }

}

function displayScore(){

    document.getElementById("quizpanel").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("score").innerHTML = count;
}

function goBack(){
    count = 0
    if(y==x){
        document.getElementById(x).removeAttribute("style");

    }else{
        console.log("y is :" + y)
        
        document.getElementById(x).removeAttribute("style");
        document.getElementById(y).removeAttribute("style");
    }
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("welcomepanel").style.display = "block";
    document.getElementById("scorebtn").style.display = "none";
    document.getElementById("nextbtn").style.display = "inline";

}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }