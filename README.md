# Proyecto de Conciertos

Aplicacion web para gestionar conciertos y asistentes. El proyecto esta dividido en un backend REST con Spring Boot, una base de datos H2 en memoria y un frontend Angular que consume la API para listar conciertos, crear nuevos conciertos, ver detalles y registrar asistentes.

## Estructura del repositorio

```text
Insert-Coin-Test/
|-- backend/
|   |-- concert-backend/
|   |   |-- src/main/java/com/insertcoin/concertapi/
|   |   |   |-- config/          # Configuracion CORS
|   |   |   |-- controller/      # Endpoints REST
|   |   |   |-- dto/             # Objetos de entrada
|   |   |   |-- exception/       # Manejo de errores
|   |   |   |-- model/           # Entidades JPA
|   |   |   |-- repository/      # Repositorios Spring Data
|   |   |   `-- service/         # Logica de negocio
|   |   |-- src/main/resources/
|   |   |   `-- application.properties
|   |   |-- pom.xml
|   |   |-- mvnw
|   |   `-- mvnw.cmd
|   `-- agente-back/
|-- frontend/
|   |-- Insert_Coin_Test/
|   |   |-- src/app/
|   |   |   |-- services/        # Servicio HTTP hacia el backend
|   |   |   |-- registro-concierto/
|   |   |   |-- formulario-registro/
|   |   |   |-- informacion-concierto/
|   |   |   `-- imagenes/
|   |   |-- angular.json
|   |   |-- package.json
|   |   `-- package-lock.json
|   `-- agente-front/
`-- README.md
```

## Requisitos previos

Antes de arrancar el proyecto, comprueba que tienes instalado:

- Java 17 o superior.
- Maven, o bien usar el wrapper incluido en el backend: `mvnw.cmd` en Windows o `./mvnw` en Linux/macOS.
- Node.js.
- npm, normalmente incluido con Node.js.
- Angular CLI.

Comandos utiles para comprobar versiones:

```bash
java -version
mvn -version
node -v
npm -v
ng version
```

Si no tienes Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli
```

## Arrancar el backend

Abre una terminal en la raiz del repositorio y entra en la carpeta del backend:

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

Si prefieres usar Maven instalado en tu sistema:

```bash
mvn spring-boot:run
```

Cuando arranque correctamente, el backend quedara disponible en:

```text
http://localhost:8080
```

La API REST usa el prefijo:

```text
http://localhost:8080/api
```

Endpoints principales:

```text
GET  /api/concerts
GET  /api/concerts/{id}
POST /api/concerts
GET  /api/concerts/{id}/attendees
POST /api/attendees
```

## Comprobar H2

El proyecto usa H2 en memoria. La consola esta habilitada en:

```text
http://localhost:8080/h2-console
```

Datos de conexion:

```text
JDBC URL: jdbc:h2:mem:concertdb
User: sa
Password: dejar vacio
```

Importante: al ser una base de datos en memoria, los datos se reinician cuando se para el backend.

## Arrancar el frontend

Abre otra terminal en la raiz del repositorio y entra en la carpeta del frontend:

```bash
cd frontend/Insert_Coin_Test
```

Instala las dependencias:

```bash
npm install
```

Arranca Angular:

```bash
npm start
```

Tambien puedes usar directamente:

```bash
ng serve
```

Cuando arranque correctamente, el frontend quedara disponible en:

```text
http://localhost:4200
```

## Probar la aplicacion

1. Asegurate de tener el backend arrancado en `http://localhost:8080`.
2. Asegurate de tener el frontend arrancado en `http://localhost:4200`.
3. Abre el navegador en:

```text
http://localhost:4200
```

4. Entra en el listado de conciertos. La ruta principal redirige a:

```text
http://localhost:4200/conciertos
```

5. Comprueba que se muestran los conciertos existentes.
6. Crea un concierto desde el formulario correspondiente.
7. Abre el detalle de un concierto.
8. Crea asistentes asociados a un concierto.
9. Vuelve al listado o al detalle para comprobar que los datos se actualizan.

Rutas principales del frontend:

```text
/conciertos       # Listado de conciertos
/registro         # Formulario de registro
/concierto/:id    # Informacion de un concierto
/imagenes         # Vista de imagenes
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

Constante:

```ts
const API_BASE_URL = 'http://localhost:8080/api';
```

Si cambias el puerto del backend o despliegas la API en otra URL, actualiza ese valor.

### Puerto del backend

El backend arranca en el puerto `8080`. Esta configurado en:

```text
backend/concert-backend/src/main/resources/application.properties
```

Propiedad:

```properties
server.port=8080
```

### Puerto del frontend

Angular arranca por defecto en el puerto `4200`:

```text
http://localhost:4200
```

Si necesitas usar otro puerto:

```bash
ng serve --port 4300
```

Si haces esto, tambien tendras que actualizar la configuracion CORS del backend.

### CORS

El backend permite peticiones desde:

```text
http://localhost:4200
```

La configuracion esta en:

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

Si el frontend se ejecuta en otro puerto, por ejemplo `4300`, cambia `allowedOrigins` a:

```java
.allowedOrigins("http://localhost:4300")
```

## Problemas frecuentes y solucion

### El frontend no carga datos

Comprueba que el backend esta arrancado:

```text
http://localhost:8080/api/concerts
```

Si esa URL no responde, arranca el backend con Maven.

### Error de CORS en el navegador

Suele ocurrir cuando el frontend no esta en `http://localhost:4200` o cuando el backend no tiene permitido el origen correcto.

Solucion:

- Comprueba el puerto real del frontend.
- Revisa `WebConfig.java`.
- Reinicia el backend despues de cambiar CORS.

### El puerto 8080 ya esta ocupado

Cambia el puerto del backend en `application.properties`:

```properties
server.port=8081
```

Despues actualiza tambien la URL del backend en `concierto.service.ts`:

```ts
const API_BASE_URL = 'http://localhost:8081/api';
```

### El puerto 4200 ya esta ocupado

Arranca Angular en otro puerto:

```bash
ng serve --port 4300
```

Despues actualiza CORS en el backend para permitir `http://localhost:4300`.

### No puedo entrar en H2

Comprueba estos valores:

```text
URL: http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:concertdb
User: sa
Password: vacio
```

Tambien verifica que el backend sigue arrancado. Si paras el backend, la base de datos H2 desaparece porque esta en memoria.

### `ng` no se reconoce como comando

Instala Angular CLI globalmente:

```bash
npm install -g @angular/cli
```

O usa el script del proyecto:

```bash
npm start
```

### Error con dependencias de Node

Elimina dependencias instaladas y reinstala:

```bash
rm -rf node_modules
npm install
```

En Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### Error al compilar Java

Comprueba que estas usando Java 17 o superior:

```bash
java -version
```

El backend esta configurado con:

```xml
<java.version>17</java.version>
```

## Notas finales

- Arranca siempre el backend antes de usar el frontend.
- H2 es una base de datos temporal en memoria; no conserva datos entre reinicios del backend.
- El frontend y el backend deben mantener puertos compatibles con la configuracion CORS.
- Para desarrollo local, la configuracion esperada es:

```text
Backend:  http://localhost:8080
API:      http://localhost:8080/api
H2:       http://localhost:8080/h2-console
Frontend: http://localhost:4200
```
