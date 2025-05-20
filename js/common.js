const navbar = document.querySelector(".navbarCus");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const subHead = document.querySelector(".subHeading");

menuBtn.onclick = () => {
  navbar.classList.add("show");
};
cancelBtn.onclick = () => {
  navbar.classList.remove("show");
};

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// Loader
var preloader = document.querySelector(".loading");

function loadingFunction() {
  preloader.style.display = "none";
}

// Auto Typed Text
// var typed = new Typed(".auto-type", {
  
//   strings: [" Welcome To " + "Dileep Mehandi"],
//    typeSpeed: 0,
//   backSpeed: 50,
//   loop: false,
// });


subHead.onclick = ()=>{
   
}


const fetchImages = async (keyword) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}`, {
      headers: {
          Authorization: '8imHz9qnavtnBrED_HFCkv7Usp4L52DHU8mkKRL-8nA',
      },
  });
  const data = await response.json();
  console.log(data.results);
};

fetchImages('mehendi');