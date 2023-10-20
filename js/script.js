//Dichiarazione e inizializzazione di variabili
const rowElem = document.querySelector(".row");
console.log(rowElem);
let grid = "";
let value = "";

//Ciclo
for (let i = 1; i <= 100; i++)
{
    let result;
    if (i % 3 === 0 && i % 5 === 0)
    {
        result = "fizzbuzz";
        value = "FizzBuzz"
    }
    else if (i % 3 === 0)
    {
        result = "fizz";
        value = "Fizz"
    }
    else if (i % 5 === 0)
    {
        result = "buzz";
        value = "Buzz"
    }
    else
    {
        result = "normal";
        value = i;
    }
    grid += `<div class="square ${result}"> ${value} </div>`;
    console.log(`iterazione ${i}`, grid);
}   

//Scrittura nel HTML
rowElem.innerHTML = grid;
