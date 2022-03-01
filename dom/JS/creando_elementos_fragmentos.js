const $figure = document.createElement("figure"), //va crear un elemento del dom con la etiqueta figure de las targetas
    //creacion de etiquetas
    $img = document.createElement("img"), //esto necesita img
    $figcaption = document.createElement("figcaption"), 
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");
    $figure2 = document.createElement("figure");

    $img.setAttribute("src","https://placeimg.com/200/200/animals");
    $img.setAttribute("alt","Animals");
    $figure.classList.add("card");

    $figcaption.appendChild($figcaptionText)
    $figure.appendChild($img) //agregango al hijo
    $figure.appendChild($figcaption) //
    $cards.appendChild($figure)

    $figure2.innerHTML=`
        <img src ="https://placeimg.com/200/200/people alt="People">
        <figcaption>People</figcaption>
    `;

    $figure2.classList.add("card");
    $cards.appendChild($figure2);





const estaciones =["Primavera","Verano","Otoño","Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li)
});

const continentes =["Africa","America","Asia","Europa","Oceania"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach(el=>$ul2.innerHTML=`<li>${el} </li>`);



const meses=[ 
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",

],

//tecnica de desfragmento
$ul3=document.createElement("ul"),
$fragment=document.createDocumentFragment();
$li.text