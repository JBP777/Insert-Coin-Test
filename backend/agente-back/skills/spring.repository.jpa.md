# Skill: Spring Data JPA Repository

## Objetivo
Acceder a la base de datos usando Spring Data JPA.

---

## Responsabilidad
- Consultas a base de datos
- Persistencia de entidades
- Queries simples derivadas del nombre del método

---

## Reglas
- NO incluir lógica de negocio
- NO usar en controllers directamente
- Preferir métodos derivados (findBy..., countBy...)

---

## Estructura

public interface ExampleRepository extends JpaRepository<Example, Long> {
    List<Example> findByName(String name);
}

---

## Buenas prácticas
- Usar naming conventions de Spring Data
- Evitar SQL manual salvo necesidad
- Mantener interfaces limpias