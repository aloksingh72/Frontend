/*function printName(){
    console.log("hello world!")

}
printName();
*/

/*------------->function with arguments  
function fullName(firstName,lastName){
    let fullName = firstName + " " + lastName;
    return fullName;

}
let Name =fullName("alok","singh");
console.log(Name);
*/


/*
--------------->call back function 

function company (call,name,city){
    call(name,city);
    console.log("hello world!");
}

function user(name,city){
    console.log(`user name ${name}`);
    console.log(`city ${city}`);
}

console.log(company(user,"Tinku","noida"));
*/



const genric=(printName,userName)=>{
    printName(userName);
};


const printName=(userName)=>{
    console.log(`user name is ${userName}`);
    return userName ;
}

let ans = genric(printName,"Nobita");
console.log(ans);
