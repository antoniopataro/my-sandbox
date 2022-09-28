const Person = {name: 'Antônio', age: 18}


// console.log(Person.name) // 'Antônio'
// console.log(Person.age) // 18

// console.log(this.name) // 'Antônio'
// console.log(this.age) // 18

// ------------------

const Age = {
    age: 18,
    sum(x) {
        return x+this.age
      },
}

console.log(Age.sum(24))