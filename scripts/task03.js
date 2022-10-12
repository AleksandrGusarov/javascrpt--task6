'use strict';


// const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
// let result = names.map(function addPrefx(names) {
//     return 'Mr' + ' ' + names;
// })
// console.log(result);


const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = names.map((i) => {
  return 'Mr ' + i;

})
console.log(addPrefix);
