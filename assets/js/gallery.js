// self executing function here
(function () {
	document.querySelectorAll(".gallery img:nth-child(2)").forEach((img) => img.classList.add("clipped2"))
	document.querySelectorAll(".gallery img:nth-child(3)").forEach((img) => img.classList.add("clipped3"))
})();