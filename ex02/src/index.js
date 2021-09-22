// Only change code below this line
  myClothes = {
      hat : "Fedora",
      shirt: "Nike",
      shoes : "Converse"

  }; 
   function myFunction (myObj){

    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return { hatValue,shirtValue , shoesValue};
  } 


// Only change code above this line
 console.log(myFunction(this.hatValue));

 module.exports = myFunction(myClothes);
