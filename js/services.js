const items = document.querySelectorAll(".item-new");

items.forEach((item) => {
	item.addEventListener("click", () => {
		item.classList.toggle("open");
	});
});
