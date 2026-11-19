const tasks = [
  { id: 1, title: "Create homepage", position: "left", owner: "Ahmed" },
  { id: 2, title: "Design login page", position: "right", owner: "Sara" },
  { id: 3, title: "Implement authentication", position: "left", owner: "Youssef" },
  { id: 4, title: "Fix navigation bugs", position: "right", owner: "Fatima" },
  { id: 5, title: "Create database schema", position: "left", owner: "Ahmed" },
  { id: 6, title: "Develop API endpoints", position: "left", owner: "Sara" },
  { id: 7, title: "Write unit tests", position: "right", owner: "Youssef" },
  { id: 8, title: "Improve responsive design", position: "left", owner: "Fatima" },
  { id: 9, title: "Deploy application", position: "right", owner: "Ahmed" },
  { id: 10, title: "Update documentation", position: "left", owner: "Sara" }
];

const card = document.querySelector("#card");
const tasktitle = document.querySelector("#tasktitle");

function afficher(arr = tasks) {
  card.textContent = "";
  tasktitle.innerHTML = "";

  arr.forEach(tache => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    // titre
    const title = document.createElement("h3");
    title.textContent = tache.title;
    // owner
    const owner = document.createElement("p");
    owner.textContent = "Owner: " + tache.owner;
    // position
    const position = document.createElement("p");
    position.textContent = "Position: " + tache.position;
    // bouton supprimer
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "supprimer";

    const option = document.createElement("option");
    option.textContent = tache.title;

    btn.addEventListener("click", () => {
      const index = tasks.findIndex((element) => element.id === tache.id);
      tasks.splice(index, 1);
      searchtask(search.value); 
    });

  
    taskCard.append(title, owner, position, btn);
    card.appendChild(taskCard);
    tasktitle.appendChild(option);
  });
}

function readForm() {
  const tasktitleValue = document.querySelector("#tasktitle").value; 
 const onwerinput = document.querySelector("#owner").value;
  const position = document.querySelector("#Position").value;

  return { tasktitle: tasktitleValue, onwerinput, position }; 
}

const errorMessage = document.querySelector("#error-owner");
const errorposition = document.querySelector("#error-position");

const form = document.querySelector("#cardform");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  errorposition.textContent = "";

  const data = readForm();

  if (data.onwerinput.trim() === "") {
    errorMessage.textContent = "type a name";
    return;
  }

  if (data.position !== "left" && data.position !== "right") {
    errorposition.textContent = "type left or right";
    return;
  }
  form.reset();
  addTask(data);
});

let NextId = 11;
const addTask = (data) => {
  const task = {
    id: NextId,
    title: data.tasktitle,
    position: data.position,
    owner: data.onwerinput
  };

  tasks.push(task);
  NextId++;

  afficher();
};

const search = document.querySelector("#search");
function searchtask(text) {
  let filtretask = tasks.filter((element) =>
    element.title.toLowerCase().includes(text.toLowerCase().trim())
  );
  afficher(filtretask);
}
search.addEventListener("input", (e) => {
  searchtask(e.target.value);
});

afficher(); 