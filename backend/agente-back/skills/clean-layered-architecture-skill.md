# Clean Layered Architecture Skill

## Objetivo
Mantener arquitectura clara y sencilla.

## Estructura recomendada
controller/
service/
repository/
model/
dto/
exception/

## Flujo correcto
Controller -> Service -> Repository

## Responsabilidades
- Controller: HTTP
- Service: lógica negocio
- Repository: acceso datos

## Buenas prácticas
- No mezclar responsabilidades
- Mantener clases pequeñas
- Código fácil de defender

## Requisitos que cubre
- Arquitectura limpia
- Separación de responsabilidades