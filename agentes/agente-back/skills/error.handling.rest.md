# Skill: REST Error Handling

## Objetivo
Gestionar errores de forma consistente en la API.

---

## Reglas
- Usar HTTP status codes correctamente
- No devolver stack traces al frontend
- Centralizar errores

---

## Ejemplo

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handle(RuntimeException ex) {
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(ex.getMessage());
    }
}

---

## Buenas prácticas
- 404 para recursos no encontrados
- 400 para errores de validación
- 500 solo para errores internos reales