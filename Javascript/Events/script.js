console.log("hello");
let mydiv = document.getElementById('wrapper');


function alertPara(event){
    alert("You have clicked on "+event.target.textContent);
}

document.addEventListener('click',alertPara);