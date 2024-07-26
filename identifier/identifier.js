let name ="alok";
let userName ="singh";
console.log(name);
console.log("this is name" ,userName);
// console.log(first)

// -----------------------topic ---->OPERATOR
console.log(!0);
console.log(!true);
console.log(!1);
console.log(!false);

// ---------- tricky question ----------------------
console.log(!"");// empty string ko false bolte hai so ans is true
console.log(!"hello");//but agr string ke andarr kcuh bhi likh dete hai then true than uska not ans is false 

// --------------------
console.log("hello");
// let a = 1;
// let b = 2;
// let res = a>b
// console.log(res)
// --------------------------------------------------------
let age = 45;
if(!(age <18)){
    console.log("not eligible for work");
}
else{
    console.log("eligible for work");
}


// *******************************question1
// let x =1;
// ++x;
// ++x;
// ++x;
// ++x;
// ++x;
// console.log(++x);
// let y =++x;
// console.log(y);
// y++;
// console.log(y);
// y++
// console.log(y);

// ----------------question2

let a =1;

a=++a;
a=++a;
a=++a;
a=++a;
let b= ++a;
b=++b + ++a;
console.log(a);
console.log(b);

