'use strict'
const posts = document.querySelector('.posts')
const postBtn = document.querySelector('.btn')




fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: text
    }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});