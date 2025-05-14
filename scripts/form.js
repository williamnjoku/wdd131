const today = new Date();

const year = document.querySelector("#currentyear");
year.textContent = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];

  const select = document.getElementById("product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});


let reviewCount = localStorage.getItem("reviewCount");

  if (!reviewCount) {
    reviewCount = 0;
  }

  reviewCount = parseInt(reviewCount) + 1;

  localStorage.setItem("reviewCount", reviewCount);

  document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.createElement("p");
    counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
    document.body.appendChild(counterDisplay);
});

const rangeInput = document.getElementById("r");
  const rangeValue = document.getElementById("rangevalue");

  rangeInput.addEventListener("input", function () {
    rangeValue.textContent = this.value;
});