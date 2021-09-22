function myFunction ( myObj , checkProp) {
    // Only change code below this line
       if ( myObj.hasOwnproperty(checkProp)) {
           return myObj[checkProp];

       }
     return "Not found"

  

// Only change code above this line


} 

console.log( myFunction({title: "Titanic", somg: "My Heart Will Go On", genre : "drama"}, "title"))