//Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, targetSum) {
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }

    return pairs;
  }
  const integerArray = [2, 4, 3, 1, 5, 6];
  const targetSum = 7;
  const result = findPairsWithSum(integerArray, targetSum);

  console.log(`Pairs with sum ${targetSum}:`);
  result.forEach(pair => {
    console.log(`(${pair[0]}, ${pair[1]})`);
  });


  console.log("--------------Q1 END-------------");
//   Pairs with sum 7:
//   (2, 5)
//   (4, 3)
//   (1, 6)



//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.


/* Function to reverse arr[] from start to end*/
function rvereseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

/*  function to print an array */
function printArray(arr, size) {
    for (var i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}


var arr = [1, 2, 3, 4, 5, 6];
var n = 6;
// To print original array
printArray(arr, n);

// Function calling
rvereseArray(arr, 0, n - 1);

console.log("Reversed array is");

// To print the Reversed array
printArray(arr, n);

console.log("----------------- Q2 END ----------------")


//Q3. Write a program to check if two strings are a rotation of each other?


function isRotation(a, b)
{
	var n = a.length;
	var m = b.length;
	if (n != m)
		return false;

	var lps = Array.from({length: n}, (_, i) => 0);


	var len = 0;
	var i = 1;
	lps[0] = 0; // lps[0] is always 0

	// the loop calculates lps[i] for i = 1 to n-1
	while (i < n) {
		if (a.charAt(i) == b.charAt(len)) {
			lps[i] = ++len;
			++i;
		}
		else {
			if (len == 0) {
				lps[i] = 0;
				++i;
			}
			else {
				len = lps[len - 1];
			}
		}
	}

	i = 0;

	// match from that rotating point
	for (k = lps[n - 1]; k < m; ++k) {
		if (b.charAt(k) != a.charAt(i++))
			return false;
	}
	return true;
}


var s1 = "ABACD";
var s2 = "CDABA";
console.log(isRotation(s1, s2) ? "true" : "false");

console.log("-------------- Q3 END ---------------")


//Q4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

var someString = 'aabcbd';
console.log(firstNonRepeatedCharacter(someString));

console.log("---------------Q4 END --------------")


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


// solve tower of hanoi puzzle
function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 0)
		{
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		console.log("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod +"</br>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	// Driver code
	var N = 3;
	
	// A, B and C are names of rods
	towerOfHanoi(N, 'A', 'C', 'B');

    console.log("---------------Q5 END --------------")


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

	function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}

	// Convert postfix to Prefix expression
	function postToPre(post_exp)
	{
		let s = [];

		// length of expression
		let length = post_exp.length;

		// reading from right to left
		for (let i = 0; i < length; i++) {

			// check if symbol is operator
			if (isOperator(post_exp[i])) {

				// Pop two operands from stack
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();

				// concat the operands and operator
				let temp = post_exp[i] + op2 + op1;

				// Push String temp back to stack
				s.push(temp);
			}

			// if symbol is an operand
			else {

				// Push the operand to the stack
				s.push(post_exp[i] + "");
			}
		}

		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	
	let post_exp = "ABC/-AK/L-*";
		
	// Function call
	console.log("Prefix : " + postToPre(post_exp));
	
console.log("---------------Q6 END --------------")


//Q7. Write a program to convert prefix expression to infix expression.


/*function convert(input){
    var x = input.split(''); // splits each variable and stores it in an array
    var output = "";
    
    var symbols = ['+', '-', '*', '/', '%'];
    // lets loop through all the values in x, starting at position 0
    for(var i = 0; i < x.length; i++){
      if(symbols.includes(x[i])) { 
        for(var j = 0; j < input.length; j+=2){
          if(output[j] == " "){
            
            output = output + x[i];
          }
        }
      }
      
      else{
        output = output + x[i];
        console.log(output);
      }
    }
  }
  
  console.log(convert("+ 1 2"));
*/



	// Javascript program to convert prefix to Infix
	
	function isOperator(x)
	{
		switch(x)
		{
			case '+':
			case '-':
			case '*':
			case '/':
			case '^':
			case '%':
				return true;
		}
		return false;
	}

	// Convert prefix to Infix expression
	function convert(str)
	{
		let stack = [];

		// Length of expression
		let l = str.length;

		// Reading from right to left
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];

			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()

				// Concat the operands and operator
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{

				// To make character to string
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	
	let exp = "*-A/BC-/AKL";
	
	console.log("Infix : " + convert(exp));
	

console.log("---------------Q7 END --------------")


//Q8. Write a program to check if all the brackets are closed in a given code snippet.

//program for checking balanced brackets

// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
	let stack = [];

	// Traversing the Expression
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			
			// Push the element in the stack
			stack.push(x);
			continue;
		}

		// If current character is not opening
		// bracket, then it must be closing.
		// So stack cannot be empty at this point.
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}


let expr = "([{}])";

if (areBracketsBalanced(expr))
	console.log("Balanced ");
else
	console.log("Not Balanced ");


console.log("---------------Q8 END --------------")


//Q9. Write a program to reverse a stack.

/*class Stack {
 
    constructor(){  
        this.elements = []; 
    }
    push(element){ 
        this.elements.push(element) 
    }
    pop(){ 
        if(this.elements.length === 0) return "Underflow situation"; 
        else return this.elements.pop();
    }
    isEmpty(){ 
        if(this.elements.length > 0) return false;
        else return true;
    }
}
function reverse(str){
    //Creates a new stack
    let stack = new Stack();
     
    let i = 0;
    let reversedStr = "";
    //Adds all the characters to the stack.
    while (i !== str.length) {
        stack.push(str.charAt(i));
        i++;
    }
  
    //Creates a reversed string by popping the stack.
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    //returns the reversed string.
    return reversedStr;
}
*/

// JavaScript code to reverse astack using recursion

let st = [];

function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
        let a = st.pop();
		insert_at_bottom(x);
        st.push(a);
	}
	
	
}
	// reverses the given stack using
	// insert_at_bottom()
function reverse()
{
	if(st.length > 0)
		{
			let x = st.pop();
			reverse();
			insert_at_bottom(x);
		}
}

st.push('1');
st.push('2');
st.push('3');
st.push('4');

console.log("Original Stack");

console.log(st.join(" "));


reverse();

console.log("Reversed Stack");

console.log(st.join(" "));

console.log("---------- Q9 END ----------------")

//Q10. Write a program to find the smallest number using a stack.

/*function smallest(){
    if(arguments[0] instanceof Array)
      arguments = arguments[0];
  
    return Math.min.apply( Math, arguments );
  }
  function largest(){
    if(arguments[0] instanceof Array)
      arguments = arguments[0];
  
    return Math.max.apply( Math, arguments );
  }
  var min = smallest(10, 11, 12, 13);
  
  
  console.log("Smallest: "+ min );
*/

class MinStack {
	constructor() {
	  this.dataStack = []; // Stack to store elements
	  this.minStack = [];  // Stack to track minimum elements
	}
	push(item) {
	  this.dataStack.push(item);
	  if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
		this.minStack.push(item);
	  }
	}
  
	pop() {
	  if (!this.isEmpty()) {
		if (this.dataStack[this.dataStack.length - 1] === this.minStack[this.minStack.length - 1]) {
		  this.minStack.pop();
		}
		return this.dataStack.pop();
	  }
	  return null;
	}
  
	top() {
	  if (!this.isEmpty()) {
		return this.dataStack[this.dataStack.length - 1];
	  }
	  return null;
	}
  
	getMin() {
	  if (!this.isEmpty()) {
		return this.minStack[this.minStack.length - 1];
	  }
	  return null;
	}
	isEmpty() {
	  return this.dataStack.length === 0;
	}
  }
  
  const minStack = new MinStack();
  minStack.push(3);
  minStack.push(5);
  minStack.push(2);
  minStack.push(1);
  
  console.log(`Minimum element: ${minStack.getMin()}`); 




console.log("---------- Q10 END ----------------")