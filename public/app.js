// Declare Article Data as Json
import data from "./js/articles.js";
import header from "./components/header.js";

// Components
const Header = document.querySelector(".header");
const Footer = document.querySelector(".footer");
const loaderElem = document.querySelector(".loader");
const Body = document.querySelector("body");

// Header
const HeaderElem = () => {
  if (Header) {
    Header.innerHTML += `${header}`;
  } else console.error("Component Not Found || Is not working correctly");
};
setTimeout(HeaderElem, 3000);

// Css Loader TimeOut
Body.style.visibility = "hidden";
loaderElem.style.visibility = "visible";

const LoaderAnimation = () => {
  Body.style.visibility = "visible";
  loaderElem.style.visibility = "hidden";
};

setTimeout(LoaderAnimation, 3000);
