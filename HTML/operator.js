
let a= 4;
let b= "5";

console.log(a+b);
//  compound operator 
//  a+=5; iska matlab hai a= a+5;
// a-=3;---->>> a= a-3;
// a*=2;--->a=a*2;

// to check the type of operator is
console.log(typeof(a));
console.log(typeof(b));
console.log(a>b);
// Releational operator 
/* == is called lose equality matlab  apne aap se typeconversion ho jayega 
  jisko implicit type conversion bolte hai...
 != lose not equality
*/ 
let x= 10
let y="10"
console.log(x==y);
console.log(x!=y);
// to avoid this problem we use strict equality
// === triple equality isme apne aap se type-conversion nhi hoga
let z= 10;
let n="10";
console.log(z===n); 
// strict not equality
// !==
// for example
let m=10;
let l=10;
console.log(m!==l);
/*
---------------Logical operator --------------------
logicl AND (&&) 
logical OR (||)--> pipeline Operator bhi kahte hai .. agar kahi bhi true hoga then true hoga 
                
*/
let w=10;
let f=30;
let u=60;
let p=29;

let output = w>f && u>p ;
console.log(output);
// similarily or ke liye bhi kar sakte hai...
/* 
Ternary operator :
______?_____:____;
question mark ke phele conditon hogi agar conditon true hogi then qyusetion mark ke just 
baad wala statement execute hoga otherwise colon ke baad wala statement. 
*/

let r=10;
let g=20;
let o=30;
// greatest among three
let res = (r>g &&r>o) ?r:
console.log(res);

