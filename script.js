const questions = [
    {
        question: "How many hours in a day?",
        answers: [
            { text: "22", correct: false },
            { text: "24", correct: true },
            { text: "20", correct: false },
            { text: "26", correct: false },
        ]
    },
    {
        question: "How many days are there in a leap year?",
        answers: [
            { text: "369", correct: false },
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "368", correct: false },
        ]

    },
    {
        question: "Which is the largest continent?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "North America", correct: false },
            { text: "Asia", correct: true },
        ]
    },
    {
        question: "What is the capital city of India?",
        answers: [
            { text: "Bangalore", correct: false },
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Kolkata", correct: false },
        ]
    },
    {
        question: "Which is the largest animal that lives on land?",
        answers: [
            { text: "Elephant", correct: true },
            { text: "Girafee", correct: false },
            { text: "Hippopotamus", correct: false },
            { text: "Polar Bear", correct: false },
        ]
    }
];
const queEle = document.getElementById('que');
const ansbtns = document.getElementById('ans');
const nextbtn = document.getElementById('next');
let curqueIndex = 0;
let score = 0;
function startQuiz(){
    curqueIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQue();
}
function showQue(){
    resetState();
    let curque=questions[curqueIndex];
    let queNo=curqueIndex+1;
    queEle.innerHTML=queNo+". "+curque.question;
    curque.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansbtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAns);
    })
}
function resetState(){
    nextbtn.style.display="none";
    while(ansbtns.firstChild)
{
    ansbtns.removeChild(ansbtns.firstChild)
}
}
function selectAns(e){
    const selbtn=e.target;
    const iscrt=selbtn.dataset.correct==="true";
    if(iscrt){
        selbtn.classList.add("correct");
        score++;
    }else{
        selbtn.classList.add("incorrect");
    }
    Array.from(ansbtns.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";

}
function showScore(){
    resetState();
    queEle.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="Attempt Again";
    nextbtn.style.display="block";
}
function handlenextbtn(){
    curqueIndex++;
    if(curqueIndex<questions.length){
        showQue();
    }else{
        showScore();
    }
}

nextbtn.addEventListener('click',()=>{
    if(curqueIndex<questions.length){
        handlenextbtn();
    }else{
        startQuiz();
    }
})

startQuiz();