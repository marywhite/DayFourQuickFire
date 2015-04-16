/* For this challenge, you will be working with Multi-Dimensional array (an Array that contains arrays).
The arrays that are contained in Multi-Dimensional array should contain numbers, no greater than 9.
Create 6 of these types of array, each containing 8 values.
Now push each of those individual arrays into an another array.

Create a function that takes in the now multi-dimensional array as an argument.
The function should loop through the array, it should then loop through the next array, adding 1 then multiplying by 2 for each value in that array.

Console.log each of the arrays within the main array.

Hard Mode
When adding 1 to each of the values, do so by calling a function on the value, then returning the value.

Pro Mode 
When multiplying by 2 to each of the values, do so by calling a function on the value, then returning the value.
*/

 var bigArray = buildDimensionalArray();
 console.log(bigArray);

 console.log(modifyArray(bigArray));

function modifyArray (array) {
	for (var i = 0; i < array.length; i++){
		for (var j = 0; j < array[i].length; j++){
		array[i][j] = timesTwo(addOne(array[i][j]));
	}
}
	return array;
}

function buildDimensionalArray () {
var dimensionalArray = [];	
	for (var i = 0; i < 6; i ++){
		dimensionalArray[i] = randomArray();
	}
return dimensionalArray;	
}

function randomArray () {
var newArray = [];	
	for (var i = 0; i < 8; i++){
		newArray[i] = Math.round(Math.random() * (9));
	}
	return newArray;
}

function addOne(val) {
	return val++;
}

function timesTwo(val){
	return val *= 2;
}