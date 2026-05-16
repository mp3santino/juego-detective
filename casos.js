// ============================================================
// ARCHIVO DE CASOS — JUEGO DETECTIVE EN PAREJA
// ⚠️  SPOILERS — No leer hasta haber jugado todos los casos
// ============================================================

const CASOS = [

// ════════════════════════════════════════════════════════════
// CASO 1: LA ÚLTIMA NOCHE EN VILLA CARLOS PAZ
// ════════════════════════════════════════════════════════════
{
  id: "caso1",
  titulo: "La última noche en Villa Carlos Paz",
  subtitulo: "Una reunión de amigos. Una muerte que nadie esperaba.",
  ambientacion: "Villa Carlos Paz, Córdoba — enero 2025",
  dificultad: "Intermedio",
  duracion: "90–120 min",
  color: "#7c3aed",

  intro: `El sábado 18 de enero, un grupo de amigos del secundario se reunió en una villa alquilada sobre las sierras de Villa Carlos Paz para celebrar diez años desde la graduación. La anfitriona era Valentina Rojo, influencer con casi un millón de seguidores.

A las 2:47 de la madrugada, uno de los invitados la encontró desplomada en el baño de la planta alta. El SAME llegó a las 3:12. Valentina fue declarada muerta a las 3:29.

La policía de Córdoba selló la propiedad. Nadie se fue. Ustedes son los investigadores asignados al caso.`,

  victima: {
    nombre: "Valentina Rojo",
    edad: 32,
    ocupacion: "Influencer de lifestyle (@valentinaenelmundo, 870k seguidores)",
    descripcion: "Organizada, ambiciosa y carismática. Había transformado su cuenta de Instagram en una marca personal rentable. En los últimos meses estaba en pleno conflicto con alguien de su círculo más cercano, aunque nunca lo mencionó públicamente.",
  },

  sospechosos: [
    {
      id: "s1",
      nombre: "Marcos Díaz",
      edad: 32,
      ocupacion: "Contador público. Ex novio de Valentina (relación 2017–2021).",
      descripcion: "Tranquilo, metódico. Asistió a la fiesta "para cerrar ciclos", según dijo. Fue el último en ver a Valentina con vida antes de que subiera al baño.",
      coartada: "Estaba en el jardín trasero fumando con Lucas Vega entre las 2:20 y las 2:50 AM.",
      iniciales: "MD",
      color: "#4f46e5"
    },
    {
      id: "s2",
      nombre: "Sofía Peralta",
      edad: 31,
      ocupacion: "Diseñadora gráfica. Mejor amiga de Valentina desde los 15 años.",
      descripcion: "Extrovertida y emocional. Fue la primera en romper a llorar cuando encontraron el cuerpo. Tiene una agencia de diseño que Valentina solía promocionar gratis.",
      coartada: "Estaba bailando en la pista interior toda la noche, vista por múltiples testigos.",
      iniciales: "SP",
      color: "#db2777"
    },
    {
      id: "s3",
      nombre: "Rodrigo Acosta",
      edad: 33,
      ocupacion: "DJ freelance. Amigo del grupo desde el secundario.",
      descripcion: "Relajado y simpático. Tocó en la fiesta gratis como favor a Valentina. Tiene antecedentes menores por posesión de estupefacientes, aunque nunca fue condenado.",
      coartada: "Detrás de la consola de música desde las 22hs hasta las 3AM. Varios invitados lo confirman.",
      iniciales: "RA",
      color: "#0891b2"
    },
    {
      id: "s4",
      nombre: "Camila Torres",
      edad: 31,
      ocupacion: "Empleada bancaria. Prima de Valentina.",
      descripcion: "Reservada. Tiene una relación complicada con Valentina desde que su abuela falleció el año pasado y dejó la herencia casi completa a Valentina.",
      coartada: "Estaba en el baño de la planta baja con mareos por el calor entre las 2:00 y las 2:40. Nadie puede confirmarlo.",
      iniciales: "CT",
      color: "#b45309"
    },
    {
      id: "s5",
      nombre: "Lucas Vega",
      edad: 35,
      ocupacion: "Fotógrafo. Contratado para documentar la reunión.",
      descripcion: "Profesional, distante. No era amigo del grupo; lo contrató Valentina. Parece saber más de lo que dice. Tiene credenciales de fotógrafo pero también colabora con medios digitales.",
      coartada: "Sacando fotos en el jardín trasero y la terraza entre las 2:00 y las 3:00. Marcos lo corrobora.",
      iniciales: "LV",
      color: "#059669"
    }
  ],

  sobres: [
    // ─── SOBRE 1 ───────────────────────────────────────────
    {
      id: "sobre1",
      titulo: "Sobre 1 — Los hechos",
      desbloqueado: true,
      preguntaDesbloqueo: null,
      respuestaDesbloqueo: null,
      pistaTexto: null,
      documentos: [
        {
          id: "c1d1",
          titulo: "La Voz del Interior — Edición Digital",
          tipo: "diario",
          fecha: "Domingo 19 de enero, 08:14 hs",
          contenido: `MUERTE EN FIESTA DE VILLA CARLOS PAZ CONMOCIONA A LAS REDES

La influencer cordobesa Valentina Rojo (32) fue hallada sin vida en el baño de una villa alquilada en Villa Carlos Paz durante una reunión privada de ex compañeros de secundario. La Policía de Córdoba confirmó que se trató de una muerte "en circunstancias a determinar" y que cinco personas presentes en la propiedad fueron retenidas para declarar.

Rojo, conocida en redes sociales como @valentinaenelmundo con más de 870.000 seguidores, era oriunda de Córdoba Capital y había organizado el encuentro para celebrar el décimo aniversario de su egreso del Colegio Nacional Simón Bolívar.

"Estamos devastados. Era una persona llena de vida", dijo una de las presentes, que prefirió no identificarse.

El SAME llegó al lugar aproximadamente a las 3:12 AM y constató el óbito a las 3:29 AM. La causa de muerte no fue oficialmente comunicada. Fuentes cercanas a la investigación señalaron que no se descarta ninguna hipótesis.

La propiedad fue sellada preventivamente. Cinco personas permanecen bajo custodia policial en el lugar.`
        },
        {
          id: "c1d2",
          titulo: "Informe Policial Inicial — Comisaría 3ª VCP",
          tipo: "informe",
          fecha: "19/01/2025 — 04:50 hs",
          contenido: `INFORME PRELIMINAR — CASO N° 0047-VCP-2025
Oficial actuante: Sargento Héctor Molina

HECHOS: A las 03:12 del 19/01/2025 se recibió llamado de emergencia desde la propiedad ubicada en Calle Las Rosas 2240, Villa Carlos Paz. El llamado fue realizado por el Sr. Rodrigo Acosta, DNI 32.441.887, quien informó haber encontrado a una mujer inconsciente en el baño de la planta alta.

Al arribar al domicilio (03:28 hs) se constató el cuerpo sin vida de una mujer de sexo femenino, identificada como Valentina Rojo, DNI 34.881.002, de 32 años. El SAME declaró el óbito a las 03:29 hs.

ESCENA: No se observaron señales externas de violencia física. El cuerpo fue hallado en el piso del baño principal, planta alta. Junto al cuerpo: un vaso de vidrio con restos de líquido (asegurado como evidencia, ref. EVD-001), un teléfono celular (asegurado, ref. EVD-002), y un blíster de pastillas vacío de nombre ilegible (asegurado, ref. EVD-003).

PERSONAS PRESENTES: Cinco individuos fueron identificados y retenidos en el lugar para declarar.
1. Marcos Díaz — DNI 34.120.334
2. Sofía Peralta — DNI 34.992.010
3. Rodrigo Acosta — DNI 32.441.887
4. Camila Torres — DNI 35.001.227
5. Lucas Vega — DNI 31.887.441

OBSERVACIÓN: Se solicita análisis toxicológico urgente de la evidencia EVD-001 y muestra de sangre de la víctima. La escena presenta indicios que ameritan investigación.

Estado: CASO ABIERTO`
        },
        {
          id: "c1d3",
          titulo: "Acta de Interrogatorio — Sofía Peralta",
          tipo: "interrogatorio",
          fecha: "19/01/2025 — 05:30 hs",
          contenido: `INTERROGATORIO — Sofía Peralta, 31 años
Oficial: Sargento Molina | Presencia: Abogado particular

P: ¿Cómo describiría su relación con Valentina Rojo?
R: Somos mejores amigas desde el colegio. Quince años juntas. Éramos como hermanas.

P: ¿Notó algo raro en ella durante la noche?
R: Estaba un poco tensa, sí. Pero no le pregunté por qué. Pensé que era el estrés de organizar todo.

P: ¿Vio a alguien acercarse al vaso de Valentina?
R: No. Pero yo estaba bailando casi toda la noche. No tenía visión de todo el lugar.

P: ¿Sabe si Valentina tenía conflictos con alguien del grupo?
R: [Pausa larga] Con Marcos siempre fue complicado. Él nunca le perdonó que lo dejara. Y con Camila había quilombo desde lo de la abuela... pero Valen me dijo que ya estaba superado.

P: ¿Cuándo fue la última vez que vio a Valentina con vida?
R: Cerca de las 2 de la mañana. Estábamos bailando juntas. Después ella fue a buscar algo para tomar y yo seguí en la pista.

P: ¿Algo más que quiera agregar?
R: Que esto no fue un accidente. Valen no tomaba pastillas. Nunca. Yo la conocía mejor que nadie.`
        },
        {
          id: "c1d4",
          titulo: "Acta de Interrogatorio — Camila Torres",
          tipo: "interrogatorio",
          fecha: "19/01/2025 — 06:10 hs",
          contenido: `INTERROGATORIO — Camila Torres, 31 años
Oficial: Sargento Molina | Sin representación legal

P: ¿Cuál era su relación con la víctima?
R: Prima. Nos criamos juntas. Aunque... últimamente no estábamos tan unidas.

P: ¿Por qué no estaban unidas?
R: [Suspira] Lo de mi abuela. Valentina se quedó con casi todo. Yo entiendo que mi abuela era libre de hacer lo que quería, pero... dolió.

P: ¿Hubo algún conflicto explícito entre ustedes?
R: Discutimos una vez, en diciembre. Fue fuerte. Pero después nos mandamos mensajes y quedó en paz. Igual que siempre.

P: ¿Dónde estaba entre las 2:00 y las 3:00 AM?
R: En el baño de la planta baja. Me vino un mareo, creo que era el calor y el alcohol. Estuve ahí un buen rato.

P: ¿Alguien la vio?
R: No que yo sepa. Estaba sola.

P: ¿Sabe si Valentina tomaba algún medicamento?
R: No. Valentina era obsesiva con su salud. Ni ibuprofeno tomaba sin consultarle a su médico.`
        },
        {
          id: "c1d5",
          titulo: "Ficha de la Víctima — Datos personales y profesionales",
          tipo: "ficha",
          fecha: "Preparado por investigación, 19/01/2025",
          contenido: `FICHA: VALENTINA ROJO
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre completo: Valentina Soledad Rojo
DNI: 34.881.002
Fecha de nacimiento: 03/04/1992
Domicilio: Av. Colón 3341, Piso 4 B, Córdoba Capital

OCUPACIÓN: Creadora de contenido digital / influencer
Instagram: @valentinaenelmundo (872.400 seguidores)
Ingresos mensuales estimados (2024): $3.200.000 ARS (contratos con marcas)

ESTADO CIVIL: Soltera
RELACIONES CONOCIDAS: Ex novio Marcos Díaz (2017–2021)

ANTECEDENTES MÉDICOS: Sin patologías crónicas registradas. Sin medicación habitual prescripta. Última consulta médica: diciembre 2024, chequeo rutinario, resultado normal.

SITUACIÓN LEGAL:
— Proceso civil iniciado en noviembre 2024 (datos reservados, a confirmar con juzgado interviniente)
— Sin antecedentes penales

CONTACTO DE EMERGENCIA: Raúl Rojo (padre), Tel: 351-4477-882`
        }
      ],
      pistaFinal: {
        texto: "El análisis toxicológico de la evidencia EVD-001 (el vaso junto al cuerpo) reveló la presencia de una sustancia. ¿Qué encontraron en el vaso de Valentina?",
        respuesta: ["pastillas", "somniferos", "barbitúricos", "benzodiazepinas", "medicamentos", "clonazepam", "alprazolam"]
      }
    },

    // ─── SOBRE 2 ───────────────────────────────────────────
    {
      id: "sobre2",
      titulo: "Sobre 2 — Las contradicciones",
      desbloqueado: false,
      documentos: [
        {
          id: "c1d6",
          titulo: "Informe Toxicológico — Instituto Forense Córdoba",
          tipo: "informe",
          fecha: "19/01/2025 — 14:30 hs",
          contenido: `INFORME TOXICOLÓGICO PRELIMINAR
Caso: 0047-VCP-2025 | Víctima: Valentina Rojo

MUESTRAS ANALIZADAS:
1. Sangre de la víctima (EVD-001A)
2. Contenido del vaso de vidrio (EVD-001)
3. Blíster encontrado en escena (EVD-003)

RESULTADOS:

Muestra de sangre: Presencia de CLONAZEPAM en concentración de 4.8 mg/L. La dosis terapéutica máxima es 0.06 mg/L. La concentración hallada es aproximadamente 80 veces superior al límite terapéutico. Esta concentración es consistente con una dosis letal en una persona sin tolerancia previa a la sustancia.

Vaso de vidrio: Positivo para clonazepam disuelto en bebida alcohólica (vodka tónica, según análisis). Concentración estimada: suficiente para inducir pérdida de conciencia y fallo respiratorio en adulto promedio.

Blíster: Correspondiente a CLONAZEPAM 2 mg (marca Rivotril). Estaba vacío. Se estima que contenía 10 comprimidos. Las tabletas fueron disueltas en la bebida.

CONCLUSIÓN: La muerte fue causada por intoxicación aguda con clonazepam administrado en bebida alcohólica. No hay signos de ingesta voluntaria. La víctima no tenía prescripción de esta medicación.

CLASIFICACIÓN FORENSE: HOMICIDIO`
        },
        {
          id: "c1d7",
          titulo: "Acta de Interrogatorio — Rodrigo Acosta",
          tipo: "interrogatorio",
          fecha: "19/01/2025 — 16:00 hs",
          contenido: `INTERROGATORIO — Rodrigo Acosta, 33 años
Oficial: Inspector Claudia Ferreyra (relevó al Sargento Molina)

P: Usted fue quien llamó al 911. ¿Puede describirnos qué vio?
R: Sí. Cerca de las 2:45 fui arriba a buscar mi mochila que había dejado en el cuarto. Al pasar por el pasillo vi la puerta del baño entreabierta y la luz prendida. Llamé, nadie contestó. Empujé la puerta y la vi en el piso.

P: ¿Notó algo raro durante la noche?
R: [Duda] Mirá, no sé si es relevante, pero... alrededor de la 1:30, cuando fui a buscar agua a la cocina, vi a Marcos. Estaba solo en la cocina, de espaldas a mí. Cuando me escuchó entrar se dio vuelta rápido y se puso nervioso. Agarró algo de la mesada y se lo metió en el bolsillo.

P: ¿Pudo ver qué era lo que agarró?
R: No con claridad. Era algo pequeño. Pensé que era droga y no quise meterme.

P: ¿Por qué no lo dijo antes?
R: Porque no quería quilombo. Pero después de lo del análisis toxicológico... me parece que tengo que decirlo.

P: ¿Tiene usted medicamentos en su posesión?
R: [Larga pausa] Tengo algo de marihuana. Eso es todo. Pueden revisar mi mochila.`
        },
        {
          id: "c1d8",
          titulo: "Mensajes recuperados del celular de Valentina — Hilo con Dra. Romina Suárez",
          tipo: "chat",
          fecha: "Mensajes del 10 al 15 de enero 2025",
          contenido: `[Contacto: Dra. Romina Suárez — Abogada]

10 ene — 11:32
Valentina: Roma, necesito que avancemos con la denuncia. Tengo todo el material. ¿Cuándo podemos vernos?

10 ene — 11:45
Dra. Suárez: Esta semana estoy full. ¿El lunes 20 a las 10?

10 ene — 11:48
Valentina: Perfecto. Y por favor que esto quede entre nosotras. Si él se entera antes de que presentemos todo, se va a cubrir las espaldas.

13 ene — 19:21
Valentina: Acabo de encontrar otro movimiento. Son $180.000 ARS más que se fueron sin que yo autorice nada. En total ya son casi 900 lucas. Me quiero morir.

13 ene — 19:35
Dra. Suárez: No toques nada. No lo confrontes. No vayas a la fiesta si creés que va a estar él.

13 ene — 19:50
Valentina: No puedo cancelar, ya está todo armado. Y tampoco voy a dejarle ganar. El lunes presentamos todo y se terminó.

15 ene — 09:10
Valentina: Roma, por si acaso: tengo los extractos bancarios guardados en la nube. Password: VRojo2024. Si algo pasa, sabés dónde mirar.

[Último mensaje enviado: 15/01/2025 — 09:10]`
        },
        {
          id: "c1d9",
          titulo: "Extracto de Cuenta Bancaria — Valentina Rojo (nov 2023 – ene 2025)",
          tipo: "documento",
          fecha: "Recuperado de cuenta Mercado Pago y BBVA",
          contenido: `EXTRACTO CONSOLIDADO — CUENTA: VALENTINA SOLEDAD ROJO
Período analizado: noviembre 2023 – enero 2025

MOVIMIENTOS SOSPECHOSOS DETECTADOS:

15/11/2023 — Transferencia saliente — $120.000 ARS
  Concepto: "Servicios contables"
  Autorizado por: MARCOS DÍAZ (apoderado registrado)

02/01/2024 — Transferencia saliente — $150.000 ARS
  Concepto: "Gastos operativos campaña"
  Autorizado por: MARCOS DÍAZ

17/03/2024 — Transferencia saliente — $180.000 ARS
  Concepto: "Honorarios"
  Autorizado por: MARCOS DÍAZ

29/06/2024 — Transferencia saliente — $220.000 ARS
  Concepto: "Servicios externos"
  Autorizado por: MARCOS DÍAZ

04/10/2024 — Transferencia saliente — $180.000 ARS
  Concepto: "Varios"
  Autorizado por: MARCOS DÍAZ

──────────────────────────────────────────
TOTAL SUSTRAÍDO (estimado): $850.000 ARS
TODAS las transferencias se realizaron a la misma cuenta de destino.
La cuenta de destino pertenece a MARCOS EZEQUIEL DÍAZ, CUIT 20-34120334-1.
──────────────────────────────────────────

NOTA: Valentina Rojo revocó el poder notarial a Marcos Díaz el 09/01/2025, diez días antes de su muerte.`
        },
        {
          id: "c1d10",
          titulo: "Acta de Interrogatorio — Lucas Vega",
          tipo: "interrogatorio",
          fecha: "19/01/2025 — 17:20 hs",
          contenido: `INTERROGATORIO — Lucas Vega, 35 años
Oficial: Inspector Claudia Ferreyra

P: ¿Cómo conoció a Valentina Rojo?
R: Me contrató hace dos meses para cobertura de eventos. Era una clienta.

P: ¿Tenía otro vínculo con ella además del profesional?
R: [Pausa] Colaboro con el portal NotiCba como fotógrafo freelance. Estaba trabajando en una nota sobre influencers y sus finanzas reales. Valentina era una de las personas que me interesaban. Pero era investigación periodística, nada más.

P: ¿Sabía algo sobre sus problemas con Marcos Díaz?
R: Me había llegado algo por otros canales. Nada confirmado.

P: ¿Puede corroborar la coartada de Marcos Díaz?
R: Estuvimos juntos en el jardín desde más o menos las 2:15 hasta que escuchamos el griterío adentro. Pero hubo un momento, quizás 15 minutos, entre la 1:30 y las 2 AM, en que Marcos dijo que iba adentro a buscar agua y tardó bastante.

P: ¿Por qué no lo mencionó antes?
R: Porque no le di importancia. Ahora sí.`
        },
        {
          id: "c1d11",
          titulo: "Historial de búsquedas — Teléfono de Marcos Díaz",
          tipo: "documento",
          fecha: "Extraído por Policía el 19/01/2025",
          contenido: `HISTORIAL DE NAVEGACIÓN — SAMSUNG GALAXY S23
Titular: Marcos Ezequiel Díaz
Período recuperado: 14/01/2025 – 19/01/2025

─────────────────────────────────────────
14 ene — 22:41 — "cuántas pastillas para dormir son peligrosas"
14 ene — 22:44 — "clonazepam dosis letal adulto"
14 ene — 22:49 — "rivotril disuelto en alcohol efectos"
14 ene — 23:02 — "cuánto tiempo tarda en hacer efecto clonazepam"
14 ene — 23:11 — "se detecta clonazepam en autopsia"
─────────────────────────────────────────
15 ene — 09:33 — "denuncia penal contador prescripción"
15 ene — 09:41 — "si revoco poder notarial puedo denunciar"
─────────────────────────────────────────
17 ene — 14:20 — "farmacia online sin receta córdoba"
─────────────────────────────────────────
NOTA: El dispositivo fue entregado sin código de bloqueo. No se detectó borrado reciente de historial.`
        }
      ],
      pistaFinal: {
        texto: "Los mensajes con la abogada y el extracto bancario señalan a alguien específico. ¿A quién iba a denunciar Valentina?",
        respuesta: ["marcos", "marcos diaz", "el contador", "su ex", "díaz"]
      }
    },

    // ─── SOBRE 3 ───────────────────────────────────────────
    {
      id: "sobre3",
      titulo: "Sobre 3 — La prueba definitiva",
      desbloqueado: false,
      documentos: [
        {
          id: "c1d12",
          titulo: "Email de Valentina a su abogada — Texto completo",
          tipo: "documento",
          fecha: "Enviado el 15/01/2025 — 11:54 hs",
          contenido: `DE: valentinaenelmundo@gmail.com
PARA: rominasuarezabogada@estudiosuarez.com.ar
ASUNTO: Denuncia Marcos — material completo
FECHA: 15 de enero de 2025 — 11:54 hs

Romi:

Te mando todo lo que junté. Son 14 meses de movimientos.
El total es $850.000 pesos que se fue en transferencias que él autorizó desde mi cuenta usando el poder notarial que yo le di cuando empezamos a trabajar juntos (2022). Nunca imaginé que lo iba a usar para esto.

Lo revoqu el poder el 9 de enero. Ya sabe que lo hice porque se lo notificaron notarialmente. El martes me mandó un mensaje diciendo que "íbamos a hablar". No le contesté.

Sé que va a estar en la fiesta del sábado. Quería cancelar pero si cancelo, él entiende que tengo miedo. Y no tengo miedo. Voy a ir, voy a pasarla bien, y el lunes presentamos la denuncia.

Adjunto los extractos bancarios, el contrato de servicios contables, y los comprobantes de transferencia. Todo está en la carpeta compartida.

Si el lunes no sabés de mí antes de las 9 AM, llamá a mi papá.

Valen`
        },
        {
          id: "c1d13",
          titulo: "Testimonio de la camarera — María Eugenia Blanco",
          tipo: "interrogatorio",
          fecha: "19/01/2025 — 19:45 hs",
          contenido: `TESTIMONIO — María Eugenia Blanco, 24 años
Empleada del servicio de catering contratado para la fiesta

La Sra. Blanco no fue retenida inicialmente ya que se había retirado antes del hallazgo del cuerpo. Fue contactada por el equipo de investigación.

P: ¿Recuerda algo particular de esa noche?
R: Sí. Como a la 1 y media de la mañana estaba levantando copas sucias en el salón principal. Vi al hombre de remera gris oscura —me mostraron una foto y lo identifiqué como el Sr. Díaz— en la cocina. Estaba solo, inclinado sobre la barra donde estaban preparados los vasos con las bebidas.

P: ¿Qué estaba haciendo exactamente?
R: No vi bien qué hacía con las manos porque tenía la espalda hacia mí. Pero cuando se enderezó agarró uno de los vasos y lo llevó hacia el salón. Yo pensé que era el suyo.

P: ¿Reconocería el vaso?
R: Era un vaso largo, con rodaja de limón. Igual a los que yo misma había preparado con vodka tónica para los invitados.

P: ¿Le contó esto a alguien esa noche?
R: No. No imaginé que fuera importante. Me fui a las 2AM porque terminé mi turno.`
        },
        {
          id: "c1d14",
          titulo: "Segunda declaración de Marcos Díaz — tras confrontación con evidencia",
          tipo: "interrogatorio",
          fecha: "20/01/2025 — 10:00 hs",
          contenido: `SEGUNDA DECLARACIÓN — Marcos Díaz, 32 años
Presente: Abogado defensor Dr. Pablo Antuña

[Nota del investigador: Díaz fue confrontado con el historial de búsquedas de su teléfono y el testimonio de la camarera.]

Declaración inicial (mantenida hasta confrontación):
"Estuve en el jardín toda la noche. No fui a la cocina. No sé de qué habla Rodrigo."

Tras ser informado de las búsquedas del 14 de enero:
[Silencio prolongado, 4 minutos]

Dr. Antuña: Mi cliente no va a declarar en este momento.

[Fin de la declaración por indicación del abogado defensor]

NOTA DEL INVESTIGADOR: La negativa a declarar ante evidencia directa es significativa. El juez interviniente autorizó 48 horas adicionales de detención preventiva.`
        },
        {
          id: "c1d15",
          titulo: "Nota hallada en el bolso de Marcos Díaz",
          tipo: "documento",
          fecha: "Encontrada durante requisa el 20/01/2025",
          contenido: `[Nota manuscrita, papel doblado en cuatro, encontrada en bolsillo interior de campera]

"Si ella habla, todo se termina.
Lunes presentan la denuncia.
Tengo que evitar que llegue al lunes.
Una vez. Solo una vez. Nadie tiene que saber.
Dios, en qué me metí."

[Letra identificada como perteneciente a Marcos Díaz por peritos caligráficos]`
        }
      ],
      pistaFinal: null
    }
  ],

  pistas: [
    { nivel: 1, sobre: "sobre1", texto: "Prestá atención a lo que encontraron junto al cuerpo de Valentina. El blíster vacío es importante." },
    { nivel: 2, sobre: "sobre1", texto: "La respuesta tiene que ver con el medicamento encontrado en el análisis toxicológico. Pensá: ¿qué tipo de pastilla podría disolverse en una bebida?" },
    { nivel: 3, sobre: "sobre1", texto: "La respuesta es PASTILLAS (o SOMNIFEROS, o el nombre del medicamento: CLONAZEPAM)." },
    { nivel: 1, sobre: "sobre2", texto: "Los mensajes con la abogada hablan de una denuncia. ¿Quién tenía acceso a su cuenta bancaria?" },
    { nivel: 2, sobre: "sobre2", texto: "El extracto bancario muestra quién autorizaba las transferencias fraudulentas." },
    { nivel: 3, sobre: "sobre2", texto: "La respuesta es MARCOS (o Marcos Díaz, o el contador)." },
  ],

  solucion: {
    culpable: "Marcos Díaz",
    motivacion: "Valentina había descubierto que Marcos usó el poder notarial que le había dado para robarle $850.000 ARS durante 14 meses. La semana de la fiesta, Valentina revocó el poder y contactó a su abogada para presentar una denuncia penal el lunes siguiente. Marcos sabía que la denuncia lo destruiría: pérdida de matrícula, proceso penal, y exposición pública. Con acceso a la cocina durante la madrugada, disolvió 10 comprimidos de clonazepam (que compró sin receta días antes) en el vaso de vodka tónica de Valentina. El medicamento actuó en menos de una hora. Nadie sospechó de él hasta que las pruebas empezaron a acumularse.",
    coartadaFalsa: "Marcos dijo haber estado en el jardín toda la noche con Lucas. Pero el testimonio de Rodrigo (lo vio en la cocina a la 1:30) y de la camarera (lo vio manipulando los vasos) lo contradicen. Lucas también admitió que Marcos estuvo ausente ~15 minutos durante ese horario.",
    elementosClave: [
      "Historial de búsquedas en su teléfono (14 de enero, 4 días antes)",
      "Los extractos bancarios con sus transferencias",
      "El testimonio de la camarera que lo vio en la cocina",
      "El testimonio de Rodrigo",
      "La nota manuscrita en su bolsillo",
      "Los mensajes de Valentina a su abogada"
    ],
    inocentesYSecretos: [
      "Sofía Peralta — tenía celos profesionales pero era genuinamente amiga de Valentina",
      "Rodrigo Acosta — vendía marihuana en la fiesta, no tenía motivo para matar a Valentina",
      "Camila Torres — resentida por la herencia, pero no culpable",
      "Lucas Vega — periodista encubierto investigando a Valentina, pero no el asesino"
    ]
  }
},

// ════════════════════════════════════════════════════════════
// CASO 2: OFFSIDE EN NUEVA YORK
// ════════════════════════════════════════════════════════════
{
  id: "caso2",
  titulo: "Offside en Nueva York",
  subtitulo: "La noche antes del partido más importante, alguien no llegó al amanecer.",
  ambientacion: "Nueva York, Estados Unidos — Mundial 2026, Fase de Grupos",
  dificultad: "Difícil",
  duracion: "100–140 min",
  color: "#0891b2",

  intro: `Es martes 16 de junio de 2026. La Selección Argentina está alojada en el Hudson Grand Hotel de Manhattan, a horas del partido más esperado del grupo: Argentina vs. Brasil, en el MetLife Stadium.

A las 7:15 de la mañana, una empleada de limpieza encontró el cuerpo de Horacio "El Gordo" Bernal, 58 años, en el piso de la suite 1804. Bernal era el agente deportivo más poderoso del fútbol argentino: manejaba los contratos de siete jugadores de la Selección y tenía relaciones con clubes de todo el mundo.

La causa de muerte preliminar indica traumatismo de cráneo por caída o golpe. La habitación no estaba forzada. Alguien que Bernal conocía estuvo ahí esa noche.

El partido se juega en 9 horas. La FIFA y la AFA quieren respuestas ya.`,

  victima: {
    nombre: "Horacio \"El Gordo\" Bernal",
    edad: 58,
    ocupacion: "Agente deportivo. Representaba a 7 jugadores de la Selección Argentina.",
    descripcion: "Hombre de poder y secretos. Construyó su agencia desde cero con una mezcla de olfato comercial y juego sucio. Tenía enemigos en cada vestuario y aliados en cada palco. Nadie lo quería, pero todos lo necesitaban."
  },

  sospechosos: [
    {
      id: "s1",
      nombre: "Diego \"Pulga\" Sosa",
      edad: 27,
      ocupacion: "Delantero estrella de la Selección Argentina. Figura del torneo.",
      descripcion: "El jugador más valioso de Argentina. Silencioso fuera de la cancha, explosivo adentro. Su contrato con Bernal le quitaba el 25% de todos sus ingresos, incluidos los de imagen.",
      coartada: "En concentración obligatoria con el plantel. El cuerpo técnico confirma que no se ausentó del hotel.",
      iniciales: "DS",
      color: "#4f46e5"
    },
    {
      id: "s2",
      nombre: "Yanina Bernal",
      edad: 35,
      ocupacion: "Hija de la víctima. Directora administrativa de la agencia de su padre.",
      descripcion: "Fría y eficiente. Viajó al Mundial como parte del séquito de su padre. Es la principal beneficiaria del seguro de vida de Bernal: cinco millones de dólares.",
      coartada: "Cenando con patrocinadores en el restaurante Cipriani Wall Street. Hay fotos en Instagram publicadas esa noche.",
      iniciales: "YB",
      color: "#db2777"
    },
    {
      id: "s3",
      nombre: "Tomás Ferrero",
      edad: 44,
      ocupacion: "Periodista deportivo. Acreditado por TyC Sports para cubrir el Mundial.",
      descripcion: "Reconocido, con décadas de carrera. Jamás publicó nada negativo sobre Bernal pese a conocer sus métodos. En los últimos años cambió notablemente: mejor ropa, mejor departamento.",
      coartada: "Asistió a la conferencia de prensa de la Selección a las 19:00. Tiene credencial de acceso escaneada.",
      iniciales: "TF",
      color: "#059669"
    },
    {
      id: "s4",
      nombre: "Carlos \"Pichón\" Heredia",
      edad: 52,
      ocupacion: "DT asistente de la Selección Argentina. Mano derecha del técnico principal.",
      descripcion: "Veinte años en el fútbol profesional. Reconocido por su trabajo táctico. Tiene una deuda oscura con Bernal que data de su época en un club del interior.",
      coartada: "En reunión táctica con el cuerpo técnico hasta las 23:00. El técnico principal lo confirma.",
      iniciales: "CH",
      color: "#b45309"
    },
    {
      id: "s5",
      nombre: "Mireya Santos",
      edad: 29,
      ocupacion: "Asistente personal de Bernal. Lo acompañaba en todos sus viajes.",
      descripcion: "Joven, discreta, absolutamente leal a Bernal. O eso parecía. Maneja su agenda, sus contratos y, según se supo después, también algunos de sus secretos.",
      coartada: "En su habitación (piso 12) desde las 22:00. No tiene testigos.",
      iniciales: "MS",
      color: "#7c3aed"
    }
  ],

  sobres: [
    {
      id: "sobre1",
      titulo: "Sobre 1 — El hallazgo",
      desbloqueado: true,
      documentos: [
        {
          id: "c2d1",
          titulo: "ESPN Digital — Edición especial 16/06/2026",
          tipo: "diario",
          fecha: "16/06/2026 — 09:40 hs",
          contenido: `TRAGEDIA EN EL MUNDIAL: MUERE HORACIO BERNAL, EL AGENTE MÁS PODEROSO DEL FÚTBOL ARGENTINO

En la mañana del martes, horas antes del partido Argentina-Brasil, el agente deportivo Horacio Bernal (58) fue encontrado muerto en su suite del Hudson Grand Hotel de Nueva York.

El cuerpo fue descubierto por personal de limpieza a las 7:15 AM. Las autoridades estadounidenses acordonaron el piso 18 del hotel. La FIFA fue notificada de inmediato.

Bernal era representante de siete jugadores del plantel argentino, incluyendo a Diego "Pulga" Sosa, figura indiscutida del torneo. La AFA emitió un comunicado expresando "profunda consternación" y confirmó que el partido se disputará según lo programado.

El Departamento de Policía de Nueva York (NYPD) informó que la causa de muerte aparente es "traumatismo craneoencefálico" y que la investigación está en curso. No descartaron ninguna hipótesis.

El agente tenía reputación de hombre duro en las negociaciones, con varios litigios activos en distintos países. Sus detractores eran tantos como sus representados.`
        },
        {
          id: "c2d2",
          titulo: "Informe Inicial — NYPD, Detective Laura Huang",
          tipo: "informe",
          fecha: "16/06/2026 — 08:30 hs",
          contenido: `INFORME PRELIMINAR — NYPD / CASO NYM-2026-0614
Detective actuante: Laura Huang, Unidad de Homicidios Manhattan

HECHOS: El martes 16/06/2026 a las 07:15 hs, la empleada de limpieza Janet Okafor encontró el cuerpo de un hombre adulto en la suite 1804 del Hudson Grand Hotel. Alertó a seguridad del hotel, que llamó al 911 a las 07:22 hs.

ESTADO DE LA ESCENA:
— Suite ordenada. Sin signos de forcejeo externo o robo.
— El cuerpo estaba junto al escritorio. Herida contusa en región parietal derecha.
— Vaso de whisky volcado en el piso junto al cuerpo (asegurado como EVD-01).
— Botella de Johnnie Walker Black abierta sobre el escritorio (EVD-02).
— Laptop encendida. Pantalla con correo electrónico abierto (EVD-03, captura tomada).
— Puerta principal cerrada con llave magnética desde adentro. Sin señales de forzamiento.

CAUSA DE MUERTE PRELIMINAR: traumatismo craneoencefálico. Forense estima hora de muerte entre las 23:00 y 01:00 del 15 al 16 de junio.

ACCESOS A LA SUITE 1804 según sistema de llaves magnéticas del hotel:
— 15/06 — 20:14 hs: Horacio Bernal (tarjeta titular)
— 15/06 — 23:07 hs: Llave magnética no registrada en el sistema (llave maestra o tarjeta de cortesía no asignada)
— 16/06 — 07:15 hs: Janet Okafor (llave de personal)

NOTA: El ingreso de las 23:07 corresponde a alguien que entró sin pasar por recepción. Se investiga.`
        },
        {
          id: "c2d3",
          titulo: "Acta de Interrogatorio — Yanina Bernal",
          tipo: "interrogatorio",
          fecha: "16/06/2026 — 10:00 hs",
          contenido: `INTERROGATORIO — Yanina Bernal, 35 años
Detective: Laura Huang | Traducción simultánea (inglés/español)

P: ¿Cuándo fue la última vez que vio a su padre?
R: El lunes a las 19hs, antes de la conferencia de prensa. Cenamos juntos en el hotel.

P: ¿Notó algo inusual en él?
R: Estaba agitado. Dijo que "tenía que resolver algo" esa noche. No me dio detalles.

P: ¿Tenía acceso a su suite?
R: Sí, tengo una tarjeta porque manejo su agenda y a veces necesito buscar documentos.

P: ¿Usó esa tarjeta anoche?
R: No. Estaba en una cena de negocios hasta las 23:30, ya se lo mostré.

P: ¿Sabe si su padre tenía conflictos con alguien?
R: Mi padre tenía conflictos con medio mundo. Era así. Pero nada que yo sepa que llegara a esto.

P: Usted es beneficiaria de un seguro de vida de cinco millones de dólares.
R: [Pausa] Sí. Y eso no significa nada. Quiero a mi padre. Quería a mi padre.`
        },
        {
          id: "c2d4",
          titulo: "Acta de Interrogatorio — Mireya Santos",
          tipo: "interrogatorio",
          fecha: "16/06/2026 — 11:15 hs",
          contenido: `INTERROGATORIO — Mireya Santos, 29 años
Detective: Laura Huang

P: ¿Cuál era exactamente su relación con Bernal?
R: Su asistente. Solo su asistente.

P: ¿Sabe si él tenía una reunión anoche?
R: Horacio... el señor Bernal me dijo que esperaba a alguien a las 23 horas. No me dijo quién.

P: ¿Le dijo algo más?
R: Dijo que era algo que "tendría que haber solucionado hace tiempo". Parecía nervioso. El señor Bernal casi nunca se ponía nervioso.

P: ¿Sospecha de alguien?
R: [Mira hacia abajo] Hay una persona que lo amenazó la semana pasada. Lo escuché por teléfono. Bernal le decía "no voy a seguir pagando, el trato se terminó". La otra persona gritaba. No escuché el nombre.

P: ¿Reconocería la voz?
R: No. Estaba en el pasillo y no quise escuchar más.`
        },
        {
          id: "c2d5",
          titulo: "Plano del Piso 18 — Hudson Grand Hotel",
          tipo: "mapa",
          fecha: "Provisto por Seguridad del Hotel",
          contenido: `PISO 18 — DISTRIBUCIÓN DE SUITES

Suite 1801 — [Vacía durante el período]
Suite 1802 — Tomás Ferrero (acreditado TyC Sports)
Suite 1803 — [Uso corporativo FIFA]
Suite 1804 — Horacio Bernal ← ESCENA DEL CRIMEN
Suite 1805 — [Vacía durante el período]
Suite 1806 — [Uso corporativo AFA]

ASCENSORES: Al fondo del pasillo, junto a la escalera de emergencia.
CÁMARAS: Una cámara cubre el pasillo principal. Una cámara cubre los ascensores.

NOTA DE SEGURIDAD: La cámara del pasillo del piso 18 registró la siguiente actividad:
— 23:05 hs: Una persona (hombre, campera oscura, gorra) sale del ascensor y camina hacia la suite 1804.
— 23:52 hs: La misma persona (misma ropa) regresa hacia el ascensor.
— Resolución insuficiente para identificación facial. Estatura estimada: 1.75–1.80 m.`
        }
      ],
      pistaFinal: {
        texto: "El sistema de llaves registró una entrada a la suite 1804 a las 23:07. Además, la cámara del pasillo capturó a alguien entrando. ¿Cuál era el número de la suite donde fue encontrado Bernal?",
        respuesta: ["1804", "suite 1804", "habitacion 1804"]
      }
    },

    {
      id: "sobre2",
      titulo: "Sobre 2 — El dinero y las amenazas",
      desbloqueado: false,
      documentos: [
        {
          id: "c2d6",
          titulo: "Registro de llamadas — Celular de Horacio Bernal (últimas 48 hs)",
          tipo: "documento",
          fecha: "Extraído por NYPD el 16/06/2026",
          contenido: `REGISTRO DE LLAMADAS — HORACIO BERNAL
Número: +54 9 11 4422-7731
Período: 14/06/2026 – 15/06/2026

14/06 — 09:14 — ENTRANTE — Yanina Bernal — 4 min
14/06 — 11:30 — SALIENTE — "Pulga" Sosa — 12 min
14/06 — 14:22 — SALIENTE — Carlos Heredia — 8 min
14/06 — 16:45 — ENTRANTE — Número oculto — 2 min
14/06 — 18:03 — SALIENTE — Mireya Santos — 5 min

15/06 — 08:11 — ENTRANTE — Yanina Bernal — 3 min
15/06 — 10:40 — SALIENTE — Tomás Ferrero — 1 min (no atendido)
15/06 — 10:41 — SALIENTE — Tomás Ferrero — 1 min (no atendido)
15/06 — 14:30 — ENTRANTE — Tomás Ferrero — 6 min
15/06 — 17:22 — SALIENTE — Abogado (Dr. Funes) — 9 min
15/06 — 21:44 — ENTRANTE — Tomás Ferrero — 11 min ← ÚLTIMA LLAMADA REGISTRADA
  [Duración: 11 minutos. Tono elevado detectado por sistema de voz. Llamada finalizada abruptamente.]`
        },
        {
          id: "c2d7",
          titulo: "Registros financieros — Transferencias de Bernal a cuenta off-shore",
          tipo: "documento",
          fecha: "Solicitado por NYPD vía FBI Financial Crimes, 16/06/2026",
          contenido: `ANÁLISIS FINANCIERO PRELIMINAR — CASO NYM-2026-0614

Se detectaron transferencias regulares desde la cuenta de la agencia Bernal Sports Management S.A. hacia una cuenta en Islas Caimán (titular: "TF Media Consulting LLC").

DETALLE DE TRANSFERENCIAS:
Marzo 2023:    USD 8.000
Junio 2023:    USD 8.000
Septiembre 2023: USD 8.000
Diciembre 2023:  USD 8.000
Marzo 2024:    USD 8.000
Junio 2024:    USD 8.000
Septiembre 2024: USD 8.000
Enero 2025:    USD 8.000
Abril 2025:    USD 8.000

TOTAL: USD 72.000 en 9 cuotas regulares de USD 8.000.

ÚLTIMA TRANSFERENCIA: Abril 2025.
DESDE MAYO 2025: Sin nuevas transferencias a esa cuenta.

TITULAR REAL DE "TF MEDIA CONSULTING LLC": En proceso de verificación.
Las iniciales TF coinciden con las de Tomás Ferrero, periodista deportivo.`
        },
        {
          id: "c2d8",
          titulo: "Acta de Interrogatorio — Tomás Ferrero",
          tipo: "interrogatorio",
          fecha: "16/06/2026 — 13:00 hs",
          contenido: `INTERROGATORIO — Tomás Ferrero, 44 años
Detective: Laura Huang | Abogado: Dr. James Whitmore (retenido por el hotel)

P: ¿Cuándo vio a Bernal por última vez?
R: No lo vi. Hablé por teléfono con él el lunes a la noche. Fue una conversación de trabajo.

P: ¿De qué hablaron?
R: De una nota que yo quería hacer sobre la agencia. Él no quería que saliera. Ya está.

P: ¿Esa "nota" tenía que ver con acuerdos económicos entre ustedes?
R: [Se pone tenso] No sé de qué habla.

P: La cámara del pasillo del piso 18 lo muestra entrando a las 23:05 y saliendo a las 23:52.
R: [Larga pausa] Fui a hablar con él. En persona. Eso no es un crimen.

P: ¿Qué pasó dentro de la suite?
R: Discutimos. Fuerte. Él me dijo que no iba a renovar nuestro acuerdo. Yo le dije que si no renovaba, publicaba todo lo que sé sobre arreglos de partidos y contratos inflados. Se enojó mucho. Me empujó. Yo lo empujé de vuelta. Él perdió el equilibrio y... cayó. Se golpeó la cabeza contra el filo del escritorio. Yo entré en pánico y me fui.

P: ¿Por qué no llamó a emergencias?
R: [No responde]`
        },
        {
          id: "c2d9",
          titulo: "Acta de Interrogatorio — Diego \"Pulga\" Sosa",
          tipo: "interrogatorio",
          fecha: "16/06/2026 — 12:00 hs",
          contenido: `INTERROGATORIO — Diego Sosa, 27 años
Detective: Laura Huang | Presencia: abogado de AFA

P: ¿Cómo describiría su relación con Bernal?
R: Era mi representante. Nada más.

P: ¿Estaba conforme con los términos del contrato?
R: [Pausa] No. El 25% es una locura. Ningún representante del mundo cobra eso. Pero cuando lo firmé tenía 19 años y no entendía nada.

P: ¿Llegó a hablar de esto con Bernal?
R: Le pedí que renegociáramos el contrato. Él dijo que no. Le dije que iba a contratar un abogado. Esa fue nuestra última conversación.

P: ¿Dónde estuvo anoche entre las 22:00 y la medianoche?
R: En mi habitación. Piso 9. Llamé a mi familia en Argentina. Mis compañeros estaban en el comedor del plantel a esa hora, puedo dar nombres.

P: ¿Sabe si alguien más tenía conflictos con Bernal?
R: Todo el mundo tenía conflictos con Bernal. Pero si me pregunta si alguien me parece sospechoso... Ferrero. Siempre estuvo muy cerca de Gordo. Y últimamente los vi muy tensos.`
        },
        {
          id: "c2d10",
          titulo: "Correo electrónico abierto en la laptop de Bernal al momento del hallazgo",
          tipo: "documento",
          fecha: "15/06/2026 — 21:02 hs (enviado por Bernal)",
          contenido: `DE: hbernal@bernalsports.com
PARA: rfunes@estudiolegal.com.ar
ASUNTO: URGENTE — Ferrero — necesito saber mis opciones
FECHA: 15 de junio de 2026 — 21:02 hs

Roberto:

Necesito que me digas qué puedo hacer legalmente si Ferrero decide publicar lo de los contratos de 2019. Sé que tenemos un acuerdo firmado de confidencialidad pero él me está amenazando con que "un papel no lo va a frenar".

Le corté el grifo en mayo porque me di cuenta de que me estaba extorsionando hace dos años y nunca iba a parar. Pensé que se iba a calmar. No se calmó.

Esta noche insistió en venir a hablar "en persona". Le dije que sí porque si lo ignoro va directo a los medios. Pero Roberto, este tipo está desesperado. Quiero que sepas que si algo pasa, Ferrero estuvo aquí.

Llámame mañana a las 8.

Horacio`
        }
      ],
      pistaFinal: {
        texto: "Los registros financieros muestran transferencias regulares a una cuenta cuyas iniciales coinciden con alguien. ¿A quién le transfería dinero Bernal todos los meses?",
        respuesta: ["ferrero", "tomas ferrero", "el periodista", "tf", "tf media"]
      }
    },

    {
      id: "sobre3",
      titulo: "Sobre 3 — La confesión",
      desbloqueado: false,
      documentos: [
        {
          id: "c2d11",
          titulo: "Informe forense detallado — Médico Forense NYPD",
          tipo: "informe",
          fecha: "16/06/2026 — 18:00 hs",
          contenido: `INFORME FORENSE — CASO NYM-2026-0614
Víctima: Horacio Bernal | Médico forense: Dr. Raymond Cole

CAUSA DE MUERTE: Traumatismo craneoencefálico severo por impacto contra superficie de arista aguda (compatible con filo del escritorio de madera maciza de la suite).

MECANISMO: El análisis de la trayectoria del impacto y la posición del cuerpo es consistente con una caída hacia atrás tras un impulso externo (empujón). El ángulo de impacto descarta una caída accidental espontánea.

TIEMPO DE MUERTE: Entre las 23:15 y 00:00 del 15 al 16 de junio.

HALLAZGOS ADICIONALES:
— Fibras textiles negras en el antebrazo izquierdo de la víctima (compatibles con campera tipo bomber oscura).
— Marcas de presión en los hombros de la víctima consistentes con agarre previo al empujón.
— Nivel de alcohol en sangre: 0.09 g/dL (dentro de lo social, no incapacitante).

CONCLUSIÓN: La muerte fue causada por un empujón que provocó la caída de la víctima. No fue un golpe directo intencional, pero el acto que causó la caída fue voluntario. Clasificación: HOMICIDIO (doloso o culposo a determinar por la justicia).`
        },
        {
          id: "c2d12",
          titulo: "Análisis de fibras — Laboratorio forense NYPD",
          tipo: "informe",
          fecha: "17/06/2026 — 09:00 hs",
          contenido: `ANÁLISIS DE FIBRAS TEXTILES — CASO NYM-2026-0614

MUESTRA: Fibras negras recuperadas del antebrazo izquierdo de la víctima (EVD-07).

RESULTADO: Las fibras son de poliéster con un porcentaje de elastano, típicas de camperas bomber sintéticas de uso casual. Color: negro.

COMPARACIÓN: Se compararon con prendas confiscadas a los sospechosos durante el alojamiento en el hotel.

COINCIDENCIA: Las fibras son compatibles con la campera bomber negra marca Adidas, talla L, confiscada en la habitación 1802 (Tomás Ferrero).

PROBABILIDAD DE COINCIDENCIA: 94.3% (margen estándar para fibras textiles de producción masiva).

NOTA: La campera fue enviada a análisis extensivo. Se encontró en el bolsillo derecho una tarjeta magnética de hotel sin registro asignado (llave maestra de cortesía).`
        },
        {
          id: "c2d13",
          titulo: "Declaración ampliada de Tomás Ferrero — tras presentación de pruebas",
          tipo: "interrogatorio",
          fecha: "17/06/2026 — 11:00 hs",
          contenido: `DECLARACIÓN FINAL — Tomás Ferrero, 44 años
Detective: Laura Huang | Dr. Whitmore presente

[Ferrero fue informado del análisis de fibras, la tarjeta magnética, y el correo enviado por Bernal momentos antes de la reunión]

"Está bien. Voy a contar todo.

Bernal me pagaba desde 2023. En 2019, yo tenía una investigación lista para publicar sobre arreglos de partidos en torneos de segunda división. Él estaba involucrado a través de uno de sus representados. Me ofreció plata para que guardara el material. Fui un idiota y acepté.

En mayo de 2025 dejó de transferirme. Me dijo que el trato se había terminado, que publicara lo que quisiera. Yo sé que no podía publicar nada sin incriminarme a mí mismo. Él lo sabía también. Me tenía en un callejón sin salida.

Fui al hotel esa noche a presionarlo. A decirle que si no retomaba los pagos, publicaba igual y lo arruinaba aunque me fuera preso a mí también. Él se rió. Me dijo que era un 'cobarde extorsionador'. Nos agarramos de las solapas. Lo empujé. No calculé la distancia con el escritorio.

Cuando lo vi en el piso... ya no respondía. Salí. No llamé porque entré en pánico.

No quise matarlo. Pero lo maté."`
        },
        {
          id: "c2d14",
          titulo: "Artículo de TyC Sports — Publicado después del Mundial",
          tipo: "diario",
          fecha: "04/08/2026",
          contenido: `DETRÁS DEL CASO BERNAL: LA EXTORSIÓN QUE NINGUNO QUERÍA CONTAR

La investigación que siguió a la muerte de Horacio Bernal reveló una red de acuerdos oscuros que involucraban a periodistas, agentes y dirigentes durante varios años.

Tomás Ferrero, detenido el 17 de junio en Nueva York, aceptó colaborar con la justicia norteamericana y argentina a cambio de una reducción de condena. Sus declaraciones llevaron a investigaciones contra otros tres agentes deportivos.

Diego "Pulga" Sosa rescindió el contrato con la agencia Bernal Sports y firmó con una representante española. Marcó en el partido contra Brasil con Argentina ganando 2 a 0.

Yanina Bernal cobró el seguro de vida y continúa al frente de la agencia bajo una nueva razón social.

Carlos Heredia fue apartado del cuerpo técnico mientras continúa el proceso judicial por los videos comprometedores que Bernal usaba para controlarlo. Los cargos son menores.

Mireya Santos declaró como testigo protegida. Actualmente vive fuera de la Argentina.`
        }
      ],
      pistaFinal: null
    }
  ],

  pistas: [
    { nivel: 1, sobre: "sobre1", texto: "El registro de llaves del hotel es clave. Alguien entró a la habitación de Bernal sin aparecer en el sistema regular." },
    { nivel: 2, sobre: "sobre1", texto: "La cámara del pasillo captó a alguien. Revisá el plano y qué otras habitaciones están cerca de la 1804." },
    { nivel: 3, sobre: "sobre1", texto: "La respuesta es 1804 (el número de la suite de Bernal)." },
    { nivel: 1, sobre: "sobre2", texto: "Los registros de llamadas muestran quién habló con Bernal justo antes de morir. Y los registros financieros muestran con quién tenía un acuerdo oculto." },
    { nivel: 2, sobre: "sobre2", texto: "Las iniciales del titular de la cuenta en Caimán son TF. Pensá quién tiene esas iniciales entre los sospechosos." },
    { nivel: 3, sobre: "sobre2", texto: "La respuesta es FERRERO (o Tomás Ferrero, o el periodista)." }
  ],

  solucion: {
    culpable: "Tomás Ferrero",
    motivacion: "Ferrero era periodista en la nómina de Bernal: cobraba USD 8.000 trimestrales desde 2023 a cambio de silencio sobre arreglos de partidos en los que Bernal estaba involucrado. En mayo de 2025, Bernal cortó los pagos calculando que Ferrero nunca podría publicar sin autoinculparse. Ferrero, acorralado y desesperado, fue a enfrentarlo en su suite. La discusión escaló: Ferrero empujó a Bernal, que cayó hacia atrás y se golpeó la cabeza en el filo del escritorio. Ferrero se fue sin llamar a emergencias.",
    coartadaFalsa: "Ferrero dijo haber ido solo a la conferencia de prensa. Pero la cámara lo muestra entrando al piso 18 a las 23:05 y saliendo a las 23:52. En su bolsillo tenía una llave maestra que consiguió sin registro. Las fibras de su campera aparecieron en el cuerpo de Bernal.",
    elementosClave: [
      "Registro de llamadas: última llamada fue de Ferrero a Bernal a las 21:44",
      "Cámara del pasillo: silueta compatible con Ferrero entrando y saliendo",
      "Registros financieros: transferencias a cuenta 'TF Media Consulting'",
      "Fibras de su campera en el brazo de Bernal",
      "Tarjeta magnética sin registro en su bolsillo",
      "El correo de Bernal a su abogado, enviado horas antes de la reunión"
    ],
    inocentesYSecretos: [
      "Diego Sosa — tenía motivo (contrato abusivo) pero coartada sólida; era víctima de Bernal, no su asesino",
      "Yanina Bernal — heredaba el seguro, pero estaba en cena confirmada con testigos y fotos",
      "Carlos Heredia — Bernal lo chantajeaba con videos, pero estaba en reunión táctica",
      "Mireya Santos — sabía demasiado pero era leal; terminó como testigo protegida"
    ]
  }
},

// ════════════════════════════════════════════════════════════
// CASO 3: HERENCIA SANGRIENTA EN ESTANCIA SAN PATRICIO
// ════════════════════════════════════════════════════════════
{
  id: "caso3",
  titulo: "Herencia sangrienta en Estancia San Patricio",
  subtitulo: "Un cumpleaños. Un testamento. Un veneno.",
  ambientacion: "Patagonia argentina, cerca de Bariloche — agosto 2025",
  dificultad: "Difícil",
  duracion: "100–140 min",
  color: "#059669",

  intro: `El sábado 9 de agosto de 2025, Ernesto Villanueva Orozco, 75 años, reunió en su estancia patagónica a sus herederos y allegados más cercanos para celebrar su cumpleaños. La estancia San Patricio, con 3.000 hectáreas frente al lago Nahuel Huapi, era el símbolo de un imperio empresario construido durante cincuenta años.

El domingo 10 de agosto a las 7:40 AM, Rosario Leiva, el ama de llaves, encontró a Ernesto muerto en su estudio privado. Tenía el vaso de whisky volcado a su lado.

La fortuna estimada del difunto supera los cien millones de dólares. Todos los presentes tenían razones para querer verlo muerto. Solo uno actuó.`,

  victima: {
    nombre: "Ernesto Villanueva Orozco",
    edad: 75,
    ocupacion: "Fundador del Grupo Villanueva. Minería, hotelería, medios de comunicación.",
    descripcion: "Hombre de carácter férreo que construyó su fortuna desde cero en los años 70. Controlador y desconfiado, manejaba todo en persona hasta los últimos años. En los meses previos a su muerte tomó una decisión que nadie esperaba: modificar su testamento en secreto."
  },

  sospechosos: [
    {
      id: "s1",
      nombre: "Ramiro Villanueva",
      edad: 48,
      ocupacion: "Hijo mayor. Director ejecutivo del Grupo Villanueva.",
      descripcion: "Heredero natural del negocio. Inteligente y frío. Lleva 15 años dirigiendo la empresa. Ernesto empezó a desconfiar de él el año pasado tras detectar irregularidades contables.",
      coartada: "Jugando al ajedrez con el Dr. Prada en el living principal desde las 22:00 hasta pasada la medianoche.",
      iniciales: "RV",
      color: "#4f46e5"
    },
    {
      id: "s2",
      nombre: "Isabela Fontenot de Villanueva",
      edad: 45,
      ocupacion: "Segunda esposa de Ernesto. Treinta años menor que él.",
      descripcion: "Elegante y calculadora. Se casó con Ernesto en 2018. Nunca fue aceptada por los hijos. Manejaba con destreza el mundo social del matrimonio mientras Ernesto se encargaba de los negocios.",
      coartada: "Se retiró a dormir a las 22:00. No tiene testigos.",
      iniciales: "IF",
      color: "#db2777"
    },
    {
      id: "s3",
      nombre: "Dr. Augusto Prada",
      edad: 61,
      ocupacion: "Abogado. Socio y confidente de Ernesto por más de 30 años.",
      descripcion: "Discreto y leal (al menos en apariencia). Es el depositario de todos los secretos legales de la familia. Redactó el testamento original y también el nuevo.",
      coartada: "Jugando al ajedrez con Ramiro en el living principal desde las 22:00 hasta pasada la medianoche.",
      iniciales: "AP",
      color: "#0891b2"
    },
    {
      id: "s4",
      nombre: "Valentín Villanueva",
      edad: 35,
      ocupacion: "Hijo menor. Artista plástico. Distanciado del negocio familiar.",
      descripcion: "El hijo díscolo. Abandonó la empresa a los 25 años para dedicarse al arte. Tiene una relación tensa con su padre y una deuda de 400.000 dólares con inversores privados.",
      coartada: "En su habitación escuchando música. Sin testigos.",
      iniciales: "VV",
      color: "#b45309"
    },
    {
      id: "s5",
      nombre: "Rosario Leiva",
      edad: 55,
      ocupacion: "Ama de llaves de la Estancia San Patricio. 25 años al servicio de la familia.",
      descripcion: "Silenciosa y observadora. Conoce cada rincón de la estancia y cada secreto de la familia. Ernesto le había prometido una suma generosa en su testamento original como reconocimiento a sus años de servicio.",
      coartada: "Lavando la vajilla de la cena en la cocina. Parcialmente confirmado por el cocinero (que se fue a las 22:30).",
      iniciales: "RL",
      color: "#7c3aed"
    }
  ],

  sobres: [
    {
      id: "sobre1",
      titulo: "Sobre 1 — El hallazgo",
      desbloqueado: true,
      documentos: [
        {
          id: "c3d1",
          titulo: "Río Negro Digital — 10 de agosto 2025",
          tipo: "diario",
          fecha: "10/08/2025 — 11:20 hs",
          contenido: `MUERE ERNESTO VILLANUEVA, EL MAGNATE PATAGÓNICO, EN SU ESTANCIA DE BARILOCHE

El empresario Ernesto Villanueva Orozco (75), fundador del Grupo Villanueva y una de las fortunas más grandes de la Patagonia argentina, fue hallado muerto este domingo a la mañana en su estancia privada ubicada a 45 kilómetros de Bariloche.

El cuerpo fue encontrado por personal de la propiedad en el estudio privado de Villanueva aproximadamente a las 7:40 AM. La Policía de Río Negro fue convocada de inmediato.

Fuentes cercanas a la investigación indicaron que "las circunstancias son dudosas" y que se realizará una autopsia completa. La muerte preliminarmente fue catalogada como "a determinar".

Villanueva había reunido el fin de semana a familiares y allegados en la estancia para celebrar su 75° cumpleaños. Cinco personas estaban presentes en la propiedad al momento del hallazgo.

El Grupo Villanueva, con intereses en minería, hotelería de lujo y medios gráficos, factura aproximadamente USD 90 millones anuales. La sucesión del grupo y la herencia personal del empresario son incógnitas que se abrirán en los próximos días.`
        },
        {
          id: "c3d2",
          titulo: "Informe Policial Inicial — Policía de Río Negro",
          tipo: "informe",
          fecha: "10/08/2025 — 09:15 hs",
          contenido: `INFORME PRELIMINAR — CASO 0089-RN-2025
Oficial actuante: Comisario Jorge Ibáñez

HECHOS: El 10/08/2025 a las 07:40 hs, la señora Rosario Leiva, empleada doméstica de la propiedad, encontró el cuerpo de Ernesto Villanueva Orozco en el estudio de la planta baja de la Estancia San Patricio. Llamó al número de emergencias a las 07:42 hs.

ESTADO DE LA ESCENA:
— El cuerpo estaba sentado en el sillón de cuero del escritorio, ligeramente recostado hacia un lado.
— Un vaso de vidrio tallado con restos de líquido ambarino estaba volcado en el piso junto al sillón (asegurado como EVD-001).
— Una botella de whisky Glenfarclas 25 años abierta en el escritorio (EVD-002).
— Papeles dispersos en el escritorio. Entre ellos, lo que parece ser un documento legal (asegurado como EVD-003).
— La puerta del estudio estaba sin llave.

CAUSA PRELIMINAR: Indeterminada. El médico de guardia que evaluó el cuerpo no descartó infarto, pero solicitó autopsia ante la expresión facial de la víctima y el estado del cuerpo.

PERSONAS PRESENTES EN LA PROPIEDAD:
1. Ramiro Villanueva — Hijo
2. Isabela Fontenot de Villanueva — Esposa
3. Dr. Augusto Prada — Abogado de la familia
4. Valentín Villanueva — Hijo menor
5. Rosario Leiva — Ama de llaves

El cocinero y dos empleados de mantenimiento se habían retirado antes de las 23:00.

Estado: CASO ABIERTO — AUTOPSIA SOLICITADA`
        },
        {
          id: "c3d3",
          titulo: "Acta de Interrogatorio — Ramiro Villanueva",
          tipo: "interrogatorio",
          fecha: "10/08/2025 — 11:00 hs",
          contenido: `INTERROGATORIO — Ramiro Villanueva, 48 años
Comisario Ibáñez | Abogado particular

P: ¿Cómo describiría la relación con su padre en los últimos tiempos?
R: Buena. Con los altibajos normales de cualquier relación padre-hijo. Trabajábamos juntos y eso siempre genera roces.

P: ¿De qué tipo de roces?
R: [Pausa] Mi padre era perfeccionista. A veces cuestionaba decisiones mías sin tener el panorama completo. Pero eran diferencias profesionales, nada personal.

P: ¿Sabe si su padre había modificado su testamento recientemente?
R: No. No tengo información sobre eso.

P: ¿Dónde estaba entre las 22:00 y la medianoche?
R: Jugando al ajedrez con el Dr. Prada en el living. Estuvimos hasta pasada la 1AM.

P: ¿Alguno de los dos se ausentó?
R: El doctor fue un momento al baño. Quizás 5 minutos. Yo no me moví de ahí.

P: ¿Notó algo inusual durante la cena o después?
R: Mi padre estaba raro. Callado. En la sobremesa se levantó antes que todos y se fue al estudio. Dijo que tenía que revisar unos papeles.`
        },
        {
          id: "c3d4",
          titulo: "Acta de Interrogatorio — Valentín Villanueva",
          tipo: "interrogatorio",
          fecha: "10/08/2025 — 12:00 hs",
          contenido: `INTERROGATORIO — Valentín Villanueva, 35 años
Comisario Ibáñez | Sin representación legal

P: ¿Cuándo fue la última vez que habló con su padre?
R: En la cena. Fue una conversación cortita. Mi papá y yo no teníamos mucho de qué hablar.

P: ¿Por qué estaban distanciados?
R: Porque nunca aceptó que me fuera de la empresa. Para él, quien no hacía negocios no era nadie. Vine al cumpleaños porque mi mamá —que falleció hace 4 años— me hubiera pedido que viniera.

P: ¿Sabe si su padre tenía conflictos con alguien presente este fin de semana?
R: Con Ramiro había algo. No sé qué, pero los vi tensos. Y con Isabela... mi papá la miraba diferente. Como si algo hubiera cambiado.

P: ¿Dónde estaba entre las 22 y medianoche?
R: En mi cuarto. Escuchando música con auriculares. No puedo demostrar eso, pero es lo que hice.

P: ¿Necesitaba dinero?
R: [Silencio] Todo el mundo necesita dinero. Sí, tengo deudas. Pero no iba a matar a mi padre por eso.`
        },
        {
          id: "c3d5",
          titulo: "Plano de la planta baja — Estancia San Patricio",
          tipo: "mapa",
          fecha: "Cedido por la administración de la estancia",
          contenido: `PLANTA BAJA — ESTANCIA SAN PATRICIO

[FRENTE — Acceso principal]

HALL DE ENTRADA
├── LIVING PRINCIPAL (derecha) — chimenea, mesa de ajedrez, sillones
├── COMEDOR FORMAL (izquierda) — mesa para 12 personas
├── COCINA (al fondo izquierda) — acceso de servicio
└── ESTUDIO PRIVADO (al fondo derecha) ← ESCENA DEL CRIMEN
    └── Acceso: puerta con cerradura simple (sin llave digital)
    └── Ventana: da al jardín sur de la estancia

SISTEMA DE CÁMARAS:
— Cámara 1: Hall de entrada (cubre ingreso principal y acceso al living)
— Cámara 2: Acceso a la cocina
— Cámara 3: Exterior, jardín norte
— NOTA: El estudio NO tiene cámara interior. La cámara del hall cubre el pasillo que lleva al estudio.

REGISTRO DE CÁMARA DEL HALL (noche del 9 al 10 de agosto):
— 21:58 hs: Ernesto Villanueva ingresa al estudio y cierra la puerta.
— 23:38 hs: Isabela Fontenot ingresa al pasillo y entra al estudio.
— 23:47 hs: Isabela Fontenot sale del estudio y regresa hacia las habitaciones.
— 00:12 hs: Sin más movimiento hasta las 07:40 hs (Rosario abre el estudio).`
        }
      ],
      pistaFinal: {
        texto: "La escena tenía un elemento clave junto al cuerpo de Ernesto. ¿Qué bebida había en el vaso volcado junto a Ernesto?",
        respuesta: ["whisky", "whiskey", "whisky escoces", "glenfarclas", "scotch"]
      }
    },

    {
      id: "sobre2",
      titulo: "Sobre 2 — El veneno y el testamento",
      desbloqueado: false,
      documentos: [
        {
          id: "c3d6",
          titulo: "Informe Toxicológico — Instituto Médico Legal de Bariloche",
          tipo: "informe",
          fecha: "11/08/2025 — 16:00 hs",
          contenido: `INFORME TOXICOLÓGICO — CASO 0089-RN-2025
Víctima: Ernesto Villanueva Orozco

MUESTRAS ANALIZADAS:
1. Sangre y vísceras de la víctima
2. Contenido del vaso (EVD-001)
3. Restos de la botella de whisky (EVD-002)

RESULTADOS:

Sangre: Presencia de TRIÓXIDO DE ARSÉNICO (As2O3) en concentración de 18 mg/L. La dosis letal para un adulto es aproximadamente 1-3 mg/kg de peso corporal. Para un hombre de 78 kg como la víctima, la concentración hallada es consistente con una dosis letal.

Vaso de vidrio: Positivo para trióxido de arsénico disuelto en whisky. La cantidad presente en el vaso es suficiente para causar la muerte de un adulto.

Botella de whisky: NEGATIVO para arsénico. La sustancia fue añadida directamente al vaso, no a la botella.

SÍNTOMAS: La intoxicación aguda por arsénico puede inducir malestar gastrointestinal, convulsiones y fallo cardíaco. Compatible con la expresión y postura del cuerpo.

CONCLUSIÓN: La muerte fue causada por envenenamiento agudo con trióxido de arsénico administrado directamente en la bebida de la víctima.

CLASIFICACIÓN FORENSE: HOMICIDIO`
        },
        {
          id: "c3d7",
          titulo: "Testamento — Borrador hallado en el escritorio de Ernesto",
          tipo: "documento",
          fecha: "Redactado: 02/07/2025 | Encontrado: 10/08/2025",
          contenido: `TESTAMENTO Y ÚLTIMA VOLUNTAD
Ernesto Carlos Villanueva Orozco — DNI 8.441.002

Redactado en la ciudad de Buenos Aires el 2 de julio de 2025 ante el Dr. Augusto Prada, matrícula profesional CPACF 44.881.

[CLÁUSULA PRIMERA]
Designo como herederos universales en partes iguales a mis hijos Ramiro Villanueva (DNI 20.110.334) y Valentín Villanueva (DNI 30.440.887), quienes recibirán la totalidad del patrimonio empresario y personal descrito en el Anexo I.

[CLÁUSULA SEGUNDA]
A mi esposa Isabela Fontenot de Villanueva (DNI 27.884.001), en virtud de la cuota conyugal establecida por ley, le corresponde el usufructo del inmueble ubicado en Recoleta (Av. Alvear 1640, PB B) durante su vida. No corresponde participación adicional en el patrimonio empresario.

[CLÁUSULA TERCERA]
A la Sra. Rosario Leiva (DNI 18.441.002), en reconocimiento a 25 años de servicio, le corresponde la suma de USD 0 (CERO DÓLARES). [NOTA MANUSCRITA AL MARGEN: "Esta cláusula reemplaza la Cláusula Quinta del testamento anterior. Hablar con Rosario personalmente."]

[...]

Este documento reemplaza y anula cualquier testamento anterior.
Firma: E. Villanueva O.
Testigo: Dr. A. Prada`
        },
        {
          id: "c3d8",
          titulo: "Acta de Interrogatorio — Isabela Fontenot de Villanueva",
          tipo: "interrogatorio",
          fecha: "11/08/2025 — 09:30 hs",
          contenido: `INTERROGATORIO — Isabela Fontenot de Villanueva, 45 años
Comisario Ibáñez | Abogado particular Dr. Leandro Gutiérrez

P: ¿Cómo estaba su relación con Ernesto en los últimos meses?
R: Bien. Con la tranquilidad que da la madurez. Éramos un buen equipo.

P: ¿Le comentó algo sobre cambios en su testamento?
R: No. ¿Hubo cambios?

P: Las cámaras la muestran entrando al estudio de Ernesto a las 23:38 y saliendo a las 23:47. ¿Qué hizo durante esos nueve minutos?
R: [Larga pausa] Fui a desearle las buenas noches. Estaba leyendo papeles. Le di un beso y me fui.

P: ¿Él le dijo algo?
R: Estaba distraído. Me dijo que descansara.

P: ¿Vio qué papeles estaba leyendo?
R: [Muy larga pausa] Eran documentos legales. No los leí.

P: Según peritos, usted estuvo en el estudio nueve minutos. No es mucho tiempo para entrar, dar un beso y salir.
R: Estuvimos charlando un momento. No recuerdo exactamente.`
        },
        {
          id: "c3d9",
          titulo: "Acta de Interrogatorio — Dr. Augusto Prada",
          tipo: "interrogatorio",
          fecha: "11/08/2025 — 11:00 hs",
          contenido: `INTERROGATORIO — Dr. Augusto Prada, 61 años
Comisario Ibáñez | Presente en carácter de testigo (no de sospechoso)

P: Usted redactó el testamento encontrado en el estudio.
R: Sí. Lo redacté en julio, a pedido de Ernesto. Estrictamente confidencial.

P: ¿Isabela Fontenot sabía del nuevo testamento?
R: No. Ernesto fue explícito: nadie debía saberlo hasta después del fin de semana. Planeaba comunicárselo a ella personalmente el lunes.

P: ¿Cuál era la diferencia principal con el testamento anterior?
R: En el testamento original, Isabela recibía un 30% del patrimonio total. En el nuevo... prácticamente nada. Solo el usufructo de un departamento.

P: ¿Por qué ese cambio?
R: Ernesto encontró evidencia de que Isabela había estado moviendo activos a su nombre en los últimos dos años. No me di detalles, pero estaba muy enojado. Dijo que "no iba a dejar que lo robaran dos veces".

P: ¿Por qué no informó esto apenas supo del fallecimiento?
R: Porque pensé... esperé a ser convocado. Cometí un error de criterio. Lo lamento.`
        },
        {
          id: "c3d10",
          titulo: "Historial de compras online — Isabela Fontenot de Villanueva",
          tipo: "documento",
          fecha: "Extraído de cuenta MercadoLibre y Amazon, 12/08/2025",
          contenido: `HISTORIAL DE COMPRAS RELEVANTES — ISABELA FONTENOT
Período analizado: junio – agosto 2025

15/06/2025 — "Pesticida profesional acción total - 500ml" — $4.800 ARS
  Vendedor: AgroMax Patagonia | Enviado a: Estancia San Patricio
  [NOTA DEL LABORATORIO: Este producto contiene trióxido de arsénico como principio activo. Su uso agrícola está permitido pero regulado. No es de uso doméstico habitual.]

22/06/2025 — "Guantes de nitrilo 100 unidades talla S" — $2.100 ARS

28/07/2025 — Libro: "Toxicología forense — casos prácticos" — USD 24 (Amazon)
  [Enviado a domicilio Recoleta]

NOTA: La compra del pesticida fue entregada en la Estancia San Patricio el 20 de junio de 2025. El pedido fue firmado por Isabela Fontenot.`
        }
      ],
      pistaFinal: {
        texto: "El toxicológico confirmó el veneno. Y el testamento nuevo revela quién tenía más que perder. ¿Qué veneno encontraron en el vaso de Ernesto?",
        respuesta: ["arsenico", "arsénico", "arsenico trioxide", "trióxido de arsénico", "veneno", "arsenico trioxide"]
      }
    },

    {
      id: "sobre3",
      titulo: "Sobre 3 — La trampa perfecta",
      desbloqueado: false,
      documentos: [
        {
          id: "c3d11",
          titulo: "Análisis de la cámara del hall — Informe técnico",
          tipo: "informe",
          fecha: "12/08/2025 — 14:00 hs",
          contenido: `ANÁLISIS DE IMÁGENES — CÁMARA HALL PRINCIPAL
Caso: 0089-RN-2025 | Técnico: Lic. Martín Acuña, Policía Científica Río Negro

SECUENCIA RELEVANTE — Noche del 9 al 10 de agosto:

21:58 hs — Ernesto Villanueva ingresa al estudio. Parece llevar papeles bajo el brazo.

22:04 hs — Ramiro Villanueva camina hacia el living (en dirección opuesta al estudio). Entra al living.

22:06 hs — Dr. Prada entra al living detrás de Ramiro.

23:38 hs — Isabela Fontenot camina desde la dirección de las habitaciones hacia el estudio. Lleva algo en la mano derecha. Por la resolución y el ángulo, no es posible identificar el objeto con certeza, pero es pequeño (¿vaso? ¿frasco?).

23:47 hs — Isabela Fontenot sale del estudio. Las manos están vacías.

ANÁLISIS: El objeto que llevaba Isabela al entrar no está visible al salir. Puede haber quedado en el estudio o haber sido depositado de alguna forma en la bebida de Ernesto.

NOTA: La resolución de la cámara no permite identificar con certeza el objeto ni confirmar si vertió algo. Es evidencia circunstancial pero significativa en conjunto con otros elementos del caso.`
        },
        {
          id: "c3d12",
          titulo: "Carta de Ernesto a Prada — hallada en cajón del escritorio",
          tipo: "documento",
          fecha: "Escrita el 05/08/2025. No enviada.",
          contenido: `[Carta manuscrita. Papel con membrete de la Estancia San Patricio]

Augusto:

Te escribo esto por si acaso. Es ridículo a mi edad tener miedo, pero los últimos meses me hicieron cambiar de opinión sobre varias cosas. Y sobre varias personas.

Isabela encontró los borradores del testamento en mi escritorio de Buenos Aires. Lo sé porque los papeles estaban desordenados de una manera que ella cree que no noto. Los ordené de cierta manera antes de irme y al volver estaban diferentes. Ella los leyó.

Me casé con una mujer que me quería por lo que tengo, no por lo que soy. Tarde, pero lo entendí.

Si algo me llega a pasar en estos días, no busques más.

Ernesto

P.D.: El testamento nuevo está en el cajón izquierdo de mi escritorio en la estancia. Está firmado. Vale legalmente.`
        },
        {
          id: "c3d13",
          titulo: "Segunda declaración de Isabela Fontenot — tras presentación de evidencias",
          tipo: "interrogatorio",
          fecha: "13/08/2025 — 10:00 hs",
          contenido: `SEGUNDA DECLARACIÓN — Isabela Fontenot de Villanueva
Comisario Ibáñez | Dr. Gutiérrez presente

[Isabela fue confrontada con: el historial de compras, el análisis de la cámara, la carta de Ernesto, y el nuevo testamento]

Declaración inicial (mantenida hasta confrontación):
"Fui a darle las buenas noches. No vi ningún testamento. No sé de qué pesticida hablan."

Tras ser confrontada con la carta de Ernesto y el historial de compras:

"Está bien.

Sí. Leí el testamento en Buenos Aires. Me quedé sin nada. Después de siete años. Después de todo lo que dejé para estar con él.

Esa noche fui a hablar con él. A pedirle que lo reconsiderara. Me dijo que estaba decidido. Que yo "sabía perfectamente por qué". Que había encontrado los movimientos de las cuentas.

Tenía el frasco en el bolsillo. Lo había planeado esa semana. Cuando Ernesto se dio vuelta a buscar algo en el cajón, lo eché en el vaso. Solo un segundo.

No pensé que iba a actuar. Pero lo hice.

No sé qué más decirles."`
        },
        {
          id: "c3d14",
          titulo: "Artículo de La Nación — 3 meses después",
          tipo: "diario",
          fecha: "10/11/2025",
          contenido: `EL CASO VILLANUEVA: CÓMO UN TESTAMENTO SECRETO DESATÓ UN CRIMEN EN LA PATAGONIA

Tres meses después de la muerte de Ernesto Villanueva Orozco, el caso que conmocionó a la Patagonia llegó a su resolución judicial.

Isabela Fontenot de Villanueva fue procesada por homicidio agravado por el vínculo y por veneno. La Fiscalía de Río Negro solicitó 25 años de prisión.

La investigación reveló que Isabela había leído el nuevo testamento semanas antes y planificó el envenenamiento con arsénico durante la visita del cumpleaños. La compra del pesticida, la carta del propio Ernesto, y su entrada al estudio en la noche del crimen fueron las pruebas determinantes.

Ramiro Villanueva fue separado temporalmente del Grupo Villanueva mientras la justicia investiga las irregularidades contables que Ernesto había detectado antes de morir. No enfrenta cargos penales por la muerte de su padre.

Valentín Villanueva, el hijo artista, recibió el 50% de la herencia según el nuevo testamento. Donó una parte a instituciones culturales de Bariloche y continúa con su carrera artística.

Rosario Leiva recibió una indemnización extrajudicial de los herederos "por los años de servicio y por el dolor de haber encontrado el cuerpo", según comunicó el Dr. Prada.`
        }
      ],
      pistaFinal: null
    }
  ],

  pistas: [
    { nivel: 1, sobre: "sobre1", texto: "Hay una cámara que cubre el hall. Revisá el registro de movimientos esa noche: ¿quién entró al estudio de Ernesto después que él?" },
    { nivel: 2, sobre: "sobre1", texto: "Ernesto tomaba whisky esa noche. El vaso es la clave: algo le pusieron ahí dentro." },
    { nivel: 3, sobre: "sobre1", texto: "La respuesta es WHISKY (la bebida que tenía en el vaso)." },
    { nivel: 1, sobre: "sobre2", texto: "El testamento cambia todo. ¿Quién perdía más con el testamento nuevo?" },
    { nivel: 2, sobre: "sobre2", texto: "Isabela pasaba de recibir el 30% del patrimonio a casi nada. Y el veneno fue añadido directamente al vaso, no a la botella." },
    { nivel: 3, sobre: "sobre2", texto: "La respuesta es ARSÉNICO (o veneno, o trióxido de arsénico)." }
  ],

  solucion: {
    culpable: "Isabela Fontenot de Villanueva",
    motivacion: "Isabela encontró en Buenos Aires el borrador del nuevo testamento: pasaba de recibir el 30% de la fortuna (unos 30 millones de dólares) a casi nada. Sabía que Ernesto había descubierto que ella movía activos a su nombre. Compró un pesticida con arsénico en junio bajo pretexto agrícola. Durante la noche del 9 de agosto, fue al estudio 'a darle las buenas noches', y cuando Ernesto se dio vuelta, vertió el contenido del frasco en su vaso de whisky. Salió nueve minutos después. Ernesto murió entre las 23:15 y medianoche.",
    coartadaFalsa: "Isabela dijo haberse retirado a dormir a las 22:00. Pero la cámara del hall la muestra entrando al estudio a las 23:38 y saliendo a las 23:47 con las manos vacías (el frasco había quedado ahí o lo llevaba disimulado). La carta de Ernesto, escrita días antes, ya señalaba que Isabela había leído el testamento.",
    elementosClave: [
      "La cámara del hall: Isabela entra con algo en la mano y sale sin ello",
      "El historial de compras: pesticida con arsénico enviado a la estancia en junio",
      "El testamento nuevo: ella pasaba de 30M a nada",
      "La carta de Ernesto a Prada: 'si algo me pasa, no busques más'",
      "El informe toxicológico: arsénico solo en el vaso, no en la botella",
      "Su propia confesión"
    ],
    inocentesYSecretos: [
      "Ramiro Villanueva — desviaba fondos de la empresa pero no mató a su padre",
      "Dr. Prada — cometió el error de guardar silencio sobre el testamento nuevo, pero no es culpable",
      "Valentín Villanueva — tenía deudas graves pero no coartada ni medios para envenenar",
      "Rosario Leiva — perdió su herencia en el nuevo testamento pero no tenía acceso al estudio esa noche"
    ]
  }
}

]; // fin CASOS

// Exportar para uso en el juego
if (typeof module !== 'undefined') module.exports = CASOS;
