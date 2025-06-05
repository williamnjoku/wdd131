

const facts = [
  "James Naismith invented basketball in 1891.",
  "The first basketballs were actually soccer balls.",
  "Michael Jordan has six NBA championship rings.",
  "The NBA was founded in 1946.",
  "Basketball became an Olympic sport in 1936."
];
const fact = facts[Math.floor(Math.random() * facts.length)];
const funFactElement = document.getElementById("funFact");
if (funFactElement) {
  funFactElement.textContent = fact;
}

let visitCount = localStorage.getItem("hoophubVisits") || 0;
visitCount++;
localStorage.setItem("hoophubVisits", visitCount);
console.log("Visits to HoopHub:", visitCount);

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }
});

const emailInput = document.querySelector("footer input[type='email']");
const signUpButton = document.querySelector("footer button");

signUpButton.addEventListener("click", () => {
  const email = emailInput.value;
  if (email) {
    localStorage.setItem("newsletterEmail", email);
    alert(`Thank you for signing up, ${email}!`);
  } else {
    alert("Please enter a valid email.");
  }
});
