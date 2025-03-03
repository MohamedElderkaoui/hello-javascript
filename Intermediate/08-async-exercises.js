/*
Clase 4 - Programación asíncrona (19/02/2025)
Vídeo: https://www.twitch.tv/videos/2385650388?t=00h22m48s
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function greet(name, callback) {
    setTimeout(() => {
        callback(name);
    }, 2000);
}

greet("Juan", (name) => {
    console.log(`Hola, ${name}`);
});


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => {
        callback("Task 1 completed");
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        callback("Task 2 completed");
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        callback("Task 3 completed");
    }, 1000);
}   

task1((message) => console.log(message));
task2((message) => console.log(message));
task3((message) => console.log(message));   


// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verifyNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Number is even");
        } else {
            reject("Number is odd");
        }
    });
       
}

verifyNumber(5)
    .then((message) => console.log(message))
    .catch((message) => console.log(message));      

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First task completed");
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second task completed");
            resolve();
        }, 2000);
    });
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third task completed");
            resolve();
        }, 1500);
    }); 
}

firstTask()
    .then(() => secondTask())
    .then(() => thirdTask())
    .then(() => console.log("All tasks completed"));

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks() {
    await firstTask();
    await secondTask();
    await thirdTask();
    console.log("All tasks completed");
}

executeTasks();   // Ejecutar la función executeTasks() en una consola para ver los resultados.

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

async function getUser(id) {
    try {
        const user = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id < 5) {
                    resolve({ id, nombre: `Usuario ${id}` });
                } else {
                    reject("Usuario no encontrado");
                }
            }, 2000);
        }
        );
        console.log(user);
    } catch (error) {
        console.error(error);
    }
    }

getUser(3);  // Ejecutar la función getUser() en una consola para ver los resultados.

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")
º
console.log("Inicio");

setTimeout(() => console.log("setTimeout ejecutado"), 0);

Promise.resolve().then(() => console.log("Promesa resuelta"));

console.log("Fin");

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function waitSeconds(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function executeWait() {
    console.log("Esperando...");
    await waitSeconds(3);
    console.log("Tiempo finalizado");
}

executeWait();

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
}

async function executeWait() {
    console.log("Esperando...");
    await waitSeconds(3);
    console.log("Tiempo finalizado");
}

executeWait();

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let balance = 500; // Saldo inicial

function checkBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(balance);
        }, 1000);
    });
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= balance) {
                balance -= amount;
                resolve(`Operación exitosa, saldo restante: ${balance}$`);
            } else {
                reject("Error: Fondos insuficientes");
            }
        }, 2000);
    });
}

async function atmSimulation() {
    const saldo = await checkBalance();
    console.log(`Saldo disponible: ${saldo}$`);

    try {
        console.log("Retirando 300$...");
        const result1 = await withdrawMoney(300);
        console.log(result1);

        console.log("Retirando 300$...");
        const result2 = await withdrawMoney(300);
        console.log(result2);
    } catch (error) {
        console.error(error);
    }
}

atmSimulation();
