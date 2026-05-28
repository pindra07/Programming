package main

import "fmt"

type rect struct {
	width int32
	height int32
}

// attaching functions in struct like functions in classes in js
func (r rect) area () int32 {
	return area(r)
}

func (r rect) perimeter() int32 {
	return perimeter(r)
}

func perimeter (r rect) int32 {
	return 2*(r.height + r.width)
}

func area (r rect) int32 {
	return r.width * r.height
}

func main () {
	r := rect{width:10, height: 12}
	fmt.Println("Area: ", area(r))
	fmt.Println(r.area())
	fmt.Println(r.perimeter())

	fmt.Println("Perimeter: ", perimeter((r)))
}

