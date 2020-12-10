function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

document.write("<h1> Du vann! </h1>");

let answer = Math.floor(Math.random() * 20) +1;
let incorrect =true;
while(incorrect){
    let svar = Number(prompt("gissa ett tal mellan 1 och 20"));

    if(svar>20){
        alert("Mellan 1 och 20 sa jag!");
    }

    else if(svar>answer){
        alert("för högt,testa igen");

    }
    else if(svar<answer){
        alert("för lågt, testa igen!");
    }
    else if(svar === answer){
        alert("du vann!");
        incorrect =  false;

    }

else{
    alert("du suger");
}
}