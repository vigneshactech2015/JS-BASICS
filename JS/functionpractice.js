
//1.Checking whether three digit number
function numbercheck(num){
    if(num>=100&&num<1000){
      return true
    }
    else{
      return false
    }
  }
  
  console.log(numbercheck(10))

//2.Printing multiple function
function function1(){
    console.log("I'm 1");
  }
  
  function function2(){
    console.log("I'm 2");
  }
  function function3(){
    console.log("I'm 3");
  }
  
  function1();
  function2();
  function3();

  //3.get one digit 

  function onedigit(num){
      return num%10;
  }

  console.log(onedigit(1357));

  //4.check three digits are equal or not

  function threevalue(num1,num2,num3){
    if(num1===num2&&num1===num3){
      console.log(true)
    }
    else{
      console.log(false)
    }
  }
  
  threevalue(5,5,5);


  