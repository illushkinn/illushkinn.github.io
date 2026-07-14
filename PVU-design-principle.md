# Proportional Viewport Utilization (PVU)

*Principio de diseño para consistencia visual en mobile*

---

## Definición

Cuando dos o más interfaces tienen distinta densidad de contenido pero deben percibirse con el mismo peso visual en viewport mobile, se compensa ajustando el espaciado vertical (paddings, gaps, márgenes) para que el viewport se utilice **proporcionalmente** — no igual — según el contenido disponible.

---

## El problema que resuelve

En mobile el viewport es chico y finito. Si el proyecto A tiene 5 bloques de contenido y el proyecto B tiene 4, el que tiene menos se siente "vacío" y el que tiene más se siente "apretado" — aunque ambos ocupen 100dvh.

El ojo del cliente no mide píxeles, pero **siente** la diferencia.

PVU resuelve eso redistribuyendo el espacio vacío de forma intencional para que el ritmo visual sea equivalente entre interfaces independientes.

---

## Fórmula práctica

```
PVU = (suma gaps + paddings) ∝ (viewport height - total content height)
```

En criollo: **a menos contenido, más espaciado entre elementos.** El viewport se llena igual, pero con aire en vez de con bloques.

---

## Cuándo aplica

### Sí aplica
- Landing pages con distinta densidad de contenido
- Heroes de proyectos relacionados (portfolio, multi-brand)
- Cards con distinto contenido en una misma grilla
- Secciones de servicios con copy de distinta extensión
- Navegación entre proyectos independientes

### No aplica
- Tablas o data grids (tienen su propio ritmo)
- Dashboards densos (priorizan información sobre percepción)
- Componentes que comparten la misma fila (side-by-side)

---

## Cómo aplicarlo (método)

1. **Identificá la densidad** — contá bloques de contenido de cada interfaz (título, subtítulo, meta, CTA, badges, etc.).

2. **Elegí un proyecto de referencia** — el que tenga mejor ritmo visual, el que "respira bien".

3. **Ajustá gaps proporcionalmente:**
   - Si proyecto A tiene N bloques y proyecto B tiene N-1, los gaps en B deben ser ~1.3×–1.5× los gaps en A.
   - Mismo padding-top para todos los proyectos (punto de partida alineado).
   - Aumentá márgenes entre bloques, no alrededor del contenedor.

4. **Testeá en viewport real mobile** (320px–430px). No confíes solo en DevTools — probá en físico.

5. **Iterá:** si un proyecto se siente "caído" (mucho espacio arriba) o "apretado" (poco espacio entre bloques), ajustá fino.

---

## Principios relacionados

- **Gestalt — Similitud:** el ritmo vertical consistente crea una familia visual entre proyectos independientes.
- **Ley de Hick (inversa):** menos contenido ≠ menos viewport. El ojo procesa el espacio total, no la cantidad de elementos.
- **Viewport as Canvas:** cada pixel vertical es valioso. Distribuirlo según la densidad disponible es diseño intencional, no casualidad.

---

## Ejemplo vivo: TBC vs Illushkinn

| | TBC (denso) | Illushkinn (liviano) | Ajuste PVU |
|---|---|---|---|
| Bloques de contenido | 5 | 4 | — |
| padding-top mobile | 1.5rem | 2rem | mismo punto de partida |
| gap entre bloques | ~1rem | 2.5rem | +150% para compensar 1 bloque menos |
| b2b-tags spacer | 2rem | — | solo TBC lo necesita |

Ambos ocupan 100dvh. Ambos se perciben con el **mismo peso visual**.

---

*Aplicado por primera vez en The Brand Crew (thebrandcrew.lat) e Illushkinn (illushkinn.github.io).*

*Julio 2026.*
