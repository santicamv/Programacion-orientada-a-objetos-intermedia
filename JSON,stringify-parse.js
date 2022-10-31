/*JSON.stringify es una herramienta, un método estático del prototipo JSON que nos permite convertir objetos en un String*/

/*Creamos al objeto 1 con propiedades de ejemplo a,b*/
const obj1 = {
    a : "a",
    b : "b"
};

/*Con el método JSON.stringify convertimos al objeto 1 en un String*/
const obj2 = JSON.stringify(obj1);

/*Imprimimos el contenido del objeto 2*/
console.log(obj2);

/*JSON.parse nos permite hacer el procedimiento opuesto, con el podemos crear un objeto a partir de un String*/
const obj = JSON.parse(obj2);

/*Imprimimos el contenido del objeto*/
console.log(obj);