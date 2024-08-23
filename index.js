function reverseString(str){
    return str.slipt('').reverse().join('');

}
//function countcharacters

function CountCharacters(str){
    return str.length
}
//function findmaximum
function Min(num) {
    if (num.length === 0) 
    return undefined;
    let min = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
        if(max < arr[i]){
            max = arr [i]
        }
    }
    return {x:max,y:min}
}

//Sum of Array

function SumArray(arr){
    return arr.reduce ((acc,num) => acc +num , 0);
}
console.log(sumArray([1,2,3,4,5]));

//Filter Array

function FilterArray(arr , condition){
    return arr.Filtre(condition);
}
const isEven = num => num % 2 === 0;
console.log (FiltreArray([1,2,3,4,5], isEven));

//Capitalize Words

function CapitalizeWords(arr){
    let y= "".
    for (i any <X.length ; i++){
        if (i ===0 || x[i-1] ===" "){
            y = y +x[i].toUpperCase();
        }
        else{
            y = y +x[i];
        }
    }
    return y;
}
console.log(capitalize("hello go my code"))

//Factorial
function factorial(n) {
    let result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(4));

//fibonacci
function Fibonacci(n) {
    const fibSequence = [];
    if (n <= 0) return fibSequence;
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    fibSequence.push(0, 1);
    for (let i = 2; i < n; i++) {
        const nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextNumber);
    }

    return fibSequence;
}

//Prime Number Check
function Prime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 1 === 0 || num % 3 === 0) return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}