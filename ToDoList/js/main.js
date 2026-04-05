// Selector de elementos
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Función para animar tareas al agregarlas
function animateTask(li) {
    li.classList.add("animate");
    setTimeout(() => li.classList.add("visible"), 50);
}

// Función para agregar tarea
function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completada al hacer click
    li.addEventListener("click", () => li.classList.toggle("completed"));

    // Botón eliminar
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Eliminar";
    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Para que no marque como completada
        li.remove();
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    animateTask(li);

    input.value = "";
}

// Event listener del botón
addBtn.addEventListener("click", addTask);

// Event listener para Enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// Animaciones iniciales del header y contenedor
window.addEventListener("load", () => {
    const header = document.querySelector("header");
    const container = document.querySelector(".todo-container");
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
});