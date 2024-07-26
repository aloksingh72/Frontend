var a =3;
let b= 2;
console.log(a);
{//var is store globally 
    var a= 10;// var kabhi locally store nahi hoga
    console.log(a)
    const x = 40;
    console.log(x);
    let y=720;
    console.log(y);
    y=56;
    console.log("this is let updated value "+y);
    // x=34; not allowed to update the const value
    // console.log(x);
}
console.log(a);