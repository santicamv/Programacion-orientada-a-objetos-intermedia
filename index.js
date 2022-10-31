/*Creamos un nuevo objeto literal con el fin de llevar a cabo un nuevo ejemplo*/
const juan = {
    name : "juanito",
    age : 18,
    approvedCouses : ["Curso 1"],

    addCourse(newCourse){
        this.approvedCouses.push(newCourse);
    }
};

/*Implementación de las propiedades estaticas del superprototipo Object, en este caso el método keys permite enviarle como argumento el nombre del objeto al cual queremos listar sus keys o nombre de propiedades.*/ 
console.log(Object.keys(juan));

/*Implementación de las propiedades estaticas del superprototipo Object, en este caso el método keys permite enviarle como argumento el nombre del objeto al cual queremos listar sus keys o nombre de propiedades. Muy similar al método anterior.*/ 
console.log(Object.getOwnPropertyNames(juan));

/*Se crea un array de arrays, en el que se agregan los nombres de las propiedades y sus valores correspondientes es por esto que si intentamos agregar un curso con la siguiente sintaxis: Object.entries(juan)[3][1]("Cursito nuevo de programación 2"), no nos va a permitir hacerlo, pues al colocar .entries se crea un array y por consiguiente ya no se esta apuntando al objeto juan sino al array creado y arroja un error. */
console.log(Object.entries(juan));

/*Nos crea un objeto que por dentro tiene cada una de las propiedades del objeto juan, y cada propiedad tiene otro objeto con el valor y algunas propiedades como writable, enumerable y configurable*/
console.log(Object.getOwnPropertyDescriptors(juan));

/*Utilizamos el método estático del superprototipo object con el fin de crear nuevas propiedades en nuestro objeto, con la ventaja de poder editar las propiedades writable, enumerable y configurable. La función defineProperty recibe tres argumentos: el primero es el objeto, el segundo hace referencia a el nombre del nuevo atributo o propiedad a definir y el tercero es la lista de valores que tiene esa propiedad.*/ 
Object.defineProperty(juan,"pruebaNASA",{
    value : "extraterrestres",
    writable : false, // Esto hace que no se pueda cambiar el valor de editor en este caso.
    enumerable : false, // Esto hace que la propiedad no aparezca cuando lo listamos con object.keys o entries...
    configurable : false // Esta propiedad impide que podamos borrar la propiedad en caso que demos delete juan.terminal
})

/*Se crean nuevas propiedades como ejemplo para ver el comportamiento de las propiedades en true y false.*/
Object.defineProperty(juan,"navegador",{
    value : "chrome",
    writable : true,
    enumerable : false, // Esto hace que la propiedad no aparezca cuando lo listamos con object.keys o entries...
    configurable : true
})

Object.defineProperty(juan,"editor",{
    value : "VScode",
    writable : false, // Esto hace que no se pueda cambiar el valor de editor en este caso.
    enumerable : true,
    configurable : true
})

Object.defineProperty(juan,"terminal",{
    value : "WSL",
    writable : false, // Esto hace que no se pueda cambiar el valor de editor en este caso.
    enumerable : true,
    configurable : false // Esta propiedad impide que podamos borrar la propiedad en caso que demos delete juan.terminal
})

Object.seal(juan); // Coloca en todas las propiedades a configurable como false 

Object.freeze(juan); // Hace que todas las propiedades sean imposibles de borrar y de modificar sus valores.

console.log(Object.getOwnPropertyDescriptors(juan));
