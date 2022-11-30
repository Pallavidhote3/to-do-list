let add = document.getElementById("addition");
let title = document.getElementById("title");
let list = document.getElementById("list");
add.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.innerText = title.value;
  list.appendChild(paragraph);
  title.value = "";
  paragraph.addEventListener("click", function () {
    list.removeChild(paragraph);
  });
});
