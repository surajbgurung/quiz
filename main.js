

//question
var questionSet=[
    {
        question:"What does HTML stand for?",
        option1:"Hyper Text Markup Language",
        option2:"home tool markup language",
        option3:"hyperlinks and text markup language",
        option4:"Home text markup Language",
        correct:"Hyper Text Markup Language"
    },
    {
        question:"Inside which HTML element do we put the JavaScript?",
        option1:"js",
        option2:"script",
        option3:"javascript",
        option4:"scripting",
        correct:"script"

    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        option1:"Both the head section and the body section are correct",
        option2:"The head section",
        option3:"The body section",
        option4:"At the title section",
        correct:"Both the head section and the body section are correct"
    },
    {
        question:"How do you write 'Hello World' in an alert box?",
        option1:"msgBox('Hello World')",
        option2:"alert('Hello World')",
        option3:"msg(hello world)",
        option4:"alerbox('hello world')",
        correct:"alert('Hello World')"
    },
    {
        question:"How do you call a function named 'myFunction'?",
        option1:"call myfunction()",
        option2:"myFunction()",
        option3:"call function myfunction()",
        option4:"MyFunction()",
        correct:"myFunction()"
    },
    {
        question:"Which country has highest number of corona patients now?",
        option1:"China",
        option2:"USA",
        option3:"Canada",
        option4:"Bhutan",
        correct:"USA"
    },  
];
//variable decleration
var starQuiz = document.getElementById("startQuiz");
var mainDev = document.getElementById("mainDev");
var next = document.getElementById("next-question");
var questiond = document.getElementById("question");
var opt1 = document.getElementById("opt-1");
var opt2 = document.getElementById("opt-2");
var opt3 = document.getElementById("opt-3");
var opt4 = document.getElementById("opt-4");
var resultImage = document.getElementById("resultImage");
 var questionlist=document.getElementById("question-list");
 var back=document.getElementById("previous-question");
 var submit=document.getElementById("submit-question");
 var reportDiv=document.getElementById("reportDiv");
 var playAgain=document.getElementById("play-again");
 var totalReport=document.getElementsByTagName("h5");

//  var questionTime=60;
//  var count=60;
 
//  function displaySeconds(){
      
//       if (count<questionTime){
//       document.getElementById('seconds').innerHTML=count;
//       count--;
//       renderQuestion(counter)
 
//       }else{
//         generateReport();
//       }
//  }

function renderQuestion(i) {
     clearQuizBoard();
    questiond.innerHTML=questionSet[i].question;
    opt1.innerHTML=questionSet[i].option1;
    opt2.innerHTML=questionSet[i].option2;
    opt3.innerHTML=questionSet[i].option3;
    opt4.innerHTML=questionSet[i].option4;
    

}
function clearQuizBoard(){
    questiond.innerHTML="";
    opt1.innerHTML="";
    opt2.innerHTML="";
    opt3.innerHTML="";
    opt4.innerHTML="";
    

    
}
function buttonVisibility(){
    if(counter>=questionSet.length-1){
        next.style.display="none";
        back.style.display="block";
        submit.style.display="block";
    }
    else if(counter<=0){
        next.style.display="block";
        back.style.display="none";
        submit.style.display="none";
    }
    else{
        next.style.display="block";
        back.style.display="block";
        submit.style.display="none";
    }
}



//for start quiz
starQuiz.addEventListener("click", function (event) {
    buttonVisibility();
    starQuiz.style.display = "none";
    mainDev.style.display = "block";
    resultImage.style.display="none";
    setTimeout(generateReport,60000);
    // displaySeconds();

});


var response=[];//array for storing the response as correct or wrong
var counter=0;
renderQuestion(counter);

//for next button
next.addEventListener("click", function () {
    counter++;
    buttonVisibility();
    if (counter<questionSet.length){
        renderQuestion(counter);
        
    
    }
    resultImage.style.display="none";
});


//for chooing the answer
questionlist.addEventListener("click",function(event){
    if(event.target.innerText===questionSet[counter].correct){
        
        resultImage.setAttribute("src","./assets/iconTick.png")
        response[counter]=1;//when answer is correct
    }else{
        resultImage.setAttribute("src","./assets/iconCross.png")
        response[counter]=0;//when answer is wrong
    }
    
resultImage.style.display="block";//comment this if we want the answer at the last
});

//back button
back.addEventListener("click",function(){
    counter--;
    buttonVisibility();
    renderQuestion(counter);
    
});
//submit button
submit.addEventListener("click",function(){
    
    generateReport();
});

function generateReport(){
    var correctAnswers=0;
    for  (i=0;i<response.length;i++){
        correctAnswers+=response[i];
        
    }
    mainDev.style.display="none";
    reportDiv.style.display="block";
    var decimal=(correctAnswers/questionSet.length)*100;
    var twoDecimalNo=decimal.toFixed(2);
  var reportString="Total Questions:  "+questionSet.length+"<br>"+
  "correct Responses: "+ correctAnswers+"<br>"+
  "percentage: " +twoDecimalNo+"%<br>";
  document.getElementsByTagName('h5')[0].innerHTML=reportString;
  
  }
  playAgain.addEventListener("click",function(){

starQuiz.style.display="block";
mainDev.style.display="none";
reportDiv.style.display="none";
counter=0;
renderQuestion(counter);
response=[];

  }
  );
    


 