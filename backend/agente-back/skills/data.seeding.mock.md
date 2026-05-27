# Skill: Data Seeding (Mock Data)

## Objetivo
Insertar datos iniciales para desarrollo y testing.

---

## Reglas
- Usar CommandLineRunner o data.sql
- No depender del frontend para crear datos
- Mantener datasets pequeños

---

## Ejemplo

@Bean
CommandLineRunner init(GameRepository repo) {
    return args -> {
        Game g = new Game();
        g.setTitle("Elden Ring");

        repo.save(g);
    };
}

---

## Buenas prácticas
- Usar solo en desarrollo
- Separar datos de prueba de lógica real