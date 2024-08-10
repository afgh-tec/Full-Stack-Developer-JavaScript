/*Async and Await*/

//Solicitando la data por medio de promesas
/* function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} */

async function fetchData() {
  //se usa para el manejo de errores
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData()
