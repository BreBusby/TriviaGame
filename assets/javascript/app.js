$(document).ready(function(){
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choice;
var countStartNumber = 0;
var timeLeft = 30;

function startGame(){
    alert("You will have 30 seconds for each question. Go ahead and get started!");
    nextQuestion();
  }
  
  function reset(){
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    choice = 0;
    countStartNumber = 0;
    $(".timer").html("<div></div>");
    $(".score").html("<div></div>");
    $(".question").html("<div></div>");
    $(".answer").html("<div></div>");
  }
  

  $('.start').click(startGame);
  $('.resetbtn').click(reset);


  var questions = [{
    q: "What year was the Dallas Mavericks Established?",
    answer: ['1920', '2011', '1981', '1980'],
    correct: "1980",
    images: "assets/images/year.jpg"
  }, {
    q: "Who is the Greatest player of the Mavericks?",
    answer: ['Steve Nash', 'Dirk Nowitzki', 'Rolando Blackman', 'Jason Kidd'],
    correct: "Dirk Nowitzki",
    images: "assets/images/dirk.jpg"
  }, {
    q: "What does MFFL stand for?",
    answer: ['Mavs Fan For Life', 'Mavericks Fly For Living', 'Marks Favorite Fan List', 'Mavs For Fan Life'],
    correct: "Mavs Fan For Life",
    images: "assets/images/logo.jpg"
  }];
  
  function timer(){
    $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
    function less(){
      if (timeLeft == 0) {
        $(".timer").html("<b>0 Seconds left</b>");
        alert("Time is up");
        unanswered++;
        $(".score").html("<div><span class=scores well well-sm>Correct: <span class='badge'>"+ correct +"</span> | Incorrect: <span class='badge'>"+ correct +"</span> | Unanswered: <span class='badge'>" + unanswered + "</span> </span></div>");
        clearTimeout(tid);    
      } else {
        timeLeft--;
        $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
        console.log(timeLeft);
      }
    }
   var tid = setInterval(less, 1000);
  }

  function nextQuestion(){
    timeLeft = 30;
      timer();
  
    for (var i = 0; i < questions.length; i++) {
  
       $(".question").html('<h2>' + questions[i].q + '</h2>' );
  
       $(".answer").html('<form>'
       + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
       + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
       + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
       + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');


       function chosen(){
        alert('Clicked '+ questions[i].answer[i]);
        choice = document.getElementById("myRadio").value;
        console.log(choice);
      }
   }  
}
});