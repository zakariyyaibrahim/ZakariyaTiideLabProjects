/* 1. Write a function called squareNumber that will take one argument (a number), 
square that number, and return the result. 
It should also log a string like "The result of squaring the number 3 is 9."

*/
function sqaureNumber(numb){

	const square = Math.pow(numb,2);
	return square;
	}
 console.log("The result of squaring 5 " + " is " + sqaureNumber(5));

/*2. Write a function called halfNumber that will take one argument (a number), 
divide it by 2, and return the result.
 It should also log a string like "Half of 5 is 2.5.".

*/
function  halfNumber(numb){

 	const half = numb/2;
 	 console.log("half of  " + numb + " is " + half);
 	return half;
 }


halfNumber(2450);
/* 
formula for finding percentage is: (x/100)*y == z
let our n1 be z, n2 = y and x = the percentage.
therefore our formula becomes: x = (100*z)/y;
 */

/*3. Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number, 
and return the result. 
It should also log a string like "2 is 50% of 4."*/
function percentOf(n1, n2){

 	const percentage = (100*n1)/n2;
 	console.log(n1 +" is" + " " +percentage+ "% of "+n2 );
 	return percentage;
}
percentOf(25000,1000000);
  
 
 /*4. Write a function called areaOfCircle that will take one argument (the radius), 
 calculate the area based on that, and return the result.
  It should also log a string like 
  "The area for a circle with radius 2 is 12.566370614359172."

 */ function areaOfCircle(r){
  	const 	PI = 22/7;
  	const area = PI *(Math.pow(r,2));
  	const a = area.toFixed(2);
  	console.log(`the area of a circle with radius ${r} is ${area} and the result  to 2 decimal places ${a}`);
  	return area;
  	
}
areaOfCircle(5.3);
/* 5. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier:
1) Take half of the number and store the result.
2) Square the result of #1 and store that result.
3) Calculate the area of a circle with the result of #2 as the radius.
4) Calculate what percentage that area is of the squared result (#3).


*/
/*

function genFunctions(resNumb){
	 const firstResult = halfNumber(resNumb);
	 const secondResult = sqaureNumber(firstResult);
	 const thirdResult = areaOfCircle(secondResult);
	 const finalResult = percentOf(thirdResult, secondResult);
	 alert(`Our final result will look like this : ${finalResult}`);
	  return finalResult;


}


genFunctions(3);


*/


 