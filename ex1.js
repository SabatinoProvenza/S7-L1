class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  ageCheck = function (altroUtente) {
    if (this.age > altroUtente.age) {
      console.log(`${this.firstName} è più vecchio di ${altroUtente.firstName}`)
    } else if (this.age < altroUtente.age) {
      console.log(`${this.firstName} è più giovane di ${altroUtente.firstName}`)
    } else {
      console.log(
        `${this.firstName} e ${altroUtente.firstName} hanno la stessa età`
      )
    }
  }
}

const user1 = new User("Mario", "Rossi", 40, "Roma")
const user2 = new User("Giulia", "Verdi", 35, "Milano")
