console.log("Portfolio website loaded successfully!");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("Project clicked!");
  });
});