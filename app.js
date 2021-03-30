const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    State: 'FL'
  },
  getBirthYear: function () {
    return 2021 - this.age;
  }
}

let val;

val = person;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.State;
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 39},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 23},
];

for(let i=0; i < people.length; i++) {
  console.log(people[i].name);
}