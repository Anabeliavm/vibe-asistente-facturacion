# Asistente de Consultas de Facturación

## Descripción del proyecto

El Asistente de Consultas de Facturación es un prototipo web pensado para facilitar la respuesta a consultas frecuentes de proveedores sobre el uso de la plataforma donde presentan comprobantes de facturación por servicios y producción de materiales. El objetivo es ofrecer respuestas claras, uniformes y fáciles de reutilizar en Outlook, reduciendo el tiempo dedicado a responder consultas repetitivas.

El asistente permitirá seleccionar una consulta habitual y visualizar una respuesta sugerida que el usuario podrá revisar, copiar y pegar en un correo electrónico.

## Problema que busca resolver

Los proveedores realizan consultas reiteradas sobre el ingreso a la plataforma, la carga de comprobantes, la documentación requerida y las etapas generales de verificación y procesamiento para el pago. Responder individualmente estas consultas demanda tiempo administrativo y puede generar diferencias en la información comunicada.

La propuesta es centralizar respuestas modelo en una herramienta sencilla, para mejorar la claridad y consistencia de la comunicación.

## Objetivos SMART

- **Específico:** desarrollar una herramienta que identifique y ofrezca respuestas sugeridas para consultas frecuentes relacionadas con la presentación de comprobantes de servicios y producción de materiales.
- **Medible:** incorporar al menos 10 respuestas modelo para las consultas más habituales.
- **Alcanzable:** construir un prototipo web inicial con HTML, CSS y JavaScript, utilizando Vibe Coding como metodología de apoyo.
- **Relevante:** facilitar la gestión administrativa, reducir el tiempo dedicado a respuestas repetitivas y mejorar la claridad de las instrucciones para los proveedores.
- **Temporal:** desarrollar, probar y ajustar el prototipo durante los módulos del curso.

## Alcance funcional de la primera versión

- Mostrar un listado de consultas frecuentes.
- Permitir seleccionar una consulta y visualizar una respuesta sugerida.
- Incluir temas como acceso a la plataforma, carga de comprobantes, documentación y etapas generales del proceso.
- Permitir copiar la respuesta para revisarla y utilizarla en Outlook.
- Mantener una interfaz simple, clara y de tono profesional.

## Límites: qué no hará el proyecto

En esta primera etapa, el proyecto:

- No se conectará directamente con Outlook ni enviará correos automáticamente.
- No accederá a SAP ni a otros sistemas corporativos.
- No consultará el estado real de facturas, comprobantes o pagos.
- No validará documentación ni aprobará comprobantes.
- No modificará datos de proveedores ni gestionará pagos.
- No almacenará información confidencial, credenciales ni documentación real de proveedores.

Las respuestas serán orientativas y deberán revisarse antes de enviarse. Los procedimientos concretos deberán completarse y validarse con la documentación oficial correspondiente antes de utilizar el asistente en un entorno real.

## Tecnologías y metodología

- **HTML:** estructura de la página.
- **CSS:** diseño y presentación visual.
- **JavaScript:** interacción y selección de respuestas.
- **GitHub:** almacenamiento y seguimiento de versiones del proyecto.
- **Vibe Coding:** desarrollo asistido por inteligencia artificial, mediante instrucciones en lenguaje natural, revisión y pruebas.

## Estructura inicial del repositorio

```text
vibe-asistente-facturacion/
├── docs/
│   └── alcance.md
├── ai-context.md
├── index.html
└── README.md
```

## Estado del proyecto

Checkpoint 1: repositorio y documentación inicial. El prototipo todavía no está conectado a Outlook ni cuenta con automatizaciones reales.
