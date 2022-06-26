// Declare Article Data as Json
import data from "./js/articles.js";
import header from "./components/header.js";

// Components
const Header = document.querySelector(".header");
const Footer = document.querySelector(".footer");
const DisplayPosts = document.querySelector(".blog");
const loaderElem = document.querySelector(".loader");
const Body = document.querySelector("body");

// Header
const HeaderElem = () => {
  if (Header) {
    Header.innerHTML += `${header}`;
  } else console.error("Component Not Found || Is not working correctly");
};
setTimeout(HeaderElem, 3000);

if (DisplayPosts) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    DisplayPosts.innerHTML += `<div class="blog-card">
    <div class="title">${element.title}</div>
    <div class="subtitle">${element.subtitle}</div>
    <div class="content">${element.content}</div>
  </div>`;
  }
} else console.error(DisplayPosts);

// Css Loader TimeOut
Body.style.visibility = "hidden";
loaderElem.style.visibility = "visible";

const LoaderAnimation = () => {
  Body.style.visibility = "visible";
  loaderElem.style.visibility = "hidden";
};

setTimeout(LoaderAnimation, 3000);
