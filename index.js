let cscore=0;
let pscore=0;
function reset(){
    cscore=0;
    pscore=0;
    update();
    document.getElementById("result").innerHTML="Result of a round will be shown here.";
    document.getElementById("disComp").innerHTML="";
    document.getElementById("disPlayer").innerHTML="";
}
function update(){
    document.getElementById("compScore").innerHTML=cscore;
    document.getElementById("playerScore").innerHTML=pscore;
}
function getCompChoice(){
    const arr=["ROCK", "PAPER", "SCISSOR"];
    return arr[parseInt(Math.random()*(3-0)+0)];
}
function rock(){
    let comp=getCompChoice();
    document.getElementById("disPlayer").innerHTML="ROCK";
    if(comp=="ROCK"){
        cscore++;pscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer choose rock. It's a tie!";
    }else if(comp=="PAPER"){
        cscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer choose paper. You lose!";
    }else{
        pscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer choose scissor. You win!";
    }
}
function paper(){
    let comp=getCompChoice();
    document.getElementById("disPlayer").innerHTML="PAPER";
    if(comp=="ROCK"){
        pscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer chooses rock. You win!";
    }else if(comp=="PAPER"){
        cscore++;pscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer chooses paper. It's a tie!";
    }else{
        cscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer choose scissor. You lose!";
    }
}
function scissor(){
    let comp=getCompChoice();
    document.getElementById("disPlayer").innerHTML="SCISSOR";
    if(comp=="ROCK"){
        cscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer chooses rock. You lose!";
    }else if(comp=="PAPER"){
        pscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer chooses paper. You win!";
    }else{
        cscore++;pscore++;
        update();
        document.getElementById("disComp").innerHTML=comp;
        document.getElementById("result").innerHTML="Computer choose scissor. It's a tie!";
    }
}
