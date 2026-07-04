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