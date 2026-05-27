# Skill: REST API Design

## Objetivo
Definir endpoints consistentes y escalables.

---

## Reglas
- Usar naming REST claro
- Usar plurales (/games, /reviews)
- Evitar verbos en URLs

---

## Ejemplos correctos
GET /api/games
GET /api/games/trending
GET /api/games/{id}/reviews

---

## Ejemplos incorrectos
/getGames
/getTrendingGames
/deleteGameById

---

## Buenas prácticas
- Versionar API si crece (/api/v1/)
- Mantener consistencia en todo el backend