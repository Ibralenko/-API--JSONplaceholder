const container = document.querySelector('.container')


const createPost = (title, body) => {
    const containerPost = document.createElement('div')
    containerPost.classList.add('container-post')
    const titlePost = document.createElement('h2')
    titlePost.classList.add('title')
    titlePost.textContent = `${title}`
    const textPost = document.createElement('p')
    textPost.textContent =`${body}`
    textPost.classList.add('text')
    container.append(containerPost)
    containerPost.append(titlePost, textPost)
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json.forEach(el => {
        createPost(el.title, el.body)
        })
    )
    .catch(error => console.error(error))