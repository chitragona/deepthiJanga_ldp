/*1.Takes 5 objects strawberry,pineapple, apple, mango and pear
2.Puts them in an array with name "fruits"
3.Loops through given array of objects and displays all the objects whose total price is greater than 250 rupees.
(Calculate total price and check for condition) 
                quantity    price per unit 
Strawberry      15        10
pineapple        10        40   
apple                 6        20          
mango            12         50
pear                 10        80
Redo the same JS Assignment, using all the following ES6 features:
JavaScript Arrow Functions
JavaScript Classes
Default parameter values
let, const
 */

class WithObject {
    object = {
     fruits :
     [ {
         name : "straberry",
         quantity : 15,
         priceperunit : 10
     },
     {
         name : "pineapple",
         quantity : 10,
         priceperunit : undefined
     },
     {
         name : "apple",
         quantity : 6,
         priceperunit : 20
     },
     {
         name : "mango",
         quantity : 12,
         priceperunit : 50
     },
     {
         name : "pear",
         quantity : 10,
         priceperunit : 80
     },
     ],
      totalPrice : function(quantity, priceperunit = 1)
      {
         return quantity*priceperunit;
     }
 }
 }
 
 withObject = new WithObject()
 
 
 let fruitsCostGreaterThan250 = withObject.object.fruits.map((fruits) => withObject.object.totalPrice(fruits.quantity, fruits.priceperunit) >= 250);
 console.log(fruitsCostGreaterThan250);
 
 
 fruitsCostGreaterThan250 = withObject.object.fruits.filter((fruits) => withObject.object.totalPrice(fruits.quantity, fruits.priceperunit) >= 250);
 console.log(fruitsCostGreaterThan250);