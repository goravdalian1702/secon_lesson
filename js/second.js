console.log(document);

const body = document.body;
console.log(body);

// const listEl = document.querySelector(".list");
// console.log(listEl);
// listEl.style.listStyle = "none";

// const firstEl = listEl.firstElementChild;
// firstEl.style.color = "tomato";

// const allItem = listEl.children;
// console.log(allItem);

// const allLi = document.querySelectorAll(".menu-item");
// console.log(allLi);

// const imageEl = document.querySelector(".image");
// console.log(imageEl.src);
// console.log(imageEl.alt);

// imageEl.src = "https://picsum.photos/id/13/640/480";

// const articleEl = document.querySelector(".article");
// console.log(articleEl);

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = "Welcome to Kiev";

// const linkEl = document.querySelector(".link");
// console.log(linkEl.classList);

// const hasAClassInLink = linkEl.classList.contains("is-active");
// console.log(hasAClassInLink);

// linkEl.classList.add("special");
// console.log(linkEl.classList);
// linkEl.classList.remove("is-active");
// console.log(linkEl.classList);
// linkEl.classList.toggle("is-active");
// console.log(linkEl.classList);
// linkEl.classList.replace("special", "regular");
// console.log(linkEl.classList);

// const imgEl = document.querySelector(".image");

// console.log(imgEl.getAttribute("alt"));
// imgEl.removeAttribute("src");

// const titleHead = document.createElement("h1");
// titleHead.textContent = "ITS ME";
// titleHead.style.color = "red";
// titleHead.style.fontSize = 25;

// body.append(titleHead);
// const singleBtn = document.querySelector("#single");

// const add = () => {
//   console.log("click single button");
// };

// singleBtn.addEventListener("click", add);

// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");
console.log(markup);
