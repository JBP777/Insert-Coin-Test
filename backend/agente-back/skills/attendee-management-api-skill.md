# Attendee Management API Skill

## Objetivo
Gestionar asistentes asociados a conciertos.

## Endpoints mínimos
GET /api/concerts/{id}/attendees
POST /api/attendees

## Campos comunes
- name
- email
- ticketQuantity
- concertId

## Validaciones
- Nombre obligatorio
- Email válido
- ticketQuantity > 0

## Requisitos que cubre
- Consulta relación 1:M
- Crear entidad hija