const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  // resolve({
  //   name: 'Zane',
  //   age: 22
  // });
  reject('Something went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');

// Once you resolve or reject something, you can never resole/reject again
// Promises only work when it is resolved. Error prints when rejected
// Catch lets you input an action upon rejection
  // Pass a function into catch() calls