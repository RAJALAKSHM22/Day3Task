console.log("PROGRAM IN IIFE FUNCTION");

// A) Print odd No's.

(function(arr){
    let count=[];
    for(let i=0;i<arr.length;i++){
         if(arr[i]%2==1){
             count.push(arr[i]);
        }
    }
    console.log(count);
}) ([1,3,5,34,55,68]);

// B) Convert the string to title caps.

(function(a){
    let NewArray=[];
    for(let i=0;i<a.length;i++){
        NewArray.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
    }
    console.log( NewArray);
}) (["apple","orange","grape"]);


// C) Sum of all numbers

(function(Arr){
    let sum=0;
    for(let i=0;i<Arr.length;i++){
        sum=sum+Arr[i];
    }
    console.log(sum);
} ) ([1,3,5,34,55,68]);


// D) Return the prime numbers 

let PrimeNum=[];
(function(Num){
    for(let i=0;i<Num.length;i++){ 
        let count = 1;
        if(Num[i]>1){
            for(let j=2;j<=Num[i];j++){
                if((Num[i]%j)==0){
                    count++;
                }
                if(count>2){
                    break;
                }
            }
            if(count == 2){
                PrimeNum.push(Num[i])
            }            
        }
    }
    console.log(PrimeNum);
}) ([1,4,3,7,8,11,]);

// E) Return the palindromes in an array

(function(word){
    let rev=[];
    for(let i=0;i<word.length;i++){
        
        if(word[i]==word[i].split('').reverse().join('')){
            rev.push(word[i]);
        }
    }
    console.log( rev);
}) (['mam','me','pen','level']);

// F) Return median of two sorted arrays 

let Arr1=[1,2,3,4],ARr2=[5,6,7,8];
(function(combArr){
    let i=((combArr.length-1));
    
    if(combArr.length%2==1){
      console.log(combArr[i/2] );  
    }
    else{
        let re=combArr[((i+1)/2)-1]+combArr[(i+1)/2];
        let Re=re/2;
        console.log(Re)
    }
}) (Arr1.concat(ARr2));

// G) Remove duplicates from an array

(function(Array){
    console.log(...new Set(Array));
}) ([1,1,22,5,23,3,3]);


// H) Rotate an array by k times

let Rotate=function(at,k){
    let Number=at.join('');
    for(let i=1;i<=k;i++){
        Number=Number.slice(1)+Number.charAt(0);
    }
    return Number;
}
console.log(rotate([1,2,3,4,5,6,7,8],4));
