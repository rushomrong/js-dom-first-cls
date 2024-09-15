const ullist = document.getElementById("first");
const li = document.createElement("li");
li.innerText = "This is a new JS li element";
li.style.backgroundColor = "yellow";
li.style.padding = "10px";
li.style.border = "1px solid black";

ullist.appendChild(li);

///create a new section

const sectionDress = document.createElement("section");
sectionDress.style.backgroundColor = "green";
sectionDress.style.border = "1px solid red";
sectionDress.style.borderRadius = "5px";
sectionDress.style.padding = "10px";
sectionDress.innerHTML = `
<h1>This is a custom heading</h1>
<ul>
<li>List 1</li>
<li>List 1</li>
<li>List 1</li>
<li>List 1</li>
</ul>
`;

mainContainer.appendChild(sectionDress);
