'use strict';


const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (array, prefix) => names.map((item) => `${prefix} ${item}`);

console.log(addPrefix(names, 'Mr'));
