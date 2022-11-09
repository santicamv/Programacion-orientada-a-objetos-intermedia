/*Primer ejemplo en JavaScript*/
const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 47, 88, 99, 554, 66, 24, 22, 88, 77, 4, 4, 1, 12, 3, 6, 64, 94, 366, 468, 3133, 151, 1, 2, 5, 4, 7, 8];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log({ index, numerito });
};

/*Creamos una función recursiva a la que se le envía un arreglo con números en este caso, validamos en el primer condicional que la longitud del arreglo sea diferente de cero, es decir que no esté vacío. Si esto se cumple, creamos una variable denominada firstNum y le asignamos el primer valor del array, imprimimos ese valor por consola, luego de eso se elimina con el método shift la primera posición del array y finalmente se llama nuevamente la función a sí misma pero esta vez ya el array no contiene el elemento de la primera posición por lo que cada vez se reducen mas sus elementos*/
function recursiva(numeritosArray) {
    if (numeritosArray.length != 0) {
        const firstNum = numeritosArray[0];
        console.log(firstNum);
        numeritosArray.shift();
        recursiva(numeritosArray);
    }
}

/*Hcemos el llamado al método para ver su funcionamiento*/
recursiva(["🤪", "⭐", "❤️"]);

/*Nuevo ejemplo de recursividad*/
const obj7 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA() {
        this.a = "AAAAAAAA";
    }
};
/*Función qu determina si un elemento enviado por parámetro es un objeto o no, en caso afirmativo retorna true y en caso negativo retorna false*/
function isObject(obj) {
    let variable = false;
    if (typeof (obj) == "object") {
        variable = true;
        return variable;
    } else {
        return false;
    }
}
/*Función qu determina si un elemento enviado por parámetro es un array o no, en caso afirmativo retorna true y en caso negativo retorna false*/
function isArray(obj) {
    let variable = false;
    if (Array.isArray(obj)) {
        variable = true;
        return variable;
    } else {
        return false;
    }
}

/*Creamos una función que valida si el subject es objeto, un array o cualquier otra cosa*/
function deepCopy(subject) {
    let copySubject;
    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }
    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject;
}
/*Podemos enviarle a la función deepCopy objetos arrays o cualquier cosa y el tratará el elemento como su tipo de dato*/
console.log(deepCopy(obj7))

/*Creamos la base del objeto studentBase*/
const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

/*Objeto juan con todas las propiedades anteriormente definidas*/
const juanito = deepCopy(studentBase);

/*Le decimos al nombre del objeto juan que no se pueda borrar. Sin embargo, esto solo funcionaría para el name y tendríamos que hacer lo mismo con el resto de propiedades.*/
Object.defineProperty(juanito,"name",{
    value:"juanito",
    configurable: false
})

/* Si queremos hacerlo directamente con todas las propiedades del objeto podemos utilizar el método seal...*/
Object.seal(juanito);

/*Sin embargo si se puede editar su nombre*/
juanito.name = "Juan que no es juanito"
console.log(juanito);

/*A continuación se hace referencia al método isSealed que nos permite verificar si todas las propiedades del objeto tienen la protección de configurable como false*/
console.log(Object.isSealed(juanito));

/*Hace que el elemento se congele, no se puede borrar, ni tampoco permite editar las propiedades del objeto */
console.log(Object.isFrozen(juanito));