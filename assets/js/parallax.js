
// parallax effect 

const bgImage = document.querySelector(".content-bg");

document.addEventListener('scroll', () => {
	var scroll = window.pageYOffset;
	var speed = bgImage.dataset.speed;


	bgImage.style.transform = `translateY(${scroll * speed}px) `;
	// console.log(scroll);
});
