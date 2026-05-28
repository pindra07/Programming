package main

import (
	"fmt"
)

func main () {
	fmt.Println("Program started")
	var s[] string 
	fmt.Println("uninit:", s, s == nil, len(s) == 0)

	var arr [5]int = [5]int {1, 2, 3, 4, 5}
	var slice []int = [] int {123, 34, 434, 534, 544, 46}
	var slice2 []int = [] int {1, 2, 3}
// vectors in c++ is similar to slices in golang --> c++ concept

	slice = append(slice, 5) // appending 5 to slice (dynamic array)
	slice2 = append(slice2, 7) // appending to slice2
	fmt.Println(arr, slice)
	fmt.Println("slice2", slice2)
}

