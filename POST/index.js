'use strict'


async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postData("https://jsonplaceholder.typicode.com/posts",
{ answer: 42 })
.then((data) => {
  console.log(data);
});

