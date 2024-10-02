
/*
// Creating an object
const obj={
    name:"Alok Singh",
    age:20,
    city:"Noida"
}
//  accesing the object key value pairs 
console.log(obj.name);
// another ways 
console.log(obj["city"]);
*/

// -----> shallow copy
/*const jack={
    cake:"Chocolate cake",

}
const oggy = jack;
console.log(oggy.cake);
console.log(oggy["cake"])

// ---->deep copy
*/


//***  important ques difference between shallow copy and deep copy??.



// ------------->Object clonning ------

// --->using  Spread operator (...)
/*let  src ={
    age:12,
    height:160

}
let desc = {
    ...age,
}
console.log(desc);
*/
//  ---> using Assign Method 

let  src ={
    age:12,
    height:160
}

let desc = Object.assign({},src);
console.log(src);
console.log(desc);
console.log();
// we can clone multiple object

let src2 ={
    name:"alok",
    branch:"B.tech"
}

let desc2 = Object.assign({},src,src2);
console.log(desc2);

















