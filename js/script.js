const preguntas = [
  {
    pregunta: "¿Cómo puedo ingresar a la plataforma?",
    categoria: "Acceso",
    respuesta: "Hola, para ingresar a la plataforma utilizá los datos de acceso que te fueron proporcionadas. Si tenés inconvenientes, comunicate con el área responsable para recibir asistencia."
  },
  {
    pregunta: "¿Cómo puedo cargar un comprobante?",
    categoria: "Carga de comprobantes",
    respuesta: "Hola, para realizar la carga del comprobante, ingresá a la plataforma y seguí el procedimiento establecido por el manual de usuario. Si tenés dudas, consultá con el área administrativa."
  },
  {
    pregunta: "¿Qué formato debe tener el comprobante?",
    categoria: "Carga de comprobantes",
    respuesta: "Hola, el formato admitido debe verificarse según las indicaciones de ARCA. Te sugerimos consultar con el área administrativa antes de realizar la carga."
  },
  {
    pregunta: "¿Puedo corregir un comprobante cargado?",
    categoria: "Carga de comprobantes",
    respuesta: "Hola, para conocer cómo corregir un comprobante ya cargado, verifica el manual del Usuario."
  },
  {
    pregunta: "¿Cómo consulto el estado de mi comprobante?",
    categoria: "Seguimiento",
    respuesta: "Hola, podés consultar el seguimiento desde la plataforma, de acuerdo con las opciones disponibles. Este asistente no accede a estados reales de comprobantes."
  },
  {
    pregunta: "¿Qué hago si no puedo ingresar?",
    categoria: "Acceso",
    respuesta: "Hola, si tenés inconvenientes para ingresar, verificá tus datos de acceso. Si el problema continúa, comunicate con el área responsable."
  },
  {
    pregunta: "¿Puedo cargar más de un comprobante?",
    categoria: "Carga de comprobantes",
    respuesta: "Hola, la posibilidad de cargar varios comprobantes depende de lo informado por el area certificadora. Te recomendamos verificarlo con el área administrativa."
  },
  {
    pregunta: "¿Cómo sé si se recibió mi comprobante?",
    categoria: "Seguimiento",
    respuesta: "Hola, podés revisar la información disponible en la plataforma. ."
  },
  {
    pregunta: "¿A quién consulto por un inconveniente?",
    categoria: "Acceso",
    respuesta: "Hola, ante cualquier inconveniente con la plataforma, comunicate con el área responsable para recibir orientación."
  },
  {
    pregunta: "¿Dónde puedo consultar dudas sobre facturación?",
    categoria: "Seguimiento",
    respuesta: "Hola, podés dirigir tus consultas al área administrativa correspondiente, que podrá orientarte sobre el procedimiento de facturación."
  }
];

const lista = document.getElementById("listaPreguntas");
const busqueda = document.getElementById("busqueda");
const categoria = document.getElementById("categoria");
const respuesta = document.getElementById("respuesta");
const copiar = document.getElementById("copiar");
const mensaje = document.getElementById("mensaje");

function mostrarPreguntas() {
  const texto = busqueda.value.toLowerCase();
  const filtro = categoria.value;

  lista.innerHTML = "";

  const resultados = preguntas.filter(item => {
    const coincideTexto = item.pregunta.toLowerCase().includes(texto);
    const coincideCategoria =
      filtro === "Todas" || item.categoria === filtro;

    return coincideTexto && coincideCategoria;
  });

  if (resultados.length === 0) {
    lista.textContent = "No se encontraron preguntas.";
    return;
  }

  resultados.forEach(item => {
    const boton = document.createElement("button");
    boton.className = "pregunta";
    boton.textContent = item.pregunta;

    boton.addEventListener("click", () => {
      respuesta.textContent = item.respuesta;
      mensaje.textContent = "";
    });

    lista.appendChild(boton);
  });
}

busqueda.addEventListener("input", mostrarPreguntas);
categoria.addEventListener("change", mostrarPreguntas);

copiar.addEventListener("click", async () => {
  const texto = respuesta.textContent;

  try {
    await navigator.clipboard.writeText(texto);
    mensaje.textContent = "Respuesta copiada.";
  } catch (error) {
    mensaje.textContent = "No se pudo copiar. Seleccioná y copiá el texto manualmente.";
  }
});

mostrarPreguntas();
