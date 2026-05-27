# Hibernate 1:M Relations Skill

## Objetivo
Implementar correctamente la relación 1:M entre Concert y Attendee.

## Modelo principal
Concert (1) -> (N) Attendee

## Conceptos clave
- @OneToMany
- @ManyToOne
- mappedBy
- @JoinColumn

## Problemas que debe evitar
- Loops infinitos JSON
- Relaciones mal sincronizadas
- Errores LazyInitialization

## Solución JSON recomendada
- @JsonManagedReference
- @JsonBackReference

## Buenas prácticas
- La FK vive en Attendee
- Concert es entidad principal
- Attendee pertenece a un concierto

## Requisitos que cubre
- Relación 1:M obligatoria
- Persistencia relacional
- Consulta de entidades relacionadas