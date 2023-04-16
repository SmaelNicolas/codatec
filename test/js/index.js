const mobileButton = document.querySelector(".mobile-menu-btn");
const navUl = document.querySelector(".container--navbar--mobile--ul");
const allLinks = document.querySelectorAll(
	".container--navbar--mobile--ul--li--a"
);

mobileButton.addEventListener("click", function () {
	this.classList.toggle("active");
	navUl.classList.toggle("active");
});

allLinks.forEach((link) => {
	link.addEventListener("click", function () {
		mobileButton.classList.toggle("active");
		navUl.classList.toggle("active");
	});
});
