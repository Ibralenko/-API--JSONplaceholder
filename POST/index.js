'use strict'

const form = document.forms.postForm;
const inputTitle = document.getElementById('title-post')
const inputText = document.getElementById('text-post')
const posts = document.querySelector('.posts')
const error = document.querySelector('.error')
const btn = document.querySelector('.btn')

function checkInputs () {
  if (inputTitle.value === '' || inputText.value === ''){
    return document.querySelector('.btn').disabled = true;
  } else {
    return document.querySelector('.btn').disabled = false;
  }
}

checkInputs()
function createPost (title, text){
  const divPost = document.createElement('div');
  divPost.classList.add('post-container');
  const titlePost = document.createElement('h3');
  titlePost.classList.add('title')
  titlePost.innerHTML = title;
  const textPost = document.createElement('p');
  textPost.classList.add('text-post')
  textPost.innerText = text;
  posts.append(divPost)
  divPost.append(titlePost, textPost)
}

function piblishPost(){
  const title = inputTitle.value;
  const text = inputText.value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: text
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(json => createPost(json.title, json.text))
}


