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




// V-imp closure function

/*
closure me function ko reequired data ke saath bind kar diya jata hai
    closure is (function + required data)
*/ 

function outerFunction(){
    let name = "alok";
    function innerFunction(){
        console.log(name);
        
    }
    return innerFunction;
}

let inner = outerFunction();
inner();//here inner function gives names as output due to closure