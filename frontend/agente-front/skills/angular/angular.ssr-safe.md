# Skill: SSR Safe Component

## Objetivo
Asegurar que el código funcione con Angular SSR.

## Reglas
- No usar window/document directamente
- Usar isPlatformBrowser si es necesario
- Evitar código dependiente del navegador
- Mantener lógica universal (server + client)