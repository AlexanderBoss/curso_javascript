const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.childNodes);//tenemos 11 nodes imagenes
console.log($cards.children); //obtener los hijos elementos
console.log($cards.children[2]); // obtener un hijo especifico con arreglo
console.log($cards.parentElement); //
console.log($cards.firstElementChild); //primer elemento 
console.log($cards.lastElementChild); //ultimo elemento

console.log($cards.previousSibling); 
console.log($cards.previousElementSibling); 
console.log($cards.nextElementSibling); 
console.log($cards.closest("div")); //ancestro mas cercana
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));


