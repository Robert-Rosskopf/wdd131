const hamButton = document.querySelector('#menu');
/* select the <ul> with the class "navigation" */
const navigation = document.querySelector('.navigation'); 
const main_heading = document.querySelector('h1');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
  main_heading.classList.toggle('turn-invisible');
  
});
// Use the current year as copyright year.
document.getElementById("year").textContent = new Date().getFullYear();
// Find the date of the last modification
const lastMod = new Date(document.lastModified);
document.getElementById("last-mod").textContent =lastMod.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric"
});