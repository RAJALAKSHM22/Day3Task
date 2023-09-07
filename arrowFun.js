console.log("PROGRAM IN ARROW FUNCTION");

// a) Print odd numbers in an array

let num=[1,3,5,34,55,68];
let Odd=(num)=>{
    let count=[];
    for(let i=0;i<num.length;i++){
         if(num[i]%2==1){
             count.push(num[i]);
        }
    }
    return count;
}
console.log(Odd(num));

// b) Convert all the strings to title caps in a string array

let STR= ["apple","orange","grape"];
let TitleCap=(STR)=>{
    let NewArray=[];
    for(let i=0;i<STR.length;i++){
        NewArray.push(STR[i].charAt(0).toUpperCase()+STR[i].slice(1));
    }
    return NewArray;
}
console.log(TitleCap(STR));

// c) Sum of all numbers in an array

let Num=[1,3,5,34,55,68];
let Add=(Num)=>{
    let sum=0;
    for(let i=0;i<Num.length;i++){
        sum=sum+Num[i];
    }
    return sum;
} 
console.log(Add(Num));

// d) Return all the prime numbers in an array



// e) Return all the palindromes in an array

let Word=['mam','me','pen','level'];
let Palindrome=(Word)=>{
    rev=[];
    for(let i=0;i<Word.length;i++){
        
        if(Word[i]==Word[i].split('').reverse().join('')){
            rev.push(Word[i]);
        }
    }
    return rev;
}
console.log(Palindrome(Word));
