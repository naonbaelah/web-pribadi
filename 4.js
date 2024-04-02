const listicon = document.getElementById("listicon");
const ulnavbar = document.getElementById("ulnavbar");

listicon.addEventListener("click", () => {
    ulnavbar.classList.toggle("hidden");
});