

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

let userbuttons=document.querySelectorAll(".userbutton");
let start=document.querySelector(".start");
userbuttons.forEach(btn => btn.disabled = true);//inititally keep user buttons disabled

start.addEventListener("click", () => {
  userbuttons.forEach(btn => btn.disabled = false);
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
        console.log(pick);
        if(pick==="rock") userchoice=1;
        else if (pick==="paper") userchoice=2;
        else if(pick==="scissor") userchoice=3;
        else{ 
            alert("invalid choice bruh choose rock,paper or scissor");
            return;
        }
//make computer generate a random whole number between 1 and 3 inclusively.
    botchoice=Math.floor(Math.random()*(Max-Min+1)+Min);
//use conditionals to check who won each round 
    if(userchoice===(botchoice%3)+1){
        userscore++;
        usrscr.textContent=`${userscore}`;
    }    
    else if(userchoice==botchoice)
    {
        console.log(`${arr[0]}`);
    }
    else{
        console.log(`user chose ${arr[userchoice]}, bot chose ${arr[botchoice]} ,bot wins this time.`);
        botscore++;
    }


        if(rounds===5){
    let result=document.querySelector("#result");
    toggleButtons();
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
        result.textContent="Draw!!!!";
    }
    }
    
//increment score of respective winning candidate
}



//what i wanna track after each round: userscore,botscore