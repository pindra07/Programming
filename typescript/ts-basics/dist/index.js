"use strict";
// Generic Function
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(10);
console.log("output1: ", output1);
console.log("output2: ", output2);
class MyClass {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
// Generic Class
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let instance1 = new GenericClass("hello world");
let instance2 = new GenericClass(42);
console.log(instance1);
console.log(instance2);
// My constructor example
class ApiCalling {
    constructor(name, id, section) {
        this.name = name;
        this.id = id;
        this.section = section;
    }
    getValue() {
        return {
            name: this.name,
            id: this.id,
            section: this.section
        };
    }
}
