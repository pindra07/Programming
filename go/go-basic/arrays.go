package main

import "fmt"

func main() {
	var a[5]int // declaring array
	fmt.Println("emp: ", a)

	a[4] = 100
	fmt.Println("set:", a)
	fmt.Println("get:", a[4])

	fmt.Println("len:", len(a))
	
	b := [5]int{1, 2, 3, 4, 5}
	fmt.Println("dcl", b)

	b = [...]int{1, 2, 3, 4, 5}
	fmt.Println("dcl", b)

	b = [...]int{100, 3: 400, 500}
	fmt.Println("idx", b)


	// working with 2d array
	var twoD [2][3]int
	for i := range 2 {
		for j:= range 3 {
			twoD[i][j] = i+j
		}
	}
	fmt.Println("2d", twoD)

	// 1-> row 2-> row
	twoD = [2][3]int{
		{1, 2, 3},
		{1, 2, 3},
	}

	fmt.Println("2d: ", twoD)
}