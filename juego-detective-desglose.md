# Juego Detective en Pareja — Análisis y Desglose Web

## El juego original: ¿de qué se trata?

Los juegos que se pusieron de moda en Argentina son principalmente **Mente Criminal** y **Crímenes Imperfectos** (hay varios clones: EcosMystery, Caja del Crimen, Expedientes Criminales, etc.). Todos comparten el mismo concepto: te mandan una caja con un **expediente policial** de un crimen ficticio y tenés que resolverlo en casa, en pareja o con amigos.

La gracia es que no es un juego de mesa tradicional con tablero y turnos. Es más bien una **experiencia narrativa de investigación**: vos y tu pareja son los detectives.

---

## Componentes del juego físico

El expediente suele incluir:

**Documentos en papel (los "sobres")**
- Varios sobres físicos que se abren en orden (el siguiente se abre solo cuando respondés correctamente la pista anterior)
- Artículos de diario sobre el crimen
- Actas de interrogatorio de cada sospechoso
- Informes periciales / forenses (autopsia, toxicología, balística)
- Fotos de la escena del crimen
- Registros telefónicos o capturas de chat
- Documentos legales (testamentos, contratos, escrituras)
- Declaraciones de testigos
- Mapas del lugar del crimen y la ciudad

**Elementos visuales**
- Pizarra de sospechosos (tipo "mapa de conspiración") con fotos y datos de cada sospechoso
- Pins y notas adhesivas para conectar pistas
- Un mapa de 32×47 cm en algunos casos

**Componentes digitales (con contraseña)**
- Audios de interrogatorios
- Videos de cámaras de seguridad
- Sobres digitales que se desbloquean con una contraseña que encontrás en los sobres físicos

**Sistema de juego**
- Duración: 2 a 8 horas dependiendo del caso
- 1 a 12 jugadores (ideal 2-4)
- Para abrir el siguiente sobre, tenés que resolver la pregunta/pista del anterior
- Al final acusás a un sospechoso y justificás tu teoría
- Hay un sistema de pistas/ayudas si te trabás
- Un mecanismo para verificar si tu solución es correcta

---

## ¿Qué hay que replicar en la web?

La versión web reemplaza todos los elementos físicos con equivalentes digitales. A continuación el desglose completo.

---

## FASE 1 — Contenido: Escribir el caso

Antes de tocar una línea de código, hay que tener el **caso completo escrito**. Esto es el 60% del trabajo.

### 1.1 El crimen
- ¿Quién murió? ¿Cómo? ¿Cuándo? ¿Dónde?
- Escribir el escenario completo con todos los detalles del crimen
- Definir la solución (quién lo hizo, por qué, cómo)

### 1.2 Los sospechosos (4 a 6 personas)
Por cada sospechoso:
- Nombre, edad, foto (puede ser IA generada)
- Relación con la víctima
- Coartada (qué dice que estaba haciendo)
- Motivación posible
- Al menos una mentira o inconsistencia en su historia

### 1.3 Las pistas (mínimo 15-20 elementos)
Tipos de documentos a crear:
- Artículo de diario con la noticia del crimen
- Actas de interrogatorio (una por sospechoso)
- Informe forense / autopsia
- Fotos de la escena (pueden ser fotos reales editadas o IA generadas)
- Registros de llamadas o chats entre personajes
- Un mapa del lugar
- 1 o 2 documentos "trampa" que parecen importantes pero no lo son

### 1.4 Las pistas progresivas (los "sobres")
Dividir el caso en 3 actos:
- **Sobre 1**: Los hechos básicos del crimen y primeras entrevistas. Pista para abrir el Sobre 2.
- **Sobre 2**: Evidencia que complica las coartadas. Contradicciones. Pista para abrir el Sobre 3.
- **Sobre 3**: El elemento clave que cierra el caso. La acusación final.

---

## FASE 2 — Pantallas principales de la app web

### Pantalla 1: Intro / Briefing
- Texto del caso con la descripción del crimen
- Botón para empezar la investigación
- Opción de configurar nombres de los jugadores

### Pantalla 2: El Expediente (pantalla principal)
La pantalla más importante. Tiene varias secciones:

**Panel de documentos** — lista de todos los archivos disponibles (los que ya se desbloquearon). Al hacer click abre el documento en un visor.

**Visor de documentos** — muestra el documento seleccionado: texto estilizado como papel envejecido, imágenes, capturas de chat, mapas. Cada tipo de doc tiene su propio estilo visual.

**Panel de sospechosos** — foto + nombre de cada sospechoso. Al clickear muestra su ficha completa.

### Pantalla 3: La Pizarra (tablero de investigación)
El elemento más inmersivo. Un tablero visual estilo "mapa de conspiración" donde los jugadores pueden:
- Ver todas las pistas desbloqueadas como tarjetas
- Arrastrarlas y ordenarlas como quieran
- Conectarlas con líneas (como los hilos rojos de las series)
- Agregar notas adhesivas escritas por ellos

### Pantalla 4: Desbloquear siguiente sobre
Cuando creés que resolviste la pista del sobre actual, aparece un campo para ingresar la respuesta. Si es correcta, se desbloquean los nuevos documentos.

### Pantalla 5: Acusación final
Al terminar el Sobre 3, aparece la pantalla de acusación:
- Elegís al sospechoso
- Escribís en 2-3 líneas por qué creés que fue él/ella
- Botón "Revelar solución"
- Pantalla de resolución con la historia completa de cómo ocurrió

### Pantalla 6: Pistas (opcional)
Un sistema de ayudas con 3 niveles de pista por sobre, que se revelan de a una para no arruinar la experiencia.

---

## FASE 3 — Mecánicas de juego

### Sistema de sobres / progresión
- El juego empieza con solo el Sobre 1 visible
- Cada sobre tiene una "contraseña" o respuesta esperada
- Al ingresar la respuesta correcta se desbloquean los docs del siguiente sobre
- Hacer el matching flexible (ignorar mayúsculas, tildes, espacios extra)

### Sistema de notas colaborativas
- Área de texto libre donde los dos jugadores pueden escribir sus teorías mientras juegan
- Se guarda en el navegador (localStorage) para no perder el progreso

### Estado del juego
- Guardar progreso: qué sobres se abrieron, qué documentos se vieron, notas escritas
- Poder retomar la partida si se cierra el navegador

---

## FASE 4 — Diseño visual

El estilo visual es fundamental para la inmersión. Inspirarse en:

**Paleta**: Colores oscuros, papeles amarillentos, tintas viejas. Negro, beige/sepia, rojo sangre como acento.

**Tipografías**: 
- Una tipografía de máquina de escribir para documentos oficiales (ej: `Courier New`, `Special Elite`)
- Una tipografía handwriting para notas manuscritas (ej: `Patrick Hand`, `Caveat`)
- Una sans-serif limpia para la UI (ej: `Inter`)

**Efectos visuales**:
- Documentos con textura de papel
- Sellos de "CONFIDENCIAL" o "CASO ABIERTO" en rojo
- Fotos con borde estilo Polaroid
- Carpetas y sobres animados al abrirse
- Sonido ambiente opcional (lluvia, oficina de policía)

**La pizarra**:
- Fondo oscuro tipo corcho o pared de ladrillo
- Tarjetas de papel con sombra
- Líneas de conexión rojas
- Efecto de "notas pegadas con cinta"

---

## FASE 5 — Stack técnico recomendado

Para empezar rápido y sin complicaciones de servidor:

**Opción A — Más simple (HTML/CSS/JS puro)**
- Todo en un solo archivo HTML o carpeta de archivos estáticos
- No necesita servidor ni base de datos
- Se puede hostear gratis en GitHub Pages o Netlify
- Ideal para un caso único

**Opción B — React (más escalable)**
- Si quieren hacer varios casos o agregar features en el tiempo
- React + Vite para desarrollo rápido
- Hostear en Vercel gratis

**Almacenamiento**: `localStorage` del navegador — guarda el progreso automáticamente sin necesidad de login ni base de datos.

**Imágenes y media**: Carpeta local o Cloudinary (gratis hasta cierto límite) para las fotos del caso.

---

## Orden de trabajo sugerido

| Prioridad | Tarea | Tiempo estimado |
|-----------|-------|-----------------|
| 1 | Escribir el caso completo (crimen, sospechosos, documentos) | 4-6 hs |
| 2 | Diseñar los documentos (Word/Canva para los PDFs/imágenes) | 3-4 hs |
| 3 | Armar el esqueleto HTML: pantalla de intro + visor de docs | 3-4 hs |
| 4 | Sistema de sobres y desbloqueo progresivo | 2-3 hs |
| 5 | La pizarra interactiva | 4-5 hs |
| 6 | Pantalla de acusación final y solución | 1-2 hs |
| 7 | Diseño visual y efectos | 3-4 hs |
| 8 | Prueba completa como jugadores | 2 hs |

**Total estimado: 22 a 32 horas de trabajo** para un caso completo y pulido.

---

## Por dónde empezar hoy

Lo más importante es no empezar por el código. Empezar por **inventar el caso**:

1. Elegir el escenario (¿un asesinato en una mansión? ¿una desaparición en un pueblo? ¿un robo en una galería de arte?)
2. Escribir la historia completa con la solución ya resuelta
3. Definir los 5 sospechosos con sus fichas
4. Armar la lista de 20 pistas y documentos
5. Decidir cuáles van en cada sobre

Una vez que el caso existe en papel, hacer la web es la parte fácil.
