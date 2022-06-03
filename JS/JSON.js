var employees=[{
    name:"vignesh",
    empid:"100",
    email:"vigneshactech2015@gmail.com",
    age:"25",
    salary:"25000",
    address:"abc"
},
{
    name:"ronaldo",
    empid:"101",
    email:"ronaldo@gmail.com",
    age:"24",
    salary:"250000",
    address:"abcd"
},{
    name:"messi",
    empid:"102",
    email:"messi@gmail.com",
    age:"27",
    salary:"350000",
    address:"abcde"
}

]

//normal for loop
//for(i=0;i<employees.length;i++){
    //console.log(employees[i]))
//}

//for in loop is for specific data foreach is for all data
// for(x in employees){
//     console.log(employees[x]);
// }

//for of
for (const element of employees) {

    for(let newelement in element ){
    console.log(newelement,":",element[newelement]);
}
}

//foreach(range based loop) and forof is for array