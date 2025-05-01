const quiz = [
    { 
   'question1':"When a function is called by its name, then it is _____.",
   'ans1text':"Executed",
   'ans2text':"Processing",
   'ans3text':"Hierarchy",
   'ans4text':"Global",
   'anstext':"Executed",
    },
    {
        'question2':" Object attributes are often called ____ to help distinguish them from other variables you might use.",
        'anstext':"Constructors",
        'anstext':"Instances ",
        'anstext:"Fields",
        'anstext':"Records",
        'anstext':"Fields",
    },
    {
        'question3':"After programs are put into production, making necessary changes is called ____.",
        'anstext':"Debugging",
        'anstext':"Maintenance",
        'anstext':"Conversion",
        'anstext':"Testing",
        'anstext':"Maintenance",
    },
{
    'question4':"____ resemble verbs that describe what and how an object does something.",
    'anstext':"Methods",
    'anstext':"Messages",
    'anstext':"Commands",
    'anstext':"Attributes",
    'anstext':"Methods",
},
{
    'question5':"A program written in assembly language is called the ____ program.",
    'anstext':"Fifth",
    'anstext':"Social networks",
    'anstext':"Source",
    'anstext':"Carrier",
    'anstext':"Source",
}
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question; 
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener "click", () => {
    const checkedAns = document.querySelector('input [type="radio"]: checked')
        console.log(checkedAns); 
if( checkedAns === null) { 
    alert("Please select answer");
}else{ 
    if( checkedAns.nextElementSibling.textContent === quiz[
        currentQuestion].answer){
            score++;
        } 
    currentQuestion++;
    if(
        currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is" + score + " out of " + quiz.length);
            location.reload();
        }
    }
    
});










