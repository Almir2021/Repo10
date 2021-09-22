// Create lion object here
 var lion = {
     mane: "Simba" ,
     legs : 4,
     tails : 1

 }

// End of lion Object
 function myFunction( key , value ) {
     // Only change code below this line
     lion [key] = value;

     return lion;
      // Only change code above this line
 }
console.log(myFunction("roar" , "roar-roar"));

module.exports = myFunction;

