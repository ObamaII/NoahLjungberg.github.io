document.write("<h1> Du vann, bra jobbat </h1>");

let answer = Math.floor(Math.random() * 20) +1;
let incorrect =true;
while(incorrect){
    let svar = Number(prompt("Gissa ett tal mellan 1 och 20!"));

    if(svar>20){
        alert("Mellan 1 och 20!");
    }

    else if(svar>answer){
        alert("Lägre");

    }
    else if(svar<answer){
        alert("Högre");
    }
    else if(svar === answer){
        alert("Bra jobbat du vann!!");
        incorrect =  false;

    }

else{
    alert("HAAHA du suger!!");
}
}