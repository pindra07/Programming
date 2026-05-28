package main

import (
	"fmt"
)

func main() {
	// maps in golang also called hashmaps in c++
	m := make(map[string]int)
	m["k1"] = 4
	m["k2"] = 5
	m["name"] = 3
	
	fmt.Println("map:", m)

	v1 := m["k1"]
	fmt.Println("v1", v1)

	name := m["name"]
	fmt.Println("name", name)

	var val, exists = m["name"]
	fmt.Println(val, exists)

	// deleting value in map
	delete(m, "k2")
	fmt.Println("The key k2 is deleted from the map: m")
	fmt.Println("map", m)

	// clear function empties all the key value pairs
	clear(m)
	fmt.Println("map: ", m)

	_, prs := m["k2"]
	fmt.Println("prs", prs)

	n := map[string]int{"foo":1, "bar": 2}
	fmt.Println("map:", n) // output ->  map: map[bar:2 foo:1]


	// iterating over map
	fruitStock := map[string]int {
		"apple": 10,
		"banana": 20,
		"orange": 15,
	}
	fmt.Println("Iterating through fruitStock:")
	for key, value := range fruitStock {
		fmt.Println("%s: %d\n", key, value)
	}

}