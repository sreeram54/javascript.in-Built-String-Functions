var x = 100;
var y = 200;
   
var z1 = x+y;
var z2 = x.toString() + y;
   
console.log(z1); // Output: 300 
console.log(z2); // Output: 100200


 var myobj2={
    name:'harsha',
    age : 25,
    favLanguage:'Python',
    car:'Ford'
 }
   var myobj3={
    name:'Amie',
    age:25,
    favLanguage:'Rails',
    sports:'soccer'
   }

   var newobj=object.assign({},myobj2,myobj3)

 console.log(newobj)