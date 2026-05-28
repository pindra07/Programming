package main

import (
	"fmt"
	"math"
	"math/rand"
)

func main() {

	// one way to declare variable
	var a int = 42
	var b float64 = 3.14
	var c string = "Hello world"
	var d bool = true

	// another way to declare variable
	e := 52
	f := 3.14
	g := false

	// you can also declare constants (can't change the value inside of it)
	const add = "add"

	for i := 0; i<10; i++ {
		fmt.Println(i)
	}

	for j := 10; j>0; j-- {
		fmt.Println(j)
	}

	k := 39
	for k > 0 {
		fmt.Println(k)
		k = k-1
	}

	fmt.Println("Integer", a)
	fmt.Println(b, c, d, e, f, g, add)
	fmt.Println("Random Integer", rand.Int31n(10))
	fmt.Println(math.Sin(5000))

	// if else functions
	var number = 42
	if number%2 == 0 {
		fmt.Println("The number is even")
	} else {
		fmt.Println("The number is odd")
	}

	// Switch Statements

	gender := "female"

	switch gender {
	case "male":
		fmt.Println("The gender is male")
	case "female":
		fmt.Println("The gender is female") 
	}
}

