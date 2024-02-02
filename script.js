document.querySelector("a").addEventListener("click", function (event) {
  event.target.textContent = "Už neklikej!";
});
document.querySelectorAll(".interactive").forEach(function (clickFce) {
  clickFce.addEventListener("click", function (event2) {
    event2.target.textContent = "Klikni na text níže.";
  });
});

let toDos = [
  {
    text: "Vynes odpadky",
    completion: false,
  },
  {
    text: "Vyluxuj",
    completion: true,
  },
  {
    text: "Nakrm kočky",
    completion: false,
  },
  {
    text: "Nakrm psa",
    completion: true,
  },
  {
    text: "Vyper a pověs prádlo",
    completion: false,
  },
];
let toDoLeft = toDos.filter(function (oneToDo) {
  return !oneToDo.completion;
});
console.log(toDoLeft.length);

let paragraph = document.createElement("p");
paragraph.textContent = `Zbývá udělat: ${toDoLeft.length} úkolů.`;
document.querySelector("main").appendChild(paragraph);

/* for (let i = 0; i < toDos.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = toDos[i].text;
  document.querySelector("main").appendChild(paragraph);
} */

//? vypíše zbylé úkoly

for (let i = 0; i < toDos.length; i++) {
  const paragraph = document.createElement("p");
  if (toDos[i].completion === false) {
    paragraph.textContent = toDos[i].text;
  }
  document.querySelector("main").appendChild(paragraph);
}

document.querySelector(".button2").addEventListener("click", function (event) {
  console.log("Kliknutí bylo provedeno!");
});

let button1 = document.querySelector(".btn-1");
let button2 = document.querySelector(".btn-2");

button1.addEventListener("click", function () {
  console.log("Klikl jsi na první tlačítko.");
  button1.textContent = "Už neklikej";
});

button2.addEventListener("click", function () {
  console.log("Klikl jsi na druhé tlačítko.");
  button2.textContent = "Řekla jsem abys už neklikal!";
});
