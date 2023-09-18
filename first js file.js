/* first test
var score= 8;
if (score > 0 && score < 10) {
    console.log("Mid-Level skills: True")
    
} else {
    console.log("not yet")
}
*/

//second test exercise: advanced use operators
//var timeRemaining=0;
//var energy=10;
//console.log("Game over: ", timeRemaining == 0 || energy == 0);

//conditional test
//var age=10;

//conditional test no 3 for modulus operator//
/*var num1 = 2;
var num2 = 5;
var test1 = num1%2;
var test2 = num2%2;
var result1 = (test1 == 0);
var result2 = (test2 == 0);
console.log("is", num1, "an even number?", result1)
console.log("is", num2, "an even number?", result2)*/

//small program to determine numbers 1-10 are even and only print those
/*
var num = 0;
var test = num%2;
var result = (test == 0);
//console.log(result);
//console.log(test);
//loop that logs 1-10 in console
for (var i = 0; i < 11; i++) {
//    console.log(num + i);
var evenNo = (num + i);
//console.log(evenNo);
if (evenNo%2 == 0) {
    console.log(evenNo)
}
}
*/

//working with conditionals
//switch statements
/*var day = "Monday";
switch (day) {
    case "Monday":
        console.log("Do something");
        break;
    case("Tuesday"):
        console.log("Time to move");
        break;
    default:
        console.log("oh well")

}*/

//for and while loops

/*for (var i = 0; i < 11; i++) {
    console.log(i);
}
console.log("Counting Completed")

for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Counting Completed")*/
/*var i = 5;
while (i > 5) {
    console.log(i);
    i = i - 1;
}
console.log("counting complete!")*/

/*for (var i = 1; i < 11; i++) {
    if (i == 1) {
        console.log("GOLD MEDAL");
        
    } else if (i == 2) {
        console.log("SILVER MEDAL");
    } else if (i == 3) {
        console.log("BRONZE MEDAL");
    } else {
        console.log(i);
    }

}
for (var i = 1; i < 11; i++) {
    switch(i) {
        case 1:
            console.log("G");
            break;
        case 2:
            console.log("S")
            break;
        case 3:
            console.log("B")
            break;
        default:
            console.log(i);
    }
}
*/

//arrays Week 2 - basics of JS
/*function letterFinder(word, match) {
for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
        console.log("found the", match, "at", i );
    } else {
        console.log("---- no match found at", i);
    }
}
}

letterFinder('test', 't'); */

//making a simple deck of cards and hand dealer array
/*var players = [];
for (var i = 1; i < 5; i++) {
    players.push();
    for (var j = 0; j < 14; j++) {
        players.push([j]);
    }

}



console.log(players);
*/

//lab 3 creating arrays and objects
/*var clothes = [];
clothes.push("jumper");
clothes.push("shoes");
clothes.push("jeans");
clothes.push("t-shirts");
clothes.push("stilletos");
clothes.pop();
console.log(clothes);
console.log(clothes[3]);
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);*/


//functions - week 3
/*function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal.dog;
meal.dog
console.log(dog.food);

function one() {
    return 2;
}
function two() {
    return 1;
}

function calculate(value1, value2) {
    return value1() + value2() + value2()
}
console.log(calculate(one, two));*/

//OOP week 4
//object practice

/*var purchase = {
    shoes: 175,
    shipping: 7.5,
    totalPrice: function() {
        var calculation = this.shoes * this.shipping;
        console.log(calculation);
    }
}
purchase.totalPrice;
*/
/* this is incorrect
class wardrobe {
    tshirts;
    pants;
    socks;
    getDressed: function() {
       myOutfit = this.tshirts + this.pants;
       console.log(myOutfit); 
    }
}
console.log(wardrobe.tshirts);
//something not working here...
*/
/*class Wardrobe {
    constructor(tshirt, pants) {
        this.tshirt = tshirt;
        this.pants = pants;
    }
}

var myFirstCloset = new Wardrobe("CK", "Levis");
console.log(myFirstCloset);
console.log(Wardrobe.tshirt);*/

/*class Cake {
    constructor(lyr) {
        this.layers = lyr + 1;
    }
}

var result = new Cake(1);
console.log(result.layers);

class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);*/
/*
class Animal {

}
class Cat extends Animal {
    constructor() {
        super();
        this.noise = "meow";
    }
}
var result = new Animal();
console.log(result.noise);*/

/*const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);*/
/*
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set);*/

/*let obj = {
    key: 1,
    value: 4,
};
let output = {...obj}
output.value -= obj.key;
console.log(output.value);*/

//interactive JS test
/*var h1 = document.querySelector('h1');
var array = ["first click", "second click", "third click"];

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break
        case arr[1]:
            h1.innerText = arr[2];
            break
        case arr[2]:
            h1.innerText = arr[3];
            break
        default:
            h1.innerText = arr[0];
    
    }
}
h1.addEventListener('click', handleClicks);*/
/*
function count(...food) {
    console.log(food.length);
}
count("burgers", "fries", null);
*/

//first proper assignment lulu lemon
/*You will need to write a function declaration which will be able to do two things:

If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

The expected outcome is that all the dishes' names and prices will be shown in the console output.

The text below shows the output that your code should produce:

Prices with 20% tax:
Dish: Italian pasta Price (incl.tax): $ 11.46
Dish: Rice with veggies Price (incl.tax): $ 10.38
Dish: Chicken with potatoes Price (incl.tax): $ 18.66
Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

Prices without tax:
Dish: Italian pasta Price (incl.tax): $ 9.55
Dish: Rice with veggies Price (incl.tax): $ 8.65
Dish: Chicken with potatoes Price (incl.tax): $ 15.55
Dish: Vegetarian Pizza Price (incl.tax): $ 6.45*/
var dishData = [];
function getPrices(taxBoolean) {
for (var i = 0; i = dishData.length; i++ ) {
let finalPrice;

}
}