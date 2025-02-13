/*
Clase 2 - Estructuras avanzadas (05/02/2025)
Vídeo: https://www.twitch.tv/videos/2373300186?t=00h15m32s
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

const numbers = [2, 4, 6, 8, 10];

const sumOfSquares = numbers
    .map(num => num ** 2)
    .filter(square => square % 2 === 0)
    .reduce((acc, square) => acc + square, 0);

console.log(sumOfSquares);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const numbersCubed = numbers
    .map(num => num ** 3)
    .filter(cube => cube % 2 === 0);

console.log(numbersCubed);
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

const matrix = [[1, 2], [3, 4], [5, 6]];
const flatMatrix = matrix.flat();
console.log(flatMatrix);

const matrix2 = [[1, 2], [3, 4], [5, 6]];
const flatMapMatrix = matrix2.flatMap(num => [num * 2]);
console.log(flatMapMatrix);

// 4. Ordena un array de números de mayor a menor
const numbersDesc = numbers.sort((a, b) => b - a);
console.log(numbersDesc);
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

const union = new Set([...setA, ...setB]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
const difference = new Set([...setA].filter(x => !setB.has(x)));

console.log(union);
console.log(intersection);
console.log(difference);

// 6. Itera los resultados del ejercicio anterior
for (const value of union) {
    console.log(value);
}

for (const value of intersection) {
    console.log(value);
}

for (const value of difference) {
    console.log(value);
}

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos


const usersMap = new Map([
    ["Brais", { name: "Brais", age: 37, email: "braismoure@mouredev.com" }],
    ["Moure", { name: "Moure", age: 30, email: "mouredev@gmail.com" }],
    ["MoureDev", { name: "MoureDev", age: 25, email: "mouredev@outlook.com" }],
    ["mohamed", { name: "mohamed", age: 27, email: "mderkaoui10@gmail.com" }],

]);

for (const [key, value] of usersMap) {
    console.log(`Nombre: ${value.name}, Edad: ${value.age}, Email: ${value.email}`);
}

// 8. Dado el mapa anterior, crea un array con los nombres

const namesArray = [...usersMap.keys()];
console.log(namesArray);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
const emailsSet = new Set([...usersMap.values()].filter(user => user.age >= 18).map(user => user.email));
console.log(emailsSet);
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
const usersObject = Object.fromEntries(usersMap);
const usersByEmail = new Map(Object.entries(usersObject).map(([email, user]) => [email, user]));
console.log(usersByEmail);
