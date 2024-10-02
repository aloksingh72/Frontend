console.log("hello");
class Human {
    //---->states
    age;
    //# is used for private members
    #wt = 62;
    height = 180;

    // value intialized by constructor 
    // here we use constructor keyword 

    constructor( age, height){
        this.age = age;

        this.height = height;

    }

    //--->behaviour
    walking() {
        console.log("I am walking ", this.#wt);
    }
    running() {
        console.log("I am running");
    }

    // getters for class
    get fetchWeight() {
        return this.#wt;

    }
    set modifyWeight(val) {
        this.#wt = val;


    }
}

let obj = new Human(24,190);

// console.log(fetchWeight());

console.log(obj.fetchWeight);
// console.log(running());

console.log(obj.height);
console.log(obj.age);

obj.running();
obj.walking();


// ----->default parameters

function sayName(myName = "Alok Singh"){
    console.log("my name is:",myName);
}
sayName("Singh is king");


