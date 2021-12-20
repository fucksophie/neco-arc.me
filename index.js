
const rest = document.getElementById("rest");
const banner = document.getElementById("banner");

const audio = document.getElementById("audio");

banner.addEventListener("click", () => {
	rest.hidden = false;
	banner.remove();

	audio.play();
})