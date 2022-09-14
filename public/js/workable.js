const DisplayPosts = document.querySelector(".blog")

// Displaying Posts
if (DisplayPosts) {
  const addArticle = () => {
    const title = document.querySelector(".title")
    const subtitle = document.querySelector(".subtitle")
    const content = document.querySelector(".content")

    title.innerHTML += data[0].title
    subtitle.innerHTML += data[0].subtitle
    content.innerHTML += data[0].content

    console.log(data)
  }
  addArticle()
} else console.error("Any Element not found having DisplayPosts Class.")

// Also This
const title = document.querySelector(".title")
const subtitle = document.querySelector(".subtitle")
const content = document.querySelector(".content")

title.innerHTML += element.title
subtitle.innerHTML += element.subtitle
content.innerHTML += element.content
