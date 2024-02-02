"use strict";
document.querySelector("body").style.backgroundColor ='black';
document.querySelector("body").style.color ='white';
//toString method converts the elements of an a array to string
//join(,) method joins array elements with a given symbol i.e., the comma in this case
//concat() joins two of more arrays
let group1 = ["Bob", "Tonny", "Lee"];
let group2=["Bruno","Ian", "Collins"];
let concatnatedGroups= group1.concat(group2);//joins the two groups
//console.log(concatnatedGroups);

//splice array methods
let newNames= ["Bob", "Tonny", "Lee", "ian", "James"];
let newNamesCopy=[...newNames]//avoid mutation issues
newNamesCopy.splice(0,2, "Tio", "Hardy");
//console.log(newNamesCopy); //cuts and replace

//loop over the array elements
const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
numbers.forEach((numbers) => {
if (numbers%5==0){
	//console.log(numbers);//5,10,15 & 20
}
});

//map()
const newMap=[5,10,15,20];
let doubled= newMap.map((e) => e * 2);
//console.log(doubled);

//filter()
//1.lets filter the even numbers.
const generalNo=[1,2,3,4,5,6,7,8,9,10];
let oddsNo= generalNo.filter((e) => e%2!=0);
//console.log(oddsNo);
//2.Let filter the odd numbers.
let evenNo= generalNo.filter((e) => e%2==0);
//console.log(evenNo);

//reduce()
const allNos= [10,20,30,40,50,60,70,80,90,];
let reducedNo= allNos.reduce((total,currentValue)=>total+currentValue);//loop over and add
//console.log(reducedNo);

//.some()
 let numbersGreaterThan100=allNos.some((n)=> n>100);
 //console.log(numbersGreaterThan100);//false

 //.every()
 let numberDivisibleBy2=allNos.every((n)=> n%2==0);
 //console.log(numberDivisibleBy2);

 //



