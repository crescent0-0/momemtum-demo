const images = ["0.png", "1.png", "2.png"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const backgroundImage = document.createElement("img");
// backgroundImage.src = ;
// document.body.appendChild(backgroundImage);

document.body.style.backgroundImage = `url('img/${chosenImage}')`;

