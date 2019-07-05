// Write three binary functions, add, sub, mul that take two numbers and
// return their sum, difference and product.
function add(num1,num2) {
  return num1 + num2
}

function sub(num1,num2) {
  return num1 - num2
}

function mul(num1,num2) {
  return num1 * num2
}


// Write a function identityf that takes an argument and returns
// a function that returns that argument:
function identityf(arg) {
  return function(){ return arg }
}


// Write a function addf that adds from two invocations:



// Write a function liftf which takes a binary function, and
// makes it callable with two invocations.



// Write a function curry that takes a binary function
// and an argument, and returns a function that can take a
// second argument:



// Without writing any new functions, show three ways to create
// the inc function:
// var inc = _ _ _;
// inc(5); 			// 6
// inc(inc(5));		// 7



// Write a function twice that takes a binary function
// and returns a unary function that passes it's argument
// to the binary function twice:



// Write reverse, a function which reverses the arguments of
// a binary function



// Write a function composeu, that takes two unary functions
// and returns a unary function that calls them both:



// Write a function composeb that takes two binary functions
// and returns a function that calls them both:



// Write a limit function that allows a binary function to
// be called a limited amount of times.



// Write a from function that produces a generator
// that will produce a series of values:



// Write a to function that takes a generator and an end
// value, and returns a generator that will produce numbers
// up to that limit:



// Write a fromTo function that produces a generator that
// will produce values in a range:



// Write an element function that takes an array and a
// generator and returns a generator that will produce elements
// from an array:



// Modify the element function so that the generator argument
// is optional. If a generator is not provided, then each of
// the elements of the array will be produced:



// Write a collect function which takes a generator and an
// array and produces a function that will collect the results
// in the array:



// Write a filter function that takes a generator and a
// predicate and produces a generator that produces only the
// values approved by the predicate:



// Write a concat function that takes two generators,
// and produces a generator that combines the sequences:



// Write a function gensymf that makes a function that
// generates unique symbols:



// Make a function fibonaccif that returns a generator
// that will produce the next set of Fibonacci's number:



// Write a counter function that returns an object
// containing two functions that implement an up/down counter
// hiding the counter:



// Make a revocable function that takes a binary function,
// and returns an object containing an invoke function that can
// invoke the binary function, and a revoke function that disables
// the invoke function:



// Write a function m that takes a value and an optional
// source string and returns them in an object:



// Write a function addm that takes two m objects and
// returns an m object:



// Write a function liftm that takes a binary function and
// a string and returns a function that acts on m objects:




// Modify the function liftm so that the functions it produces
// can accept arguments that are either numbers or m objects:



// Write a function exp that evaluates a simple array expression:



// Modify exp to evaluate nested array expressions:



// Write a function addg that adds from many invocations,
// until it sees an empty invocation:



// Write a function liftg that will take a binary function and apply
// it to many invocations:



// Write a function arrayg that will build an array from
// many invocations:



// Make a function continuize that takes a unary function,
// and returns a function that takes a callback and an
// argument:



// Make an array wrapper object with methods get, store, and
// append, such that an attacker cannot get access to the private
// array:



// Make a function that makes a publish/subscribe object. It
// will reliably deliver all publications to all subscribers
// in the right order:
