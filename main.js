//Ceci est un programme de la conjecture de syracuse par Gianni HUYNH
// All rights reserved 2021

console.log("----------------------------------------------------------------------------------");
console.log("Welcome on Syrac.js 💷, syracuse conjecture calculator in JavaScript, By Gianni HUYNH");

console.log("----------------------------------------------------------------------------------");



function launchCalcul(){
    let textNumber = document.getElementById("input").value ;
    let number = parseInt(textNumber);
    let basNumber = number;
    let i = 0;
    while (number != 1){

        if (number %2 == 0){
            number = number/2;
    
        }
    
        else{
            number = (number * 3) + 1;
        }
    
        i++;
    
    }
    
    window.alert("Calcul done 🚀 the result of the number you have choose (" + basNumber + ") is now " + number + " with " + i + " loops ! ➰");
    
    

}

