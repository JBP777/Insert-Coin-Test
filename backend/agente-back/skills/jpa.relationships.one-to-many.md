# Skill: JPA One-to-Many Relationship

## Objetivo
Definir relaciones 1:N entre entidades correctamente.

---

## Ejemplo típico
Game (1) → (N) Reviews

---

## Reglas
- La entidad “N” contiene la FK (@ManyToOne)
- La entidad “1” usa @OneToMany(mappedBy = "...")

---

## Ejemplo

@Entity
public class Game {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
    private List<Review> reviews;
}

---

@Entity
public class Review {

    @Id
    @GeneratedValue
    private Long id;

    private String comment;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;
}

---

## Buenas prácticas
- Usar cascade con cuidado
- Evitar relaciones bidireccionales innecesarias en fases iniciales