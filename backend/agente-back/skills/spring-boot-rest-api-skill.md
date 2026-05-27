# Spring Boot REST API Skill

## Objetivo
Crear APIs REST usando Spring Boot 3.5.14 y Java 17 siguiendo arquitectura limpia Controller -> Service -> Repository.

## Responsabilidades
- Crear endpoints REST
- Gestionar peticiones HTTP
- Devolver respuestas JSON
- Usar códigos HTTP correctos
- Mantener estructura REST clara

## Tecnologías
- Spring Boot
- Spring Web
- Jackson JSON

## Conceptos clave
- @RestController
- @RequestMapping
- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping
- ResponseEntity
- @PathVariable
- @RequestBody

## Buenas prácticas
- Mantener endpoints simples
- Separar lógica de negocio en services
- No acceder al repository desde controllers
- Usar rutas REST limpias

## Ejemplo de endpoints
GET /api/concerts
GET /api/concerts/{id}
POST /api/concerts
GET /api/concerts/{id}/attendees
POST /api/attendees

## Requisitos que cubre
- API REST funcional
- Operaciones básicas sobre datos
- Consulta de relación entre entidades