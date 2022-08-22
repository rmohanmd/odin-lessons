const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const anotherDiv = document.createElement("div");
anotherDiv.style["background-color"] = "pink";
anotherDiv.style["border-style"] = "solid";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";
anotherDiv.appendChild(h1, p);

container.appendChild(anotherDiv);

//button click action
const btn = document.querySelector("#btn");
//this method inserts the onclick event into the html dom via javascript.
//cleaner but still only 1 onclick event allowed per DOM element
btn.onclick = () => alert("Hello World");

//this method allows multiple click events, if needed, for the same DOM element
btn.addEventListener("click", () => {
  alert("Hello World");
});
