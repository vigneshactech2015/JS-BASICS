//without disturbing original array we can manipulate elements in an array
//applies only for array and not for objects.

//example 1
var arr=[1,2,3,4];

var res=arr.map((element)=>{
    return element*2
})
console.log(res);

//FILTER
var arr=[1,2,3,4];

var res=arr.filter((element)=>element%2===0)
console.log(res);

//example 2

var student=[{name:"alex",marks:60},{name:"bob",marks:70},{name:"alice",marks:80},{name:"doe",marks:90}];
 
var topper=student.filter((element)=>{if(element.marks>60){return element.name}})
console.log(topper);

var newname=topper.map((anything)=>{
    return anything.name
});
console.log(newname);

//example 3

var arr=[1,2,3,4];
 var res=arr.reduce((accumulator,element)=>{
     return accumulator+element})
 console.log(res);

 //if initialize the first value below is the example
 /*var arr=[1,2,3,4];
 var res=arr.reduce((accumulator,element)=>{
     return accumulator+element},100)
 console.log(res);*/

//example for finding max number using reduce

const arr=[5,1,3,2,6];

const output=arr.reduce(function(max,curr){
  if(curr>max){
    max=curr;
  }
  return max
},0);

console.log(output);

 //example 4

  var population=data.map((e)=>{ return e.population}).reduce((accumulator,element)=>{
            return accumulator+element
        })

//example 5

var asiancountries=data.filter((element)=>element.region==='Asia');
console.log(asiancountries);

//example 6

var populationlessthan2lakhs=data.filter((element)=>element.population<200000);
console.log(populationlessthan2lakhs);

//foreach
/*for each function will apply function on each and every element of the array and it won't return anything

return type of forEach is always undefined */


var cflag=data.forEach(element =>{console.log(`${element.name} ${element.capital} ${element.flag}`)});

//example 7

let usd=data.filter((ele)=>{
    for(let i in ele.currencies){
        if(ele.currencies[i].code==='USD'){
            return true;
        }
    }
}).map((ele)=>ele.name);
console.log(usd);
