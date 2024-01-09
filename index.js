

    var buttonColor = ["red","blue","green","yellow"];
    var gamePattern = [];
    var userClickedPattern = [];

    var started = false;
    var level =0;




    $(document).keypress(function(){
        if(!started){
           
           nextSequence();
           started=true; 
        }
    });

  $(".btn").click(function(){

        var userChosenColor = $(this).attr("id");

        userClickedPattern.push(userChosenColor);
        playsound(userChosenColor);
        animationPressed(userChosenColor);
        checkWinner(userClickedPattern.length-1);
    
    });

    function checkWinner(currenlevel){

        if(gamePattern[currenlevel]===userClickedPattern[currenlevel]){
            console.log("Success");

            if(userClickedPattern.length===gamePattern.length)
            {
                setTimeout(function(){
                    nextSequence();
                },1000);
            }
        }
        else{

    
            console.log("wrong");
           gameOver();
                }

    }
function nextSequence(){
    userClickedPattern=[];
    level++;

    $("#level-title").text("Level "+ level);
    
    var randomNumber  =  Math.floor(Math.random()*4);
    var randomChosenColor = buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);
   
    
   
}
function playsound(name){

    var audio = new Audio ("sounds/"+name+".mp3");
    audio.play();

}
function animationPressed(currentcolor){

   $("#"+currentcolor).addClass("pressed");

   setTimeout(function(){$("#"+currentcolor).removeClass("pressed");},100);

}
function startOver()
{
    started=false;
    level=0;
    gamePattern=[];

}
function gameOver()
{
    playsound("wrong");
        
    $("body").addClass("game-over");
    setTimeout(function()
    {$("body").removeClass("game-over");},200);

    $("#level-title").text("game over!!");

    startOver();
      
}




