'use strict'

const form = document.forms.postForm;
const inputTitle = document.getElementById('title-post')
const inputText = document.getElementById('text-post')
const posts = document.querySelector('.posts')

function checkInputs() {
  if (inputTitle.value === '' || inputText.value === '') {
    return document.querySelector('.btn').disabled = true;
  } else {
    return document.querySelector('.btn').disabled = false;
  }
}
checkInputs()

function createPost(title, text) {
  const divPost = document.createElement('div');
  divPost.classList.add('post-container');
  posts.append(divPost)
  divPost.innerHTML =
    `
    <h2 class="title">${title}</h2>
    <p class="text"><i>${text}</i></p>
    `
}

function publishPost() {
  const title = inputTitle.value;
  const text = inputText.value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: text,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(json => createPost(json.title, json.body))
    .catch(error => console.error(error));

  form.reset()
  checkInputs()
}
