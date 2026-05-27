# Skill: DTO Mapping Strategy

## Objetivo
Separar entidades internas de respuestas API.

---

## Reglas
- NO exponer entidades directamente en API
- Usar DTOs para respuestas
- Mapear en Service layer o Mapper

---

## Ejemplo

public class GameDto {
    private Long id;
    private String title;
}

---

## Buenas prácticas
- Evitar ciclos infinitos en JSON (relaciones 1:N)
- Reducir datos innecesarios en frontend