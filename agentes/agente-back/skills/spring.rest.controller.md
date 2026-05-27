# Skill: Spring REST Controller

## Objetivo
Crear controllers REST en Spring Boot que expongan endpoints limpios y sin lógica de negocio.

---

## Responsabilidad
- Exponer endpoints HTTP
- Delegar toda la lógica al Service
- Recibir y devolver DTOs o entidades simples (según fase del proyecto)

---

## Reglas
- NO incluir lógica de negocio en el controller
- NO acceder directamente a repositories
- Usar constructor injection
- Usar @RestController y @RequestMapping
- Mantener endpoints pequeños y claros

---

## Estructura recomendada

@RestController
@RequestMapping("/api/{resource}")
public class ExampleController {

    private final ExampleService service;

    public ExampleController(ExampleService service) {
        this.service = service;
    }

    @GetMapping
    public List<ExampleDto> getAll() {
        return service.getAll();
    }
}

---

## Buenas prácticas
- Un controller por recurso principal
- Naming REST coherente (/games, /reviews)
- Usar ResponseEntity si hay control de status HTTP