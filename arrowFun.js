// a) Print odd numbers in an array

let arr=[1,3,5,34,55,68];
let odd=function(arr){
    let count=[];
    for(let i=0;i<arr.length;i++){
         if(arr[i]%2==1){
             count.push(arr[i]);
        }
    }
    return count;
}
console.log(odd(arr));

// b) Convert all the strings to title caps in a string array

let a= ["apple","orange","grape"];
let titleCap=function(a){
    let NewArray=[];
    for(let i=0;i<a.length;i++){
        NewArray.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
    }
    return NewArray;
}
console.log(titleCap(a));

// c) Sum of all numbers in an array

let Arr=[1,3,5,34,55,68];
let add=function(Arr){
    let sum=0;
    for(let i=0;i<Arr.length;i++){
        sum=sum+Arr[i];
    }
    return sum;
} 
console.log(add(Arr));

// d) Return all the prime numbers in an array



// e) Return all the palindromes in an array

let word=['mam','me','pen','level'];
let palindrome=function(word){
    rev=[];
    for(let i=0;i<word.length;i++){
        
        if(word[i]==word[i].split('').reverse().join('')){
            rev.push(word[i]);
        }
    }
    return rev;
}
console.log(palindrome(word));
