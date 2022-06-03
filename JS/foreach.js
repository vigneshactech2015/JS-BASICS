var laptop=[{
    brand:"dell",
    model:"x1"
},
{
    brand:"lenovo",
    model:"ideapad"
},
{
brand:"apple",
model:"macbook air"
}]

laptop.forEach((a)=>{
    for(let key in a){
        console.log(`${key}:${a[key]}`);
    }
})

// Number+Number=>Add
// boolean+number=>add
// boolean+boolean=> add
// Number+string =>Concat
// String+Boolean=>concat
// string+string=> concat