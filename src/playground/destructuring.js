//
// Object Destructuring
//

// const person = {
//   name: 'Zane',
//   age: 22,
//   location: {
//     city: 'Mission Viejo',
//     temp: 70
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

// const address = ['23962 Bough Ave', 'Mission Viejo', 'California', '92691' ];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$2.65', '$2.75'];
const [coffee, , medPrice] = item;
console.log(`A mediudm ${coffee} costs ${medPrice}.`)