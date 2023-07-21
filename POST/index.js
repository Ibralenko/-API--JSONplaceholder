'use strict'

const form = document.forms.postForm;
const inputTitle = document.getElementById('title-post')
const inputText = document.getElementById('text-post')
const posts = document.querySelector('.posts')


function getTitle ()  {
  if (inputTitle.value === ''){
    return alert('Введите название')
  } return inputTitle.value;
}

function getText ()  {
  if (inputText.value === ''){
    return alert('Введите текст поста')
  } return inputText.value
}

function createStructure (title, text){
  const divPost = document.createElement('div');
  divPost.classList.add('post-container');
  const titlePost = document.createElement('h3');
  titlePost.classList.add('title')
  titlePost.innerHTML = title;
  const textPost = document.createElement('p');
  textPost.classList.add('text-post')
  textPost.textContent = text;
  posts.append(divPost)
  divPost.append(titlePost, textPost)
}

function piblishPost(){
  const title = getTitle();
  const text = getText();

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
    .then(json => createStructure(json.title, json.text))
}


