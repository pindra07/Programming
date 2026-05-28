
// Generic Function
function identity<T>(arg: T): T {
    return arg
}


let output1 = identity<string>("myString")
let output2 = identity<number>(10)

console.log("output1: ", output1)
console.log("output2: ", output2)


// Implementing generics in interfaces (Generic Interfaces)
interface GenericInterface<T> {
    value: T;
    getValue(): T
}

class MyClass implements GenericInterface<number> {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
    getValue(): number {
        return this.value
    }
}


// Generic Class

class GenericClass<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

let instance1 = new GenericClass<string>("hello world")
let instance2 = new GenericClass<number>(42)

console.log(instance1)
console.log(instance2)



// My constructor example

class ApiCalling<T> {
    name: string;
    id: number;
    section: number
    constructor (name: string, id: number, section: number) {
        this.name = name;
        this.id = id;
        this.section = section
    }

    getValue() {
        return {
            name: this.name,
            id: this.id,
            section: this.section
        }
    }
}



