// const names = ["Alice", "Bob", "Carol"];
// const jobs = ["Writer", "Teacher", "Programmer"];
// const wage = ["$30", "$50", "$70"];

const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

let headers = document.createElement("div");
headers.id = "headers";
container.appendChild(headers);

const header = document.createElement("h1");
header.innerHTML = "Freelancer Forum";
headers.appendChild(header);

const header2 = document.createElement("h2");
header2.innerHTML = "The average starting price is $30";
headers.appendChild(header2);

header_2 = document.createElement("h1");
header_2.innerHTML = "Available Freelancers";
headers.appendChild(header_2);

let sections = document.createElement("div");
sections.id = "multipleSections";
container.appendChild(sections);

let section_1 = document.createElement("section");
section_1.id = "names";
sections.appendChild(section_1);

// document.getElementById("names")

const section_header1 = document.createElement("h1");
section_header1.className = "sectionHeader";
section_header1.innerHTML = "Name";
section_1.appendChild(section_header1);

// names.forEach((i) => {
//   let pElements = document.createElement("p");
//   pElements.innerHTML = i;
//   section_1.appendChild(pElements);
// });

// break
let section_2 = document.createElement("section");
section_2.id = "occupations";
sections.appendChild(section_2);

// document.getElementById("names")

const section_header2 = document.createElement("h1");
section_header2.className = "sectionHeader";
section_header2.innerHTML = "Occupation";
section_2.appendChild(section_header2);

let section_3 = document.createElement("section");
section_3.id = "price";
sections.appendChild(section_3);

const section_header3 = document.createElement("h1");
section_header3.className = "sectionHeader";
section_header3.innerHTML = "Price";
section_3.appendChild(section_header3);

freelancers.forEach((i) => {
  let pElements = document.createElement("p");
  pElements.innerHTML = i.name;
  section_1.appendChild(pElements);
});
freelancers.forEach((j) => {
  let pElements = document.createElement("p");
  pElements.innerHTML = j.occupation;
  section_2.appendChild(pElements);
});
freelancers.forEach((k) => {
  let pElements = document.createElement("p");
  pElements.innerHTML = k.price;
  section_3.appendChild(pElements);
});

document.getElementById("headers").style.textAlign = "center";
document.getElementById("container").style.borderStyle = "solid";
document.getElementById("container").style.marginLeft = "450px";
document.getElementById("container").style.marginRight = "450px";
// document.getElementById("container").style.justifyContent = "center";
// // document.getElementById("container").style.display = "flex";
// document.getElementById("container").style.flexFlow = "column";
document.getElementById("multipleSections").style.display = "flex";

document.getElementById("names").style.margin = "20px";
document.getElementById("occupations").style.margin = "20px";
document.getElementById("price").style.margin = "20px";
document.getElementById("multipleSections").style.justifyContent = "center";
document.getElementById("multipleSections").style.marginTop = "0px";

// document.getElementById("multipleSections").style. = "center";
