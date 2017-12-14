"use strict";
 var array = [5,9,2,5,0,1,4,8,7,6];
for (var i = 0 ; i <= array.length - 1; i++) {
	var x=i;
	while(x > 0 && array[x] < array[x-1])
	{
		var temp=array[x];
		array[x]=array[x-1];
		array[x-1]=temp;
        x--;
	}
}
console.log(array);  // the array;

var str1 = [1,0,0,1,1,0];
var str2 = [1,0,1,0,1,0];
var c=0;
for (var i = str1.length - 1; i >= 0; i--) {
	if(str1[i] != str2[i])
		c++;
}
console.log(c);

//JSON javascript object notation used to give oop property // in APIs most of the formats are of JSON(XML) //version of js ES5 ES6(classes can be made)
var myjson = {name:"koushik"};
myjson.age = 21;
console.log(myjson);
console.log(JSON.stringify(myjson));

var jsonstring = '{"name":"Koushik"}';
console.log(JSON.parse(jsonstring));
