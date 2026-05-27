# Proyecto de Gestion de Conciertos

 

Aplicacion web para gestionar conciertos y asistentes. El proyecto esta formado por un backend desarrollado con Spring Boot, una base de datos H2 en memoria y un frontend desarrollado con Angular.

 

Desde la aplicacion se pueden consultar conciertos, crear nuevos conciertos, ver informacion detallada y registrar asistentes asociados a cada concierto.

 

## Funcionalidades y reparto del proyecto

 

El proyecto se ha dividido por areas de trabajo:

 

| Area | Responsable | Funcionalidades realizadas |

| --- | --- | --- |

| Frontend | Daniel Montes Cardenas | Desarrollo de la interfaz web con Angular, creacion de vistas, formularios, navegacion entre paginas y conexion visual con los datos de conciertos y asistentes. |

| Backend | Jesus Barru Petrule | Desarrollo de la API REST con Spring Boot, creacion de controladores, servicios, validaciones y endpoints para gestionar conciertos y asistentes. |

| Base de datos | Daniel Alexander Salinas Alvear | Configuracion de H2, definicion de entidades JPA, repositorios y estructura de persistencia de conciertos y asistentes. |

| Integracion proyectos | Javier Penades Sempere | Integracion entre frontend y backend, conexion con la API, ajustes de CORS, comprobacion del flujo completo y coordinacion del funcionamiento conjunto. |

 

## Estructura del proyecto

 

```text

Insert-Coin-Test/

|-- backend/

|   |-- concert-backend/

|   |   |-- src/main/java/com/insertcoin/concertapi/

|   |   |   |-- config/          # Configuracion de CORS

|   |   |   |-- controller/      # Controladores REST

|   |   |   |-- dto/             # Objetos de entrada

|   |   |   |-- exception/       # Gestion de errores

|   |   |   |-- model/           # Entidades JPA

|   |   |   |-- repository/      # Repositorios de base de datos

|   |   |   `-- service/         # Logica de negocio

|   |   |-- src/main/resources/

|   |   |   `-- application.properties

|   |   |-- pom.xml

|   |   |-- mvnw

|   |   `-- mvnw.cmd

|   `-- agente-back/

|-- frontend/

|   |-- Insert_Coin_Test/

|   |   |-- src/app/

|   |   |   |-- services/        # Servicio de conexion con el backend

|   |   |   |-- registro-concierto/

|   |   |   |-- formulario-registro/

|   |   |   |-- informacion-concierto/

|   |   |   `-- imagenes/

|   |   |-- angular.json

|   |   |-- package.json

|   |   `-- package-lock.json

|   `-- agente-front/

`-- README.md

```

 

## Requisitos previos

 

Para ejecutar el proyecto completo es necesario tener instalado:

 

- Java 17 o superior.

- Maven, o usar el wrapper incluido en el backend.

- Node.js.

- npm.

- Angular CLI.

 

Puedes comprobar las versiones con:

 

```bash

java -version

mvn -version

node -v

npm -v

ng version

```

 

Si Angular CLI no esta instalado, se puede instalar con:

 

```bash

npm install -g @angular/cli

```

 

## Instrucciones de arranque paso a paso

 

Para ejecutar correctamente el proyecto completo hay que arrancar primero el backend y despues el frontend.

 

### 1. Arrancar el backend

 

Abre una terminal en la raiz del proyecto y entra en la carpeta del backend:

 

```bash

cd backend/concert-backend

```

 

En Windows PowerShell, ejecuta:

 

```bash

.\mvnw.cmd spring-boot:run

```

 

En Linux/macOS, ejecuta:

 

```bash

./mvnw spring-boot:run

```

 

Tambien se puede arrancar con Maven instalado globalmente:

 

```bash

mvn spring-boot:run

```

 

Cuando el backend arranque correctamente, estara disponible en:

 

```text

http://localhost:8080

```

 

La API REST se encuentra bajo la siguiente URL base:

 

```text

http://localhost:8080/api

```

 

Endpoints principales:

 

```text

GET  /api/concerts

GET  /api/concerts/{id}

POST /api/concerts

GET  /api/concerts/{id}/attendees

POST /api/attendees

```

 

### 2. Arrancar el frontend

 

Abre una segunda terminal en la raiz del proyecto y entra en la carpeta del frontend:

 

```bash

cd frontend/Insert_Coin_Test

```

 

Instala las dependencias:

 

```bash

npm install

```

 

Arranca la aplicacion Angular:

 

```bash

npm start

```

 

Tambien se puede usar:

 

```bash

ng serve

```

 

Cuando el frontend arranque correctamente, estara disponible en:

 

```text

http://localhost:4200

```

 

## Como comprobar que todo funciona

 

1. Comprueba que el backend esta arrancado entrando en:

 

```text

http://localhost:8080/api/concerts

```

 

Si devuelve una respuesta JSON, el backend esta funcionando.

 

2. Comprueba que el frontend esta arrancado entrando en:

 

```text

http://localhost:4200

```

 

3. Desde la aplicacion web, entra en el listado de conciertos:

 

```text

http://localhost:4200/conciertos

```

 

4. Verifica que se muestran los conciertos existentes.

 

5. Crea un nuevo concierto desde el formulario correspondiente.

 

6. Entra en el detalle de un concierto.

 

7. Registra asistentes asociados a un concierto.

 

8. Vuelve al listado o al detalle del concierto y comprueba que los datos se han actualizado.

 

Rutas principales del frontend:

 

```text

/conciertos       # Listado de conciertos

/registro         # Formulario de registro

/concierto/:id    # Informacion de un concierto

/imagenes         # Vista de imagenes

```

 

## Configuracion de H2

 

El proyecto usa H2 como base de datos en memoria. Esto significa que los datos existen mientras el backend esta arrancado, pero se pierden al detener la aplicacion.

 

La consola de H2 esta disponible en:

 

```text

http://localhost:8080/h2-console

```

 

Para entrar correctamente, usa estos valores:

 

```text

JDBC URL: jdbc:h2:mem:concertdb

User Name: sa

Password: dejar vacio

```

 

Es importante modificar la URL JDBC que aparece por defecto en la pantalla de H2 y dejarla exactamente asi:

 

```text

jdbc:h2:mem:concertdb

```

 

El usuario y la contrasena deben dejarse por defecto:

 

```text

Usuario: sa

Contrasena: vacia

```

 

La configuracion de H2 se encuentra en:

 

```text

backend/concert-backend/src/main/resources/application.properties

```

 

Configuracion actual:

 

```properties

spring.datasource.url=jdbc:h2:mem:concertdb

spring.datasource.driver-class-name=org.h2.Driver

spring.datasource.username=sa

spring.datasource.password=

spring.h2.console.enabled=true

spring.h2.console.path=/h2-console

```

 

## Configuracion importante

 

### URL del backend

 

El frontend consume la API desde:

 

```text

http://localhost:8080/api

```

 

Esta URL esta definida en:

 

```text

frontend/Insert_Coin_Test/src/app/services/concierto.service.ts

```

 

Constante utilizada:

 

```ts

const API_BASE_URL = 'http://localhost:8080/api';

```

 

### Puerto del backend

 

El backend se ejecuta en el puerto `8080`.

 

Esta configurado en:

 

```text

backend/concert-backend/src/main/resources/application.properties

```

 

```properties

server.port=8080

```

 

### Puerto del frontend

 

El frontend se ejecuta por defecto en el puerto `4200`.

 

URL:

 

```text

http://localhost:4200

```

 

### CORS

 

El backend permite peticiones desde el frontend local:

 

```text

http://localhost:4200

```

 

Esta configuracion se encuentra en:

 

```text

backend/concert-backend/src/main/java/com/insertcoin/concertapi/config/WebConfig.java

```

 

Configuracion actual:

 

```java

registry.addMapping("/api/**")

        .allowedOrigins("http://localhost:4200")

        .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")

        .allowedHeaders("*");

```

 

Si se cambia el puerto del frontend, tambien hay que actualizar esta configuracion.

 

## Problemas encontrados durante el desarrollo

 

Durante el desarrollo del proyecto se encontraron algunos problemas que se fueron resolviendo:

 

1. En la aplicacion web se quedaban algunos espacios en blanco. Al realizar la integracion con el backend y cargar los datos reales desde la API, este problema quedo solucionado.

 

2. Hubo problemas con los mensajes de error de los formularios. Fue necesario revisar la validacion y la forma en la que se mostraban los mensajes para que el usuario pudiera entender correctamente que campos debia corregir.

 

3. Al entrar en la base de datos H2, la URL JDBC que aparece por defecto no siempre coincide con la base de datos del proyecto. Para conectarse correctamente, hay que cambiarla a:

 

```text

jdbc:h2:mem:concertdb

```

 

4. El usuario y la contrasena de H2 deben dejarse por defecto. El usuario es `sa` y la contrasena debe quedar vacia.

 

## Problemas frecuentes y solucion

 

### El frontend no muestra conciertos

 

Comprueba primero que el backend esta arrancado:

 

```text

http://localhost:8080/api/concerts

```

 

Si esa URL no responde, hay que arrancar el backend.

 

### Error de CORS en el navegador

 

Este error puede aparecer si el frontend no se esta ejecutando en `http://localhost:4200` o si el backend no tiene permitido ese origen.

 

Solucion:

 

- Revisar el puerto real del frontend.

- Revisar el archivo `WebConfig.java`.

- Reiniciar el backend despues de cambiar la configuracion.

 

### El puerto 8080 esta ocupado

 

Puedes cambiar el puerto del backend en:

 

```text

backend/concert-backend/src/main/resources/application.properties

```

 

Ejemplo:

 

```properties

server.port=8081

```

 

Si cambias el puerto, tambien debes cambiar la URL del backend en el servicio Angular:

 

```ts

const API_BASE_URL = 'http://localhost:8081/api';

```

 

### El puerto 4200 esta ocupado

 

Puedes arrancar Angular en otro puerto:

 

```bash

ng serve --port 4300

```

 

Si haces esto, tambien debes modificar CORS en el backend para permitir el nuevo origen:

 

```text

http://localhost:4300

```

 

### `ng` no se reconoce como comando

 

Instala Angular CLI:

 

```bash

npm install -g @angular/cli

```

 

O ejecuta la aplicacion con el script del proyecto:

 

```bash

npm start

```

 

### Error al compilar Java

 

Comprueba que se esta usando Java 17 o superior:

 

```bash

java -version

```

 

El proyecto esta configurado para Java 17:

 

```xml

<java.version>17</java.version>

```

 

## Notas finales

 

- Primero se arranca el backend y despues el frontend.

- El backend se ejecuta en `http://localhost:8080`.

- El frontend se ejecuta en `http://localhost:4200`.

- La API se consume desde `http://localhost:8080/api`.

- H2 esta disponible en `http://localhost:8080/h2-console`.

- La base de datos H2 es temporal porque esta en memoria.

- Si se cambian los puertos, hay que actualizar la URL del backend en Angular y la configuracion CORS en Spring Boot.
