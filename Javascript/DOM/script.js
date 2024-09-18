// const heading = document.createElement("h1");
// heading.textContent='hello world';


// const body = document.body;
const p1 =document.createElement("p");
const p3 = document.createElement("p");
p1.textContent = 'hello world';
p3.textContent = 'paragraph-3';
// textcontent tag ke andar likne ka kaam aata hai..


const second = document.querySelector('.p2');
// learn about query selector
second.insertAdjacentElement("beforebegin",p1);
second.insertAdjacentElement("afterend",p3);