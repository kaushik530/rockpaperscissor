
//create a user and computer score variable to track scores
let count=5;
let userscore=0 ;
let botscore=0;
let userchoice;
let botchoice;
let Max=3;
let Min=1;
let arr=["draw","rock","paper","scissor"];
let rounds=0;
let pick="";
let usrscr=document.querySelector(".usrscr");
let botscr=document.querySelector(".botscr");

let botimg=document.querySelector(".botimg");
const botimages = {
  1: "images/rock.jpg",
  2: "images/paper.png",
  3: "images/scissor.png"
};
let result=document.querySelector("#result");
let active=false;// flag for button activity
let userbuttons=document.querySelectorAll(".userbutton");
let start=document.querySelector(".start");
userbuttons.forEach(btn => btn.disabled = true);//inititally keep user buttons disabled

start.addEventListener("click", () => {
  userbuttons.forEach(btn => btn.disabled = false);
  active=true;
});


function toggleButtons(state) {
  userbuttons.forEach(btn => btn.disabled = state);
}



userbuttons.forEach(btn => {btn.addEventListener("click",(e) => 
    {
        pick=e.currentTarget.value;
        rounds++;
        playround();
    })})




function playround(){

//associate whole numbers with rock(1),paper(2),scissor(3)
        console.log(active);
        if(pick==="rock") userchoice=1;
        else if (pick==="paper") userchoice=2;
        else if(pick==="scissor") userchoice=3;
        else{ 
            alert("invalid choice bruh choose rock,paper or scissor");
            return;
        }
//make computer generate a random whole number between 1 and 3 inclusively.
    botchoice=Math.floor(Math.random()*(Max-Min+1)+Min);
    botimg.src=botimages[botchoice];
//use conditionals to check who won each round 
    if(userchoice===(botchoice%3)+1){
        userscore++;
        usrscr.textContent=`${userscore}`;
        result.textContent=`user chose ${arr[userchoice]} and bot chose ${arr[botchoice]},user wins this round`
    }    
    else if(userchoice==botchoice)
    {
        result.textContent=`Both chose the same thing so ${arr[0]}`;
    }
    else{
        botscore++;
        botscr.textContent=`${botscore}`;
        result.textContent=`user chose ${arr[userchoice]} and bot chose ${arr[botchoice]},bot wins this round`

    }


    if(rounds===5){
    toggleButtons(userbutton);
    //compare overall user and computer score to evaluate winner
    console.log("RESULTTTTTTTTTT");
    if(userscore>botscore)
    {
        result.textContent=`user score:${userscore},bot score:${botscore}, user wins.`;
    }
    else if(userscore<botscore){
        result.textContent=`user score:${userscore},bot score:${botscore}, bot wins`;
    }    
    else{
        result.textContent="Draw!!!!,yall bot sucker bruh";
    }
    }
    
//increment score of respective winning candidate
}



//what i wanna track after each round: userscore,botscore