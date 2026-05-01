const lessons = [
  {
    title: "1. Crear un botón primary",
    description: "Crea un botón principal usando las clases base del framework.",
    starter: `<button>Mi botón</button>`,
    hint: "Usa .pk-btn junto con .pk-btn-primary.",
    solution: `<button class="pk-btn pk-btn-primary">Mi botón</button>`
  },
  {
    title: "2. Crear un botón outline",
    description: "Crea un botón con estilo outline usando una variante de color.",
    starter: `<a href="#">Ver más</a>`,
    hint: "Usa .pk-btn y una clase como .pk-btn-outline-primary.",
    solution: `<a href="#" class="pk-btn pk-btn-outline-primary">Ver más</a>`
  },
  {
    title: "3. Crear una card básica",
    description: "Construye una tarjeta con título y texto usando las clases de cards.",
    starter: `<div>
  <h3>Bulbasaur</h3>
  <p>Pokémon inicial de tipo planta.</p>
</div>`,
    hint: "Usa .pk-card, .pk-card-body, .pk-card-title y .pk-card-text.",
    solution: `<div class="pk-card shadow-sm">
  <div class="pk-card-body">
    <h3 class="pk-card-title">Bulbasaur</h3>
    <p class="pk-card-text">Pokémon inicial de tipo planta.</p>
  </div>
</div>`
  },
  {
    title: "4. Crear una alerta success",
    description: "Muestra un mensaje de éxito usando el componente alert.",
    starter: `<div>Operación completada correctamente.</div>`,
    hint: "Usa .pk-alert y .pk-alert-success.",
    solution: `<div class="pk-alert pk-alert-success">
  Operación completada correctamente.
</div>`
  },
  {
    title: "5. Crear un badge tipo pill",
    description: "Crea una insignia redondeada para mostrar una categoría.",
    starter: `<span>Grass</span>`,
    hint: "Usa .pk-badge, una variante de color y .pk-badge-pill.",
    solution: `<span class="pk-badge pk-badge-success pk-badge-pill">
  Grass
</span>`
  },
  {
    title: "6. Crear un input con label",
    description: "Crea un campo de formulario con etiqueta e input estilizado.",
    starter: `<label>Nombre</label>
<input type="text" placeholder="Ash Ketchum">`,
    hint: "Usa .pk-form-group, .pk-label y .pk-input.",
    solution: `<div class="pk-form-group">
  <label class="pk-label" for="name">Nombre</label>
  <input class="pk-input" id="name" type="text" placeholder="Ash Ketchum">
</div>`
  },
  {
    title: "7. Crear una tabla básica",
    description: "Crea una tabla usando las clases de PokeStrap.",
    starter: `<table>
  <tr>
    <th>Pokémon</th>
    <th>Tipo</th>
  </tr>
  <tr>
    <td>Pikachu</td>
    <td>Electric</td>
  </tr>
</table>`,
    hint: "Usa .pk-table. Puedes agregar .pk-table-bordered y .pk-table-hover.",
    solution: `<table class="pk-table pk-table-bordered pk-table-hover">
  <thead>
    <tr>
      <th>Pokémon</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pikachu</td>
      <td>Electric</td>
    </tr>
  </tbody>
</table>`
  },
  {
    title: "8. Crear una fila con 3 columnas",
    description: "Usa el sistema de grid para crear tres columnas responsivas.",
    starter: `<div>
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</div>`,
    hint: "Usa .row y columnas como .col-12 .col-md-4.",
    solution: `<div class="row">
  <div class="col-12 col-md-4 mb-4">
    <div class="bg-primary text-white p-4 rounded-md text-center">Columna 1</div>
  </div>

  <div class="col-12 col-md-4 mb-4">
    <div class="bg-secondary text-black p-4 rounded-md text-center">Columna 2</div>
  </div>

  <div class="col-12 col-md-4 mb-4">
    <div class="bg-accent text-white p-4 rounded-md text-center">Columna 3</div>
  </div>
</div>`
  },
  {
    title: "9. Usar utilidades de spacing",
    description: "Aplica margen, padding, color, bordes y sombra a una caja.",
    starter: `<div>
  Caja con utilidades
</div>`,
    hint: "Prueba clases como .p-4, .mb-4, .bg-warning, .rounded-lg y .shadow-md.",
    solution: `<div class="bg-warning text-black p-4 mb-4 rounded-lg shadow-md">
  Caja con utilidades de PokeStrap
</div>`
  },
  {
    title: "10. Crear un mini layout completo",
    description: "Combina hero, grid, cards y botones en una pequeña interfaz.",
    starter: `<section>
  <h1>Mi página</h1>
  <p>Construida con PokeStrap.</p>
</section>`,
    hint: "Combina .pk-hero, .container, .row, .col-* y .pk-card.",
    solution: `<section class="pk-hero rounded-lg">
  <div class="container">
    <span class="pk-badge pk-badge-secondary pk-badge-pill mb-4">Demo</span>
    <h1 class="pk-hero-title">Mi mini página</h1>
    <p class="pk-hero-text">Construida con PokeStrap.</p>
    <a href="#" class="pk-btn pk-btn-secondary">Comenzar</a>
  </div>
</section>

<section class="section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 mb-4">
        <div class="pk-card shadow-sm h-100">
          <div class="pk-card-body">
            <h3 class="pk-card-title">Layout</h3>
            <p class="pk-card-text">Usa filas y columnas responsive.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-4">
        <div class="pk-card shadow-sm h-100">
          <div class="pk-card-body">
            <h3 class="pk-card-title">Componentes</h3>
            <p class="pk-card-text">Cards, botones, alertas y más.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-4">
        <div class="pk-card shadow-sm h-100">
          <div class="pk-card-body">
            <h3 class="pk-card-title">Utilidades</h3>
            <p class="pk-card-text">Espaciado, colores, flex y sombras.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  }
];

const lessonList = document.getElementById("lesson-list");

const sandboxEditor = document.getElementById("sandbox-editor");
const sandboxPreview = document.getElementById("sandbox-preview");
const runSandboxBtn = document.getElementById("run-sandbox");
const clearSandboxBtn = document.getElementById("clear-sandbox");

let activeLessonCard = null;
let currentLessonIndex = null;

function createPreviewDocument(content) {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../PokeStrap_Framework/dist/css/pokestrap.css">
  <style>
    body {
      margin: 0;
      padding: 1rem;
      background: #ffffff;
    }
  </style>
</head>
<body>
  <div class="pk-app theme-pokemon-classic">
    ${content}
  </div>
</body>
</html>`;
}

function renderFrame(frame, code) {
  frame.srcdoc = createPreviewDocument(code);
}

function setActiveButton(index) {
  document.querySelectorAll("[data-lesson-button]").forEach((button, buttonIndex) => {
    button.className = buttonIndex === index
      ? "pk-btn pk-btn-primary w-100 justify-content-start mb-2"
      : "pk-btn pk-btn-outline-primary w-100 justify-content-start mb-2";
  });
}

function renderLessonCard(index) {
  const lesson = lessons[index];

  const wrapper = document.createElement("div");
  wrapper.className = "pk-card shadow-md mb-4";
  wrapper.style.animation = "pk-slide-up 0.25s ease";

  wrapper.innerHTML = `
    <div class="pk-card-header">
      ${lesson.title}
    </div>

    <div class="pk-card-body">
      <p class="pk-text">${lesson.description}</p>

      <textarea
        id="active-lesson-editor"
        class="pk-textarea bg-gray-900 text-white rounded-lg shadow-sm"
        style="min-height: 220px; font-family: Consolas, Monaco, 'Courier New', monospace;"
      >${lesson.starter}</textarea>

      <div class="d-flex flex-wrap mt-4">
        <button class="pk-btn pk-btn-primary me-2 mb-2" id="active-run">
          Probar mi código
        </button>

        <button class="pk-btn pk-btn-outline-primary me-2 mb-2" id="active-hint">
          Ver pista
        </button>

        <button class="pk-btn pk-btn-outline-accent me-2 mb-2" id="active-solution">
          Ver solución
        </button>

        <button class="pk-btn pk-btn-outline-danger mb-2" id="active-reset">
          Reiniciar
        </button>
      </div>

      <div id="active-message" class="pk-alert pk-alert-info mt-4 d-none"></div>

      <div class="pk-card shadow-sm mt-4">
        <div class="pk-card-header">Vista previa</div>

        <div class="pk-card-body">
          <iframe
            id="active-preview"
            class="w-100 bg-white border rounded-lg shadow-sm"
            style="min-height: 260px;"
          ></iframe>
        </div>
      </div>
    </div>
  `;

  return wrapper;
}

function normalizeCode(code) {
  return code
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/\s*=\s*/g, "=")
    .trim()
    .toLowerCase();
}

function selectLesson(index, button) {
  if (currentLessonIndex === index && activeLessonCard) {
    activeLessonCard.remove();
    activeLessonCard = null;
    currentLessonIndex = null;
    setActiveButton(null);
    return;
  }

  currentLessonIndex = index;

  if (activeLessonCard) {
    activeLessonCard.remove();
    activeLessonCard = null;
  }

  setActiveButton(index);

  const lessonCard = renderLessonCard(index);
  button.insertAdjacentElement("afterend", lessonCard);
  activeLessonCard = lessonCard;

  const lesson = lessons[index];
  const editor = document.getElementById("active-lesson-editor");
  const preview = document.getElementById("active-preview");
  const message = document.getElementById("active-message");

  renderFrame(preview, lesson.starter);

document.getElementById("active-run").addEventListener("click", () => {
  const userCode = normalizeCode(editor.value);
  const solutionCode = normalizeCode(lesson.solution);

  renderFrame(preview, editor.value);

  if (userCode === solutionCode) {
    message.className = "pk-alert pk-alert-success mt-4";
    message.textContent = "¡Excelente! Tu código coincide con la solución.";
  } else {
    message.className = "pk-alert pk-alert-warning mt-4";
    message.textContent = "Tu código se ejecutó, pero todavía no coincide con la solución. Inténtalo de nuevo.";
  }
});

  document.getElementById("active-hint").addEventListener("click", () => {
    message.className = "pk-alert pk-alert-warning mt-4";
    message.textContent = lesson.hint;
  });

  document.getElementById("active-solution").addEventListener("click", () => {
    editor.value = lesson.solution;
    renderFrame(preview, lesson.solution);
    message.className = "pk-alert pk-alert-info mt-4";
    message.textContent = "Solución cargada en el editor.";
  });

  document.getElementById("active-reset").addEventListener("click", () => {
    editor.value = lesson.starter;
    renderFrame(preview, lesson.starter);
    message.className = "pk-alert pk-alert-info mt-4 d-none";
    message.textContent = "";
  });
}

function renderLessonButtons() {
  lessons.forEach((lesson, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = lesson.title;
    button.dataset.lessonButton = "true";
    button.className = "pk-btn pk-btn-outline-primary w-100 justify-content-start mb-2";

    button.addEventListener("click", () => {
      selectLesson(index, button);
    });

    lessonList.appendChild(button);
  });
}

const defaultSandbox = `<section class="section bg-white">
  <div class="container">
    <div class="pk-card shadow-md">
      <div class="pk-card-body text-center">
        <span class="pk-badge pk-badge-primary pk-badge-pill mb-3">
          Sandbox
        </span>

        <h2 class="pk-title-2">Prueba PokeStrap aquí</h2>

        <p class="pk-text">
          Edita este código y ejecuta el sandbox.
        </p>

        <button class="pk-btn pk-btn-primary">
          Botón de prueba
        </button>
      </div>
    </div>
  </div>
</section>`;

runSandboxBtn.addEventListener("click", () => {
  renderFrame(sandboxPreview, sandboxEditor.value);
});

clearSandboxBtn.addEventListener("click", () => {
  sandboxEditor.value = "";
  renderFrame(sandboxPreview, "");
});

renderLessonButtons();

sandboxEditor.value = defaultSandbox;
renderFrame(sandboxPreview, defaultSandbox);
