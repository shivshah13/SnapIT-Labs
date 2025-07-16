// task 1 – object initializer about cats
const cat = {
  name: "Whiskers",
  age: 3,
  breed: "Tabby",
  color: "Gray",
  meow: function () {
    console.log(`${this.name} says meow!`);
  }
};

console.log(cat.name);     // Whiskers
console.log(cat.age);      // 3
console.log(cat.breed);    // Tabby
console.log(cat.color);    // Gray
cat.meow();                // Whiskers says meow!

// task 2 – Person class with private fields, getters/setters, and behavior
class Person {
  #firstName;
  #lastName;
  #age;
  #email;

  constructor(firstName, lastName, age, email) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#email = email;
  }

  // Getters
  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getAge() {
    return this.#age;
  }

  getEmail() {
    return this.#email;
  }

  // Setters
  setFirstName(firstName) {
    this.#firstName = firstName;
  }

  setLastName(lastName) {
    this.#lastName = lastName;
  }

  setAge(age) {
    this.#age = age;
  }

  setEmail(email) {
    this.#email = email;
  }

  // Method: class behavior
  greet() {
    console.log(`Hi, I'm ${this.#firstName} ${this.#lastName} and I'm ${this.#age} years old.`);
  }
}

// test the Person class
const person1 = new Person("Shiv", "Shah", 19, "shiv@example.com");
person1.greet();  // Hi, I'm Shiv Shah and I'm 19 years old.
console.log(person1.getEmail()); // shiv@example.com
