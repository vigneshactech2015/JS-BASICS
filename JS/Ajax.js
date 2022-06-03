var xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v2/all");

xhr.send();

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        //this here means xhr
        var data=JSON.parse(this.response);

      /*  var population=data.map((e)=>{ return e.population}).reduce((accumulator,element)=>{
            return accumulator+element
        })*/

        var population=data.reduce((accumulator,element)=>{
            return accumulator+element.population;
        },0)
    console.log(population);
}
    else{
        console.log(xhr.responseText);
    }
};
