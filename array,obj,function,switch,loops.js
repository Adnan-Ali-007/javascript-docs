//creating arrays and there methods
// const fuck=[7,8,9,10,1,2,3,4,5,6];
// const fuck2= new Array(1,2,3,4,5,6,7,8,9,10);
// const fruits=['grapes','apples','oranges','pears','mangoes','bananas'];
// const mixedfuck=[2,4,'hello',true,undefined,null,{a:1,b:2},new Date()];
// let val;
//get array length
// val=fuck.length;
//check if is array  
// val=Array.isArray(fuck);
//mutating arrays
// fuck.push(23);
// fuck.unshift(720);
// //remove from end
// fuck.pop();
// //remove from front
// fuck.shift();
// //splices value
// // fuck.splice(1,3);
// //reverse
// // fuck.reverse();
// // val=fuck.concat(fuck2);
// val=fruits.sort();
// //use compartors for sorting for asceding and vice versa
// val=fuck.sort(function(x,y){
//     return x-y;
// });
// console.log(val);
// console.log(fuck);
//object literals
// const person={
// firstName:'john',
// lastName:'doe',
// age:30,
// city:'new york',
// interset:['music','movies','sports'],
// address:{
//       street:'50 main st',
//       city:'boston',
// },
// getyear:function(){
// return 2017-this.age;
// }
// }
// let val;
// val=person;
// //get specific value
// // val=person.firstName;
// // val=person['firstName'];
// // val=person.age;
// // val=person.city;
// // val=person.interset[1];
// // val=person.address.city;
// // val=person.address['city'];
// val=person.getyear();
// console.log(val);
//date and time
// let val;
// const today=new Date();
// // val=today;
//  const birthday=new Date('9-10-1981 11:25:00');// manual date
//   val=birthday;
// val=today.getMonth(); //startes month by zero
// // val=today.getDate();
// // val=today.getDay();
// // val=today.getFullYear();
// // val=today.getHours();
// // val=today.getMinutes();
// // val=today.getSeconds();
// val=today.getTime();
// // birthday.setMonth(2);
// // birthday.setDate(12);
// console.log(val);
//if statements and switch
let id;
// if(typeof id!=='undefined')
// {
// console.log(`the id is ${id}`);
// }
// else{
// console.log('no id');
// }
//ternary operator
// if(id===100?'correct':'incorrect');
//switch case
// const color='red';
// switch(color){
// case 'red':
//   console.log('color is red');
//   break;
// case 'blue':
//    console.log('color is blue');
//    break;
// default:console.log('color is not red or blue');
// }
// let day;
// switch(new Date().getDay())
// {
//    case 0:
//    day='sunday';
//    break;
//    case 1:
//    day='monday';
//    break;   
//    case 2:
//    day='tuesday';
//    break;   
//    case 3:
//    day='wedday';
//    break;   
//    case 4:
//    day='thursday';
//    break;   
//    case 5:
//    day='friday';
//    break;
//    case 6:
//    day='saterday';
//    break;   
//    case 7:
//    day='sunday';
//    break;
// }
// console.log(`today is ${day}`);
