console.log("PROGRAM IN ARROW FUNCTION");

// a) Print odd numbers in an array
let Odd=(num)=>{
    let count=[];
    for(let i=0;i<num.length;i++){
         if(num[i]%2==1){
             count.push(num[i]);
        }
    }
    return count;
}
console.log(Odd([1,3,5,34,55,68]));

// OUTPUT:
// arrowFun.js:13 (4) [1, 3, 5, 55]

// b) Convert all the strings to title caps in a string array
let TitleCap=(STR)=>{
    let NewArray=[];
    for(let i=0;i<STR.length;i++){
        NewArray.push(STR[i].charAt(0).toUpperCase()+STR[i].slice(1));
    }
    return NewArray;
}
console.log(TitleCap(["apple","orange","grape"]));

// OUTPUT:
// arrowFun.js:26 (3) ['Apple', 'Orange', 'Grape']

// c) Sum of all numbers in an array
let Add=(Num)=>{
    let sum=0;
    for(let i=0;i<Num.length;i++){
        sum=sum+Num[i];
    }
    return sum;
} 
console.log(Add([1,3,5,34,55,68]));

// OUTPUT:
// arrowFun.js:39 166

// d) Return all the prime numbers in an array
let PrimeNo=[];
let Prime=(Num)=>{
    for(let i=0;i<Num.length;i++){ 
        let Count = 1;
        if(Num[i]>1){
            for(let j=2;j<=Num[i];j++){
                if((Num[i]%j)==0){
                    Count++;
                }
                if(Count>2){
                    break;
                }
            }
            if(Count == 2){
                PrimeNo.push(Num[i])
            }            
        }
    }
   return PrimeNo;
}
console.log(Prime([1,4,3,7,8,11,]))

// OUTPUT:
// arrowFun.js:65 (3) [3, 7, 11]

// e) Return all the palindromes in an array
let Palindrome=(Word)=>{
    rev=[];
    for(let i=0;i<Word.length;i++){
        
        if(Word[i]==Word[i].split('').reverse().join('')){
            rev.push(Word[i]);
        }
    }
    return rev;
}
console.log(Palindrome(['mam','me','pen','level']));

// OUTPUT:
// arrowFun.js:81 (2) ['mam', 'level']
