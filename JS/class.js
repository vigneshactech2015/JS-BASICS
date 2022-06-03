//It is a logical representation to represent your data(it is like a blueprint)

//syntax
//class{
//constructor(){}    
//}

//using constructor we can initialize the values

class Myclass{
    constructor(para1){
        console.log(`my name is ${para1}`);
    }
}

const value=new Myclass("Lavish");

//this is example of object creation


//EXAMPLE 1

class Hotel{
    constructor(){

    }

    breakfast(){
        console.log("Available 8-10")
    }

    lunch(){
        console.log("Available 12-2");
    }

    static pizza(){
        console.log("Pizza");
    }
}

let ref=new Hotel("");
console.log(ref.lunch());
console.log(ref.breakfast());

console.log(Hotel.pizza());

//for static method directly use classname to access it
//for frequent use use static method

//EXAMPLE 2

class vehicle{
    constructor(brand,color,wheels){
        this.brand=brand;
        this.color=color;
        this.wheels=wheels;
    }
    vehicle_brand(){
       return `the brand is ${this.brand}`;
    }
    vehicle_color(){
        return `the color is ${this.color}`;
    }
    vehicle_wheels(){
        return `the number of wheels is ${this.wheels}`;
    }
}

const tata_obj=new vehicle("Tata","White","4");
console.log(tata_obj.vehicle_brand());
const benz_obj=new vehicle("benz","black","4");
console.log(benz_obj.vehicle_color());