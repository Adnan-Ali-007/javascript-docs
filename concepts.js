// dom manipulation
// console.log('dom manipulation');
// let a=document;
// a=document.body;
// a=document.forms;
// a=document.all;
// console.log(a);
//  var myarr=["string",1,[2,3,4],{name:"harry",marks:34}]; //array in js
/*var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2)); */
/*var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.*/
/*Map - The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element. For example, the following code will return an array of each element multiplied by 2:*/
// var myArray = [1, 2, 3, 4, 5];
// var multipliedArray = myArray.map(function(element)
//  {
//     return element * 2;
// });
// console.log(multipliedArray);
//  console.log(myarr);
// var dte=new Date();
// dom and bom
//console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));
// document.getElementById("myElement").innerHTML = "This is my new text";
// window.location.href = "https://www.example.com";
// let element=document.getElementById('myfirst');
// element.style.color='red';
// element.innerHTML='<b>this is my first element</b>';
// element.innerText='HARRY is a good boy';
// let sel=document.querySelector('#myfirst'); // for element
// let sel1=document.querySelector('.child'); // for class
// let elem=document.getElementsByClassName('child');
//if (navigator.userAgent.indexOf("Chrome") !== -1) {
//    console.log("The user is using Google Chrome");
// }
// console.log(${screen.width},screen height is ${screen.height});
// if (navigator.userAgent.indexOf("Chrome") !== -1) {
//    console.log("The user is using Google Chrome");
// }
// console.log(elem);
// function callbacks
// const mytimeout=setTimeout(myGreeting,5000);
// callback function is a function A callback is a function passed as an argument to another function.
// //function myDisplayer(some) {
//    document.getElementById("demo").innerHTML = some;
// }
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }
// myCalculator(5, 5, myDisplayer); In the example above, myDisplayer is a called a callback function.
// It is passed to myCalculator() as an argument.
// setTimeout(myFunction, 3000);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// }
//callback ex
// setTimeout(function(){
// console.log("hello")
// },5000)
// how callbacks are used we use an api suppose we want another api to excute after that so we wrapp int into the callback of api
// const cart=["und","shirt","belt"];
//api.createorder(cart,function ()
// {   so we see a hell like loop here
//api.payment(function(){ whenever we callback a function we gave control to another api or function so this is a problem
   //api.ordrsummry
// })
// })
//const promise= createOrder(cart)
//{data:
// const promise=createorder(cart) once data is returned to promise we use .then to callback function solves precious problem of inversion control
// promise.then(functionc(orderId)
// {
// proceedtopayment(orderId)   
// }
// )
//the promise has result and state states are fulfiled rejected pending these objects are immutable cant just edit the data control over promise resolved just once
// promis is an objct repsnting an eventual completion of asynchronius operation.
// promise chaining helps in vertcial fashion and get move out of callback hell with trust in transcation with one promise in another
//scope means where you can access a specific variable in a function
// lexical environment is the local memory along with lexical environment of its parent where the code is present 
// if js engine doesnt find anything in main memory it goes in the scope chain
//create and consuming a promise





