//create a user and computer score variable to track scores
let userscore=0 ;
let botscore=0;
let userchoice;
let botchoice;
let Max=3;
let Min=1;
//use a loop to iterate through rounds
for(let i=1;i<=5;i++)
{
//promp user to pick one option out of rock,paper,scissor.
    let pick=prompt("rock,paper or scissor?");
//associate whole numbers with rock(1),paper(2),scissor(3)
    if(pick==="rock") userchoice=1;
    else if (pick==="paper") userchoice=2;
    else if(pick==="scissor") userchoice=3;
    else{ 
        prompt("improper entry restart game") ;
        location.reload();
    }
//make computer generate a random whole number between 1 and 3 inclusively.
    botchoice=Math.floor(Math.random()*(Max-Min+1)+Min);
//use conditionals to check who won each round 
    if(userchoice==1 && botchoice==2)
    {
        console.log("i choose paper ,fuck you hahaha");
        botscore++;
    }
    else if(userchoice==1 && botchoice==3)
    {
        console.log("i choose scissor, you got me this time");
        userscore++;
    }
    else if(userchoice==2 && botchoice==3){
        console.log("i choose scissors ,fuck you hahaha");
        botscore++;
    } 
    else if(userchoice==2 && botchoice==1)
    {
        console.log("i choose rock, you got me this time");
        userscore++;
    }
    else if(userchoice==3 && botchoice==1)
    {
        console.log("i choose rock,fuck you hahahaha");
        botscore++;
    }

    else if(userchoice==3 && botchoice==2)
    {
        console.log("i choose paper, you got me this time");
        userscore++;
    }
    else{
        console.log("aww man we both chose the same thing huh");
    }
    

//increment score of respective winning candidate
}
//compare overall user and computer score to evaluate winner
if(userscore>botscore)
{
    console.log("you win bro");
}
else if(userscore<botscore){
    console.log("i win loser");
} 
else{
    console.log("draw try again");
    location.reload();
}