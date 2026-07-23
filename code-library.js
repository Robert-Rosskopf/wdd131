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

function windChill(tempF, windMph) {
    // Wind chill only applies under these conditions
    if (tempF > 50 || windMph < 3) {
        return tempF; // No wind chill effect
    }

    // NWS wind chill formula
    return 35.74 
        + (0.6215 * tempF)
        - (35.75 * Math.pow(windMph, 0.16))
        + (0.4275 * tempF * Math.pow(windMph, 0.16));
}