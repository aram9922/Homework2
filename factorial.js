const factorial= function(a) {
	if(a===0){
		return 1; 
	}
	if(a<0){
		return "You entered a negative number";
	}
	return a*factorial(a-1);
}
console.log(factorial(5));