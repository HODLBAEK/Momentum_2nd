const images = ["1.jpg", "2.jpg", "3.jpg"];
const randomImages = images[Math.floor(Math.random() * images.length)];

//? Changing HTML from Javascript(.createElement)
const bgImage = document.createElement("img");
bgImage.src = `img/${randomImages}`;
document.body.appendChild(bgImage);

//? creating Elements from Javascript to HTML(.querySelector)
// const bgImageHTML = document.querySelector("img");
// bgImageHTML.src = `img/${randomImages}`;
//but you have to add <img src=''> to index.HTML
