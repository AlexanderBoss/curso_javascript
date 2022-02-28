const $whatisDOM = document.getElementById("que-es");


let text = `
    <p>
    
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Modelo <i></b>) es una API 
    para documentos HTML y XML.
    </p>
    <p>
    Este provee una representacion estructural del documento permitiendo modificar su contenido
    y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark>
    El DOM no es parte de la especificacion de JavaScript es una API para los navegadores
    </mark>
    </p>
`;  


//INSERTAR TEXTO EN EL HTML DE LA ETIQUETA  que-es

$whatisDOM.innertext=text;   // insertar solo texto
$whatisDOM.textContent=text;
$whatisDOM.innerHTML=text;  //forma correcta insertar texto y codigo

