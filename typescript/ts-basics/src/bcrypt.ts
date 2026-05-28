
import bcrypt from 'bcrypt'
import readline from "node:readline"

const name = "Priyanshu Indra"

bcrypt.hash(name, 10, function (err, hash) {
    console.log("Text to be hashed: ", name)
    console.log("hashed text: ", hash)
    // Compare using the hash generated above
    bcrypt.compare(name, hash, function(err, result) {
        console.log(result)
    })
})

