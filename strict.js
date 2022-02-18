console.clear()

console.log(this) // points to global window object

function sample(){
    console.log(this) // points to global window object
}

sample.bind(this)()

'use strict'
console.clear()

console.log(this) // points to global window object

function sample(){
    console.log(this) // undefined
}

sample.bind(this)() // that is why we need bind method to fix this