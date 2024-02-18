const seatButtons = document.getElementsByClassName("seat-btn");
const arrays = [];
for (const seatButton of seatButtons) {
  seatButton.addEventListener("click", function (events) {
    const elementClass = events.target;
    const elementText = elementClass.innerText;
    if (arrays.length < 4 && !arrays.includes(elementText)) {
      arrays.push(elementText);
      elementClass.classList.add("bg-customGreen", "text-white");
      countDown("total-seat");
      countUp("count-up");
        addToContainer("seat-container", elementText);
        getTotalPrice("total-price");
        getTotalPrice("grand-price");
    }
  });
}
