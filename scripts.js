//create a user and computer score variable to track scores
let userscore=0 ;
let botscore=0;
let userchoice;
let botchoice;
let Max=3;
let Min=1;
let arr=["draw","rock","paper","scissor"];
//use a loop to iterate through rounds
let rounds=0;
while(rounds<5)
{
//promp user to pick one option out of rock,paper,scissor.
    let pick=prompt("rock,paper or scissor?");
//associate whole numbers with rock(1),paper(2),scissor(3)
        if(pick==="rock") userchoice=1;
        else if (pick==="paper") userchoice=2;
        else if(pick==="scissor") userchoice=3;
        else{ 
            alert("invalid choice bruh choose rock,paper or scissor");
            continue;
        }
//make computer generate a random whole number between 1 and 3 inclusively.
    botchoice=Math.floor(Math.random()*(Max-Min+1)+Min);
//use conditionals to check who won each round 
    if(userchoice===(botchoice%3)+1){
        console.log(`user chose ${arr[userchoice]}, bot chose ${arr[botchoice]} ,user wins this time.`);
        userscore++;
    }    
    else if(userchoice==botchoice)
    {
        console.log(`${arr[0]}`);
    }
    else{
        console.log(`user chose ${arr[userchoice]}, bot chose ${arr[botchoice]} ,bot wins this time.`);
        botscore++;
    }
    rounds++;
//increment score of respective winning candidate
}
//compare overall user and computer score to evaluate winner
if(userscore>botscore)
{
    console.log(`user score:${userscore},bot score:${botscore}, user wins.`);
}
else if(userscore<botscore){
    console.log(`user score:${userscore},bot score:${botscore}, bot wins`);
} 
else{
    console.log("Draw!!!!");
    location.reload();
}