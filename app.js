// Test if file is working
console.log("Hello World");

// Declare Article Data as Json
const data = [
  {
    title: "How To Create an HTML Document",
    subtitle: "TUTORIALS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam sed repellendus nostrum assumenda at sit odio expedita quam nemo accusantium consequatur saepe dolore, mollitia iusto esse voluptas, cumque perspiciatis!<br> Atque, officiis natus eaque corporis quaerat, cumque porro aspernatur corrupti mollitia voluptatibus fugiat maxime. Quidem perferendis iusto accusantium tempora, repellat rem! Id quis laboriosam sint dolores porro doloremque, sapiente iste. Sunt eos delectus provident qui obcaecati quam mollitia saepe asperiores iure, voluptatum inventore, minus atque! <br> Porro qui ipsa, eligendi mollitia est excepturi rerum illum nobis adipisci in pariatur totam. Quidem? Id ratione numquam a beatae, quia enim illo ex doloribus error! Nesciunt fuga, dignissimos nisi vero perferendis omnis minima? Sit natus deleniti exercitationem voluptatibus inventore soluta reiciendis nemo dicta adipisci.",
  },
  {
    title: "How to compile a C document",
    subtitle: "TUTORIALS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam sed repellendus nostrum assumenda at sit odio expedita quam nemo accusantium consequatur saepe dolore, mollitia iusto esse voluptas, cumque perspiciatis!<b> Atque, officiis natus eaque corporis quaerat, cumque porro aspernatur corrupti mollitia voluptatibus fugiat maxime. Quidem perferendis iusto accusantium tempora, repellat rem! Id quis laboriosam sint dolores porro doloremque, sapiente iste. Sunt eos delectus provident qui obcaecati quam mollitia saepe asperiores iure, voluptatum inventore, minus atque! Porro qui ipsa, eligendi mollitia est excepturi rerum illum nobis adipisci in pariatur totam. Quidem? Id ratione numquam a beatae, quia enim illo ex doloribus error! Nesciunt fuga, dignissimos nisi vero perferendis omnis minima? Sit natus deleniti exercitationem voluptatibus inventore soluta reiciendis nemo dicta adipisci.",
  },
];

// Components
const Header = document.querySelector(".header");
const Footer = document.querySelector(".footer");
const DisplayPosts = document.querySelector(".display-posts");

const HeaderData = [
  `<div class="logo">
<div class="img">Technical Shampy</div>
</div>
<ul class="nav-list">
<li><a class="nav-links" href="#">Home</a></li>
<li><a class="nav-links" href="#">Blog</a></li>
<li><a class="nav-links" href="#">Contact</a></li>
<li><a class="nav-links" href="#">About</a></li>
</ul>`,
];

// Header
if (Header) {
  Header.innerHTML += `${HeaderData}`;
} else console.error("Component Not Found || Is not working correctly");

// Displaying Posts
if (DisplayPosts) {
  const addArticle = () => {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const content = document.querySelector(".content");

    title.innerHTML += data[0].title;
    subtitle.innerHTML += data[0].subtitle;
    content.innerHTML += data[0].content;

    console.log(data);
  };
  addArticle();
} else console.error("DisplayPosts Element not found");
