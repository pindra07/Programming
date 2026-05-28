"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const name = "Priyanshu Indra";
bcrypt_1.default.hash(name, 10, function (err, hash) {
    console.log("Text to be hashed: ", name);
    console.log("hashed text: ", hash);
    // Compare using the hash generated above
    bcrypt_1.default.compare(name, hash, function (err, result) {
        console.log(result);
    });
});
console.log("Hello World");
