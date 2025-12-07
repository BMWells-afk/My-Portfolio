// Royalty-free cat images from Pixabay
const cats = [
  "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_640.jpg",
  "https://cdn.pixabay.com/photo/2017/07/22/15/21/cat-2528935_640.jpg",
  "https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_640.jpg",
  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg",
  "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
];


const imgEl = document.getElementById("catImg");
const btn = document.getElementById("newBtn");

// Pick a random cat from the list
function showRandomCat() {
  const randomIndex = Math.floor(Math.random() * cats.length);
  imgEl.src = cats[randomIndex];
}

// Show one on page load
showRandomCat();

// Change when button is clicked
btn.addEventListener("click", showRandomCat);