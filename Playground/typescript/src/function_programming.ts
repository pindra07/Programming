// Object Oriented way of programming


console.log("--------Object Oriented Way of programming and Chaining----------")
class Calculator {
  private value: number

  constructor(initialValue: number = 0) {
    this.value = initialValue
  }

  add(num: number): this {
    this.value += num;
    return this
  }

  square(): this {
    this.value *= this.value;
    return this
  }

  getResult(): number {
    return this.value
  }
}


const result = new Calculator(2)

console.log(result.add(3).square().getResult())

// Functional Programming (no new keyword)

console.log("--------Functional Programming the way of code---------")
function calculator(initiaValue: number = 0) {
  let value = initiaValue;

  const methods = {
    add: (num: number) => {
      value += num
      return methods
    },
    square: () => {
      value *= value;
      return methods
    },
    getResult: () => {
      return value
    }
  }
  return methods
}

const result1 = calculator(2).add(3).square().getResult()
console.log(result1)

// Async Programming
/* 
When dealing with asynchronous operations (like fetching data or reading files), standard method chaining breaks. 
If add() takes 2 seconds and returns a Promise, you can't immediately call .square() on it, because .square() 
doesn't exist on a Promise!

To fix this, we have two approaches: standard Promise chaining (using .then()), and the Fluid Builder pattern 
(which is how libraries like Prisma, Cypress, or Knex.js let you chain methods before awaiting them).
*/
console.log("------Async/Promise version of function chaining------")
class AsyncCalculator {
  // we store the current state of the operation in a Promise
  private promise: Promise<number>

  constructor(initialValue: number = 0) {
    this.promise = Promise.resolve(initialValue);
  }
  add(num: number): this {
    this.promise = this.promise.then((currentValue) => {
      // Simulating an async operation like a database call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(currentValue += num)
        }, 500)
      })
    })
    return this
  }

  square(): this {
    this.promise = this.promise.then((currentValue) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(currentValue *= currentValue)
        }, 500)
      })
    })
    return this
  }

  then(onfulfilled?: (value: number) => any, onrejected?: (reason: any) => any) {
    this.promise.then(onfulfilled, onrejected)
  }
}

async function run() {
  console.log("calculating...")

  const result = await new AsyncCalculator(2) 
    .add(3)
    .square()

  console.log(result)
}

run()

// Standard Promise Chaining------
console.log("_____ Standard Promise Chaining_______")

const asyncAdd = async (a: number, b: number): Promise<number> => {
  return a+b
}

const asyncSquare = async (a: number): Promise<number> => {
  return a*a
}

asyncAdd(2, 3)
  .then((sum) => asyncSquare(sum))
  .then((finalResult) => {
    console.log(finalResult)
  })