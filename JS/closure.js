//function bundled along with the lexical scope is closure
//lexical scope is local memory and lexical environment


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();


example for closure is setTimeout

function c(){
    for (let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
c();

function x(){
    for (var i=1;i<=5;i++){
        function close(x){
        setTimeout(function(){
            console.log(x);
        },x*1000);}
        close(i);
    }
}
x();
