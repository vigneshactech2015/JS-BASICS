//chaining of function

function multiple(num1){
    return function (num2){
        return function(num3){
            return num1*num2*num3;
        }
    }
}

console.log(multiple(1)(2)(5));
