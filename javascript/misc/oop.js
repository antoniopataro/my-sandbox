function Human (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName    
    
    this.fullName = firstName + " "  + lastName
}

var Toni = new Human('Antônio', 'Pataro')

console.log(Toni.fullName)