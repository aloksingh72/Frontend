/*
//Creation of Array

// By using array literals
let arr = [1,5,5,9,5,56,8];
console.log(arr);

// By using array Constructors

let arr2 = new Array('alok',720,true);
console.log(arr2);

let type=typeof(arr2);
console.log(type);

// Pushing Values into arrays
arr2.push("singh");
console.log(arr2);
arr2.pop();
console.log(arr2);

arr2.push(30);
arr2.push(45);
arr2.push(85);
console.log(arr2);
arr2.splice(1,2,"tinku");
console.log(arr2);

//--->slice methods
let arr3 = new Array('alok','singh','Noida',720,true);
console.log(arr3);
let ans = arr3.slice(1,3);
console.log(ans);

*/

/*
// Map function in array
let arr =[10,20,30];
const output = arr.map((number)=>{
    number= number+1;
    console.log(number);
})
const ans = arr.map((number)=>{
return number*number;

})
console.log(ans);

// --> filter methods

let arr4=[20,3,6,8,9,7];
const result = arr4.filter((number)=>{
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(result);


let arr5 = [10,20,30,40,50,60,70,99];
const res = arr5.filter((value,index,array)=>{
    if(value>30){
        return true;
    }
    else{
        return false;
    }

})
console.log(res);

*/

// --> reduce methods

