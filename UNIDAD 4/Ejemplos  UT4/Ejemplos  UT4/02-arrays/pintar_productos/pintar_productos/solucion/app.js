//capturamos el elemento que contendrá los cards
const cards = document.getElementById("cards");

//capturamos el CONTENT de la plantilla de la card  
const templateCard = document.getElementById("template-card").content;
//creamos un fragmento que nos será de utilidad
const fragment = document.createDocumentFragment();

//declaramos un array nuevo de objetos producto
const data = new Array (
    {
        "precio": 200,
        "id": 1,
        "title": "Geranio",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "precio": 400,
        "id": 2,
        "title": "Lirio",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "precio": 300,
        "id": 3,
        "title": "Galatea",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "precio": 200,
        "id": 4,
        "title": "Don Pedro",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "precio": 450,
        "id": 5,
        "title": "Dracea",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "precio": 8000,
        "id": 6,
        "title": "Tropical",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      }
)

console.log(data);

//declaramos una función que pintara las cards con los productos que le pasamos en el array data
const pintarCards = data => {
  //recorremos el array data  
  data.forEach(producto => {
        //cambiamos partes del la plantilla para cada producto
        templateCard.querySelector("h5").textContent = producto.title;
        templateCard.querySelector("p").textContent = producto.precio;
        templateCard.querySelector("img").setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector("img").setAttribute("alt", producto.title);

        //clonamos la plantilla y la agregamos a un fragmento que ira acumulando todas las cards
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);

    });

    //añadimos el fragmento con todas las cards al contenedor de las cards
    cards.appendChild(fragment);

}


//Llamamos a la función que pinta las cards pasando como parámetro el array de productos
pintarCards(data);