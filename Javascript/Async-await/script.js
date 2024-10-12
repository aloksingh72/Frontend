
// creating first async-await function
async function getData(){
    setTimeout(function(){
        console.log("I am inside timeout block");
        
    },3000);

}
getData();



// doing fetch operation on an api using fetch 
// we can use await inside an async function
async function getLink(){

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //parse the  json response
        // because it is also a async function than it also mark as await 
        
        let data = await response.json();
        console.log(data);
        
}
getLink();
