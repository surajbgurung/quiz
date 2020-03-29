

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
        question:"Which is the highest peak in the world?",
        option1:"Mt. Kilimanjaro",
        option2:"Andus Mountain",
        option3:"Mt. Fuji",
        option4:"Mt. Everest",
        correct:"Mt. Everest"

    },
    {
        question:"Which city s also know as the city of Temples?",
        option1:"New Delhi",
        option2:"Tehran",
        option3:"kathmandu",
        option4:"Islamabad",
        correct:"kathmandu"
    },
    {
        question:"What is the full form of NY?",
        option1:"Never Yell",
        option2:"Never Young",
        option3:"New York",
        option4:"New York1",
        correct:"New York"
    },
    {
        question:"Who is the current president of USA?",
        option1:"Trump",
        option2:"Clinton",
        option3:"Obama",
        option4:"KP Oli",
        correct:"Trump"
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




starQuiz.addEventListener("click", function (event) {
    buttonVisibility();
    starQuiz.style.display = "none";
    mainDev.style.display = "block";
    resultImage.style.display="none";
    setTimeout(generateReport,60000);
    // displaySeconds();

});


var response=[];
var counter=0;
renderQuestion(counter);

next.addEventListener("click", function () {
    counter++;
    buttonVisibility();
    if (counter<questionSet.length){
        renderQuestion(counter);
        
    
    }
    resultImage.style.display="none";
});

questionlist.addEventListener("click",function(event){
    if(event.target.innerText===questionSet[counter].correct){
        
        resultImage.setAttribute("src","./assets/iconTick.png")
        response[counter]=1;//when answer is correct
    }else{
        resultImage.setAttribute("src","./assets/iconCross.png")
        response[counter]=0;//when answer is wrong
    }
    //uncomment below if you want to check answer right away
resultImage.style.display="block";
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
    


 