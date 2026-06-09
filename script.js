document.addEventListener("DOMContentLoaded", function () {

  const cards = document.querySelectorAll(".product-card");
  const modal = document.getElementById("productModal");

  console.log("Cards found:", cards.length);
  console.log("Modal:", modal);

  cards.forEach(card => {
    card.onclick = function () {

      console.log("clicked");

      modal.style.display = "block";
    };
  });

});