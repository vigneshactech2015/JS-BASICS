//SPREAD

//It is a shallow copy of js object
//copying of one element with other element


/*let arr1=["a","b","c"];
let arr2=["z","y",...arr1,"p","q"];
console.log(arr2);*/

//example 1
const android=["samsung","moto","google"];
const iphone=["6","7","8"];
const phone=[...android,...iphone,"blackberry"];
console.log(phone);

//example 2
function myfun(num1,num2,num3){
    console.log(num1+num2+num3);
}
let values=[10,50,60];
myfun(...values);


//REST PARAMETER-skips before parameter value
//return type of rest parameter is always an array

//EXAMPLE 1
function myfun(value1,value2,...third){
    console.log(third);
}

myfun(10,20,30,40,50);

//example 2

function sum(...rest){
    let res=0;
    for(let i of rest){
        res=res+i;
    }
    return res;
}

console.log(sum(12,12));
console.log(sum(12,13,14));