// QUESTION 1
const cat = {
  name: "Frank",
  age: 4,
  kind: true,

  complain: function() {
    console.log("Meow!");
  }
};

//QUESTION 2
const heading = document.querySelector("h3");

//QUESTION 3
heading.style.fontSize = "2em";

//QUESTION 4
heading.classList.add("subheading");

//QUESTION 5
const paragraphs = document.querySelectorAll("p");

//QUESTION 6
const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = `<p>New paragraph</p>`;

//QUESTION 7
const cats = [
  ({
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  })
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}
catNames(cats);

//QUESTION 8
function catNames(catArray) {
  let catsHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    catsHTML += `<h5>${catArray[i].name}</h5>`;
  }

  return catsHTML;
}

//QUESTION 10
function catNames(catArray) {
  let catsHTML = "";

  for (i = 0; i < catArray.length; i++) {
    let catAge = "Age unknown";
    if (catArray[i].age) {
      catAge = catArray[i].age;
    }
    catsHTML += `<div><h5>${catArray[i].name} </h5>
                        <p>${catAge}</p></div>`;
  }

  return catsHTML;
}
