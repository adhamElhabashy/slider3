// get slides
let sliderDivs = Array.from(
	document.querySelectorAll(".slider-body .img-holder")
);

// create ul
let ulBullets = document.createElement("ul");

// set ul id
let ulId = ulBullets.setAttribute("id", "pagination-ul");

// set ul class
let ulclass = ulBullets.setAttribute("class", "bullets");
// create lis
for (let i = 1; i <= sliderDivs.length; i++) {
	// li
	let li = document.createElement("li");

	// set attribute
	li.setAttribute("data-index", i);
	ulBullets.appendChild(li);
}
// append ul
document.querySelector(".slider-body").append(ulBullets);

// get created ul
let createdUl = document.querySelector(".bullets");

// set default slide
sliderDivs[2].classList.add("active");

// set default bullet
createdUl.children[2].classList.add("active");

function theChecker(e) {
	// remove active class from all li
	e.target.parentElement.querySelectorAll("li").forEach((li) => {
		li.classList.remove("active");
	});
	// add active class to target li
	e.target.classList.add("active");
	// remove active class from all slides
	sliderDivs.forEach((div) => {
		div.classList.remove("active");
	});
	sliderDivs[e.target.dataset.index - 1].classList.add("active");
}

createdUl.querySelectorAll("li").forEach((li) => {
	li.addEventListener("click", theChecker);
});
