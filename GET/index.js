const container = document.querySelector('.container')


const createPost = (title, body) => {
    const containerPost = document.createElement('div')
    containerPost.classList.add('container-post')
    container.append(containerPost)
    containerPost.innerHTML =
    `
    <h2 class="title">${title}</h2>
    <p class="text">${body}</p>
    `
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.forEach(el => {
        createPost(el.title, el.body)
        })
    )
    .catch(error => console.error(error))