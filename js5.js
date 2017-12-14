"use strict";
var koushik="hello";
function testing()
{
    		var pratsy="bye";
    		//q=1;
}
testing();
var string="hello koushik";
console.log(string.length);
console.log(string.split(","));  //return array of string
console.log(string.replace("hello","Bye"));

//array defination
var array = [1,2,3,4];
var array2 = [6,7,8,9];
console.log(array.toString());
array[1] = 5;
//delete element from array
console.log(array.splice(0,1));
console.log(array.splice(0,0,2,3));
console.log(array.indexOf(3));  //position of first occ. of element
console.log(array.indexOf(5));   //not found -1
console.log(array.push(5));
console.log(array.pop());
console.log(array2.concat(array).sort());
console.log(array2.toString().split(","));

//loops
for (var i = array.length - 1; i >= 0; i--) {
	console.log(array[i]);  //console is used to debug
}
if (array[1]=10) {
	console.log("I am 10");
}
else
{
	console.log("I am not 10");
}

var j=0;
while(j<array.length)
{
	console.log(array[j]);
	j++;
   }
