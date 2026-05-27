# Skill: Spring Service Layer

## Objetivo
Implementar la lógica de negocio de la aplicación.

---

## Responsabilidad
- Contener lógica de negocio
- Orquestar repositories
- Transformar entidades si es necesario

---

## Reglas
- NO exponer lógica en controllers
- NO contener código de acceso HTTP
- Usar @Service
- Mantener métodos pequeños y testables

---

## Estructura

@Service
public class ExampleService {

    private final ExampleRepository repository;

    public ExampleService(ExampleRepository repository) {
        this.repository = repository;
    }

    public List<Example> getAll() {
        return repository.findAll();
    }
}

---

## Buenas prácticas
- Mantener lógica centralizada
- Evitar duplicación
- Separar reglas de negocio de persistencia