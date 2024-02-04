//todo Heading part of web
document.querySelector("a").addEventListener("click", function (event) {
  event.target.textContent = "Už neklikej!";
});
document.querySelectorAll(".interactive").forEach(function (clickFce) {
  clickFce.addEventListener("click", function (event2) {
    event2.target.textContent = "Baf";
  });
});
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//todo To Do App part of web
let toDos = [
  {
    text: "Vynes odpadky",
    completion: false,
  },
  {
    text: "Vyluxuj",
    completion: false,
  },
  {
    text: "Nakrm kočku",
    completion: true,
  },
  {
    text: "Nakrm psa",
    completion: true,
  },
  {
    text: "Vyper a pověs prádlo",
    completion: false,
  },
  {
    text: "Udělej si svačinu",
    completion: true,
  },
];
let toDoLeft = toDos.filter(function (oneToDo) {
  return !oneToDo.completion;
});

//? VYpíše celkový počet zbylých úkolů

let paragraph = document.querySelector("#pocetZbylychUkolu");
paragraph.textContent = `Zbývá udělat: ${toDoLeft.length} úkolů.`;

//? vypíše všechny úkoly
/* for (let i = 0; i < toDos.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = toDos[i].text;
  document.querySelector(".todoapp").appendChild(paragraph);
} */

//? vypíše zbylé úkoly

/* for (let i = 0; i < toDos.length; i++) {
  const paragraph = document.createElement("p");
  if (toDos[i].completion === false) {
    paragraph.textContent = toDos[i].text;
  }
  document.querySelector(".todoapp").appendChild(paragraph);
} */

//? výpis zbylých úkolů podle filter funkce

/* const vypisZbylychUkolu = function (ukol) {
  let ukoly = ukol.filter(function (zbylyUkoly) {
    if (zbylyUkoly.completion === false) {
      return zbylyUkoly.text
    }
  })
  ukoly.forEach(function(zbylyUkoly){
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `Konkrétně tyto úkoly: <b>${zbylyUkoly.text}.</b>`
    document.querySelector(".todoapp").appendChild(paragraph)
  })
};
vypisZbylychUkolu(toDos) */

//? Zbylé ukoly funkce filtr

const vypisZbylychUkolu = function (ukol, hledanyUkol) {
  let ukoly = ukol.filter(function (zbylyUkoly) {
    return zbylyUkoly.text.toLowerCase().includes(hledanyUkol.toLowerCase());
  });

  //todo vrací zda je úkol hotový nebo ne

  let toDoLeft = ukoly.filter(function (jedenUkol) {
    return jedenUkol.completion === false;
  });

  //todo vymaže předchozí výsledky vypisování

  document.querySelector("#pocetShodnychUkolu").innerHTML = "";

  //todo vypíše počet úkolů, které jsou "false" a zároveň napsané v inputu

  let paragraph = document.querySelector("#pocetShodnychUkolu");
  paragraph.textContent = `Počet nesplněných úkolů z vyhledávače: ${toDoLeft.length}`;

  //todo vymaže obsah výsledků aby se nestackovali

  document.querySelector("#vypisUkolu").innerHTML = "";

  //todo vypíše konkrétní úkoly, které jsou shodné v inputu i v poli

  ukoly.forEach(function (zbylyUkoly) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `Shodný úkol: <b>${zbylyUkoly.text}</b>`;
    document.querySelector("#vypisUkolu").appendChild(paragraph);
  });
};

//? Uplatňuje se logická funkce ↑↑↑↑

let zadaniUkolu = document.querySelector("#inputUkol");
zadaniUkolu.addEventListener("input", function (event) {
  const filters2 = event.target.value;
  vypisZbylychUkolu(toDos, filters2);
});

//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//? část klikání na tlačítka, v html schované proto i tady
/* document.querySelector(".button2").addEventListener("click", function (event){
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
  button2.textContent = "Řekla jsem, abys už neklikal!";
});

let input = document.querySelector("#input-text");
input.addEventListener("input", function (event) {
  console.log(event.target.value);
}); */

//todo Filtrování podezřelých úkol

let criminals = [
  {
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    adress: "U Sloupů 16",
    city: "České budějovice",
  },
  {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    adress: "Malská 29",
    city: "České Budějovice",
  },
  {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    adress: "Stevardská 38",
    city: "České Budějovice",
  },
];
//? uložíme data z políčka
let filters = {
  searchText: "",
};

//? Filtr
const renderCriminals = function (poleMychPodezrelych, hledanyVyraz) {
  let polePodezrelych = poleMychPodezrelych.filter(function (moznyPodezrely) {
    return moznyPodezrely.licencePlate
      .toLowerCase()
      .includes(hledanyVyraz.searchText.toLowerCase());
  });
  document.querySelector("#idCriminal").innerHTML = "";

  polePodezrelych.forEach(function (moznyPodezrely) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `<b>Možná jste našli podezřelého.</b> <br>
    Jméno: ${moznyPodezrely.firstName}, <br>
    Příjmení: ${moznyPodezrely.secondName} <br>
    Rok narození: ${moznyPodezrely.birth},<br>
    Licence: <b>${moznyPodezrely.licencePlate}</b>, <br>
    Ulice: ${moznyPodezrely.adress},<br>
    Město: ${moznyPodezrely.city}.`;
    document.querySelector("#idCriminal").appendChild(paragraph);
  });
};

//? načítáme data z políčka
let licencePlate = document.querySelector("#licence-plate");
licencePlate.addEventListener("input", function (event) {
  filters.searchText = event.target.value;
  renderCriminals(criminals, filters);
});

//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//////
//! Další část procvičování  FORMULÁŘ

//! form id testForm
document
  .querySelector("#testForm")
  .addEventListener("submit", function (event) {
    //todo vyplneme výchozí chování formuláře
    event.preventDefault();

    //todo přístup k obsahu inputu
    //console.log(event.target.elements.firstName.value);

    //todo vytvoříme odstavec a přidáme text z inputu
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `Jméno: ${event.target.elements.firstName.value}, <br>
    Příjmení: ${event.target.elements.secondName.value}, <br>
    E-mail: ${event.target.elements.email.value}`;
    document.querySelector("#from-form").appendChild(paragraph);


    //todo po odeslání vymaže obsah inputu
    event.target.elements.firstName.value = "";
    event.target.elements.secondName.value = "";
    event.target.elements.email.value = "";
  });
