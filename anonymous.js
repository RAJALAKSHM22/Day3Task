console.log("PROGRAM IN ANONYMOUS FUNCTION");

// A) Print odd No's.
let odd=function(arr){
    let count=[];
    for(let i=0;i<arr.length;i++){
         if(arr[i]%2==1){
             count.push(arr[i]);
        }
    }
    return count;
}
console.log(odd([1,3,5,34,55,68]));

// OUTPUT:
// anonymous.js:14 (4) [1, 3, 5, 55]

// B) Convert the string to title caps.
let titleCap=function(a){
    let NewArray=[];
    for(let i=0;i<a.length;i++){
        NewArray.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
    }
    return NewArray;
}
console.log(titleCap(["apple","orange","grape"]));

// OUTPUT:
// anonymous.js:26 (3) ['Apple', 'Orange', 'Grape']

// C) Sum of all numbers
let add=function(Arr){
    let sum=0;
    for(let i=0;i<Arr.length;i++){
        sum=sum+Arr[i];
    }
    return sum;
} 
console.log(add([1,3,5,34,55,68]));

// OUTPUT:
// anonymous.js:39 166

// D) Return the prime numbers 
let primeNo=[];
let prime=function(Num){
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
                primeNo.push(Num[i])
            }            
        }
    }
   return primeNo;
}
console.log(prime([1,4,3,7,8,11,]))

// OUTPUT:
// anonymous.js:65 (3) [3, 7, 11]

// E) Return the palindromes in an array
let palindrome=function(word){
    rev=[];
    for(let i=0;i<word.length;i++){
        
        if(word[i]==word[i].split('').reverse().join('')){
            rev.push(word[i]);
        }
    }
    return rev;
}
console.log(palindrome(['mam','me','pen','level']));

// OUTPUT:
// anonymous.js:81 (2) ['mam', 'level']

// F) Return median of two sorted arrays 
const arr1=[1,2,3,4],arr2=[5,6,7,8];
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
console.log(median(arr1.concat(arr2)));

// OUTPUT:
// anonymous.js:100  4.5

// G) Remove duplicates from an array
let removeDuplicate=function(Array){
    return [...new Set(Array)];
}
console.log(removeDuplicate([1,1,22,5,23,3,3]))

// OUTPUT:
// anonymous.js:109 (5) [1, 22, 5, 23, 3]

// H) Rotate an array by k times
let rotate=function(at,k){
    let number=at.join('');
    for(let i=1;i<=k;i++){
        number=number.slice(1)+number.charAt(0);
    }
    return number.split('');
}
console.log(rotate([1,2,3,4,5,6,7,8],4));
 
// OUTPUT:
// anonymous.js:122 (8) ['5', '6', '7', '8', '1', '2', '3', '4']
