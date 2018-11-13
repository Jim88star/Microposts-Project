// CommonJS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
// import { person, sayHello } from './mymodule2';
// import * as mod from './mymodule2';
import greeting from './mymodule2';

// console.log(mod.person.name);

// console.log(mod.sayHello());

console.log(greeting);

import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
    // .then(data => console.log(data))
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}