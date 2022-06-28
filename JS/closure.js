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
