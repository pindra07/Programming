package main

import "fmt"

// functions in go
// return types
func add(a int, b int) (int, int) {
	return a+b, a-b
}

// multiple return values in go
// go supports multiple return values
func vals() (int, int) {
	return 3, 7
}

// Variadic Functions
// variadic functions can be called with any number of trailing args.
// fmt.Println is a common variadic function.



// returning functions
func multiplier(factor int) func(int) int {
	return func(a int) int {
		return a * factor
	}
}

func main() {
	sum, diff := add(2, 1)
	fmt.Println("Sum:", sum, "Diff:", diff)
	
	fmt.Println(vals())

	a, b := vals()
	fmt.Println(a)
	fmt.Println(b)

	_, c := vals()
	fmt.Println(c) // prints last value of the return function

	var double = multiplier(2)
	var tripple = multiplier(3)

	fmt.Println(double)
	fmt.Println(tripple)

}