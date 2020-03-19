import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDVghdiLVca5aZnt36YaK_jv6EaESob7MI",
  authDomain: "expensify-e1a46.firebaseapp.com",
  databaseURL: "https://expensify-e1a46.firebaseio.com",
  projectId: "expensify-e1a46",
  storageBucket: "expensify-e1a46.appspot.com",
  messagingSenderId: "188259598169",
  appId: "1:188259598169:web:bbe890ef9cba7ea1a6d648",
  measurementId: "G-CCKRGL16G6"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// // child_removed 
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed 
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
  
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });



// database.ref('expenses').push({
//   description: 'testE1',
//   note: '',
//   amount: 10,
//   createdAt: 35186812358153
// });



// database.ref('notes/-M2__5q-OXH1F7X2xb-j').remove();

// database.ref('notes').push({
//   title: 'course topics',
//   body: 'react native, angular, python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(25);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data', e);
// });

// database.ref().set({
//   name: 'Zane Borrelli',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Mission Viejo',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data is saved.');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console.log('Did not remove data.', e);
//   });