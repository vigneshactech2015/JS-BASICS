//value and reference;


//pass by value;
//primitve datatypes means value
//non primitive datatypes means reference

var a="Hello people";

var b=a;
b="New People";
console.log(a);
//it doesn't change original value




//pass by reference
var arr1=[0,1,2,3,4,5];

var arr2=arr1;

arr2[0]=20;

console.log(arr1);

//changes the original value since it occupy the same memory location(address)



//slice copies all the elements value and returns new array
//slice doesn't alter the original element's value.Similar to map

var arr1=[0,1,2,3,4,5];
var arr2=arr1.slice();
arr2[0]=20;
console.log(arr1);