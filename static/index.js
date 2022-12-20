const leftbtn = document.getElementById("leftButton");
const rightbtn = document.getElementById("rightButton");
const resetbtn = document.getElementById("resetButton");
const image = document.getElementById("deskImage");

let url = document.URL.split("/");
let id = url[url.length - 1];
let images = [
	`/${id}/${id}-image1.jpg`,
	`/${id}/${id}-image2.jpg`,
	`/${id}/${id}-image3.jpg`,
	`/${id}/${id}-image4.jpg`,
	`/${id}/${id}-image5.jpg`,
	`/${id}/${id}-image6.jpg`,
	`/${id}/${id}-image7.jpg`,
];
let counter = 0;

function enlargeImage() {
	console.log(image.style.transform);
	if (image.style.transform === "scale(2)") {
		image.style.transform = "scale(1)";
		image.style.transition = "transform 0.25s ease";
	} else {
		image.style.transform = "scale(2)";
		image.style.transition = "transform 0.25s ease";
	}
}

leftbtn.addEventListener("click", () => {
	counter--;
	rightbtn.className = rightbtn.className.replace(" disabled", "");
	if (counter === 0) {
		leftbtn.className = leftbtn.className + " disabled";
	}
	image.src = flask_util.url_for("static", { filename: images[counter] });
});

rightbtn.addEventListener("click", () => {
	counter++;
	leftbtn.className = leftbtn.className.replace(" disabled", "");
	if (counter === images.length - 1) {
		rightbtn.className = rightbtn.className + " disabled";
	}

	image.src = flask_util.url_for("static", { filename: images[counter] });
});
