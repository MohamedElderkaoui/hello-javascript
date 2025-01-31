/*
Clase 1 - Funciones avanzadas (29/01/2025)
Vídeo: https://www.twitch.tv/videos/2367024319?t=00h08m45s
*/

// 1. Crea una función que retorne a otra función
function outerFunction() {
    function innerFunction() {
        return 1;
    }    
    return innerFunction;
}

const result = outerFunction()(); // Output: 1

// 2. Implementa una función currificada que multiplique 3 números

function multiply(a, b, c) {
    return a * b * c;
}

const multiplyThreeNumbers = multiply.bind(null, 1, 2, 3); // Output: 6


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

const result1 = power(2, 3); // Output: 84
console.log(result1);
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(initialValue) {
    let count = initialValue;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter(0);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0) * multiplier;
}

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const callback = (sum) => {
    console.log(`The sum is: ${sum}`);
};

sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).then(callback);

// 7. Crea una función que devuelva un objeto con un método que acepte un callback y ejecutelo con el valor de la variable 'counter'

function createCounterWithCallback(callback) {
    let counter = 0;

    return {
        increment() {
            counter++;
            callback(counter);
        }
    };
}

const counterWithCallback = createCounterWithCallback((value) => {
    console.log(`The counter value is: ${value}`);
});

counterWithCallback.increment();


// 7. Desarrolla una función parcial

function multiply(a, b) {
    return a * b;
}

const multiplyBy2 = multiply.bind(null, 2);

console.log(multiplyBy2(3)); // Output: 6


// 8. Implementa un ejemplo que haga uso de Spread

const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers)); // Output: 6

// 9. Implementa un retorno implícito

const multiply = (a, b) => a * b;
console.log(multiply(2, 5)); // Output: 10


// 10. Crea una función que retorne un objeto con métodos para incrementar y decrementar un contador
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        }
    };
}

const counte = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.count);
// Output: 1
// 10. Haz uso del this léxico