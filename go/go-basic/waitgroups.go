package main

import (
	"fmt"
	"sync"
)


// waiting groups waits to multiple go-routines to complete 
func main() {
	fmt.Println("Waitgroups")
	var wg sync.WaitGroup

	for i := range(5) {
		wg.Add(1)
		go func () {
			// some expensive operation

			wg.Done()
		}()
	}

	wg.Wait()
	fmt.Println("Done")
}
