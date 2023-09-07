console.log("PROGRAM IN ANONYMOUS FUNCTION");

// A) Print odd No's.
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

// B) Convert the string to title caps.

let a= ["apple","orange","grape"];
let titleCap=function(a){
    let NewArray=[];
    for(let i=0;i<a.length;i++){
        NewArray.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
    }
    return NewArray;
}
console.log(titleCap(a));


// C) Sum of all numbers

let Arr=[1,3,5,34,55,68];
let add=function(Arr){
    let sum=0;
    for(let i=0;i<Arr.length;i++){
        sum=sum+Arr[i];
    }
    return sum;
} 
console.log(add(Arr));


// D) Return the prime numbers 

// let Num=[1,3,5,7,34,55,68,77];



// E) Return the palindromes in an array

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


// F) Return median of two sorted arrays 

let arr1=[1,2,3,4],arr2=[5,6,7,8];
const combArr= arr1.concat(arr2);
let median=function(combArr){
    let i=((combArr.length-1));
    
    if(combArr.length%2==1){
      return (combArr[i/2] );  
    }
    else{
        let re=combArr[((i+1)/2)-1]+combArr[(i+1)/2];
        let Re=re/2;
        return (Re)
    }
}
console.log(median(combArr));

// G) Remove duplicates from an array



// H) Rotate an array by k times

let atFirst=[1,2,3,4,5,6,7,8];





