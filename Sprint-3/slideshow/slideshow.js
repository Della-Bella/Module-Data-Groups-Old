const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0; 
const carouselImg = document.getElementById("carousel-img"); 
const backwardBtn = document.getElementById("backward-btn"); 
const forwardBtn = document.getElementById("forward-btn"); 


function updateImage() {
    carouselImg.src = images[currentIndex];
}

forwardBtn.addEventListener("click", () => {
    currentIndex++; 
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    updateImage(); 
});
backwardBtn.addEventListener("click", () => {
    currentIndex--; 
    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }
    updateImage(); 
});

updateImage();