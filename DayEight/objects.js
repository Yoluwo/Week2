//learning Objectss
const shape = {
    length: 20,
    width: 20
}

console.log(shape)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],

    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
  }

  console.log(person["phone number"])

person.nationality = 'Nigerian'
person.country = 'Nigeria'
person.title = 'Broke Student'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = false

person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length -1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length -1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }

  console.log(person)
  console.log(person.getPersonInfo())


  const copyPerson = Object.assign({}, person)
  const keys = Object.keys(copyPerson)
  const values = Object.values(copyPerson)
  const entries = Object.entries(copyPerson)

  console.log(copyPerson)
  console.log(keys)
  console.log(values)
  console.log(entries)
  //Checking if a specific key or property exists in an object
  console.log(copyPerson.hasOwnProperty('firstName'))