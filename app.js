// 1.
document.getElementById("container");

// 2.
document.querySelector("#container");

// 3.
let second = document.querySelectorAll(".second");

// 4.
document.querySelector("ol .third");

// 5. If I use section.innerText or innerContent, it gets rid of the ul and ol
let section = document.querySelector("#container");
section.innerHTML += "Hello!";

// 6.
let footer = document.querySelector(".footer");
footer.classList.add("main");

// 7. Or I could have footer.classList.toggle("main"); both times
footer.classList.remove("main");

// 8.
let newLi = document.createElement("li");

// 9.
newLi.innerText = "four";

// 10.
let ul = document.querySelector("ul");
ul.append(newLi);

// 11.
let liList = document.querySelectorAll("ol li");
for (let li of liList) {
    li.style.backgroundColor = "green";
}

// 12.
footer.remove();