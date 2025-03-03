/*
Clase 5 - Manejo de APIs (26/02/2025)
Vídeo: https://www.twitch.tv/videos/2391820998?t=00h17m25s
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => console.error(error));

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchPosts();

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function fetchPostsAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchPostsAsync();


// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
    try {
        const newPost = {
            title: "New post",
            body: "This is a new post"
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);   

    }
}

createPost();   

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatePost(id) {
    try {
        const updatedPost = {
            title: "Updated post",
            body: "This is an updated post"
        };

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

updatePost(1);

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function updatePartialPost(id) {
    try {
        const updatedPost = {
            title: "Updated post"
        };

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedPost),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

updatePartialPost(1);

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    }

deletePost(1);

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getWeather(city) {
    const API_KEY = 'TU_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error en la petición: ${response.status}`);
  
      const data = await response.json();
      console.log(`El clima en ${city}:`, data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getWeather('Buenos Aires');
  
// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function getPokemonData(pokemon) {
    try {
      // Obtener datos del Pokémon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if (!response.ok) throw new Error(`Error al obtener ${pokemon}`);
      const pokemonData = await response.json();
      
      console.log('Datos del Pokémon:', pokemonData);
  
      // Obtener detalles de la especie
      const speciesResponse = await fetch(pokemonData.species.url);
      if (!speciesResponse.ok) throw new Error(`Error al obtener la especie de ${pokemon}`);
      const speciesData = await speciesResponse.json();
  
      console.log('Detalles de la especie:', speciesData);
  
      // Obtener cadena evolutiva
      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      if (!evolutionResponse.ok) throw new Error(`Error al obtener la evolución de ${pokemon}`);
      const evolutionData = await evolutionResponse.json();
  
      console.log('Cadena evolutiva:', evolutionData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getPokemonData('pikachu');
  

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API

/*### **🔟 Probar API con Postman o Thunder Client**  

Para probar los endpoints de la API de `JSONPlaceholder`, puedes usar **Postman** o **Thunder Client** (una extensión de VS Code).  

#### **🛠 Pasos en Postman:**
1. **Abrir Postman**  
   - Si no lo tienes instalado, descárgalo desde [aquí](https://www.postman.com/downloads/).  

2. **Realizar una petición GET:**  
   - Método: `GET`  
   - URL: `https://jsonplaceholder.typicode.com/posts/1`  
   - Clic en **Send** y observa la respuesta.  

3. **Realizar una petición POST:**  
   - Método: `POST`  
   - URL: `https://jsonplaceholder.typicode.com/posts`  
   - Ir a la pestaña **Body** → **raw** → **JSON**  
   - Añadir este JSON:
     ```json
     {
       "title": "Nuevo post",
       "body": "Contenido del post",
       "userId": 1
     }
     ```
   - Clic en **Send** y verifica la respuesta.  

4. **Realizar una petición PUT (Actualizar un post):**  
   - Método: `PUT`  
   - URL: `https://jsonplaceholder.typicode.com/posts/1`  
   - En **Body** → **raw** → **JSON**, usa:
     ```json
     {
       "title": "Título actualizado",
       "body": "Contenido actualizado",
       "userId": 1
     }
     ```
   - **Send** y revisa la respuesta.  

5. **Realizar una petición PATCH (Modificar solo un campo):**  
   - Método: `PATCH`  
   - URL: `https://jsonplaceholder.typicode.com/posts/1`  
   - En **Body** → **raw** → **JSON**:
     ```json
     {
       "title": "Título modificado"
     }
     ```
   - Clic en **Send**.  

6. **Realizar una petición DELETE:**  
   - Método: `DELETE`  
   - URL: `https://jsonplaceholder.typicode.com/posts/1`  
   - **Send** y verifica la respuesta (`status 200` sin cuerpo).  

---

#### **🛠 Pasos en Thunder Client (VS Code):**  
1. Instala la extensión **Thunder Client** desde el Marketplace de VS Code.  
2. Abre **Thunder Client** desde la barra lateral.  
3. Sigue los mismos pasos que en Postman para probar cada método (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).  

---

**🔍 Con esto ya puedes probar APIs de forma visual y validar su funcionamiento sin necesidad de código.** 🚀 ¿Te gustaría probar alguna API en particular? 😃*/
