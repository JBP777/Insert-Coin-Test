# H2 Database Skill

## Objetivo
Configurar y utilizar H2 en memoria para desarrollo.

## Configuración principal
spring.datasource.url=jdbc:h2:mem:concertdb
spring.h2.console.enabled=true
spring.jpa.hibernate.ddl-auto=update

## Funcionalidades
- Base de datos temporal
- Consola web H2
- Datos de prueba rápidos

## Archivos relacionados
- application.properties
- data.sql
- schema.sql

## Buenas prácticas
- Usar H2 solo en desarrollo
- Mantener datos demo simples
- Activar consola H2

## Requisitos que cubre
- H2 en memoria obligatorio
- Persistencia básica