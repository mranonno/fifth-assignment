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
    if (arrays.length == "4") {
      const applyBtn = document.getElementById("apply-btn");
      applyBtn.classList.remove("opacity-30");
      applyBtn.removeAttribute("disabled");
    }
  });
}

/***** coupon  function*****/
function clickHandler() {
  const couponText = document.getElementById("coupon-input");
  const inputField = document.getElementById("input-field");
  const couponValue = couponText.value;
  const grandPrice = document.getElementById("grand-price");
  const totalPrice = parseInt(document.getElementById("total-price").innerText);
  const discount = document.getElementById("discount");
  const discountPrice = document.getElementById("discount-price");
  console.log(couponValue, totalPrice);
  
  if (couponValue === "NEW15") {
    const newGrandPrice = totalPrice - totalPrice * 0.15;
    grandPrice.innerText = newGrandPrice;
    discount.classList.add("flex");
    discount.classList.remove("hidden");
    discountPrice.innerText = totalPrice * 0.15;
    inputField.classList.add("hidden");
  } else if (couponValue === "Couple 20") {
    const newGrandPrice = totalPrice - totalPrice * 0.2;
    grandPrice.innerText = newGrandPrice;
    discount.classList.add("flex");
    discount.classList.remove("hidden");
    discountPrice.innerText = totalPrice * 0.2;
    inputField.classList.add("hidden");
  }

  else{
    alert("Please given the valid Coupon");
  }
  document.getElementById("coupon-input").value = "";
}

/***** next function *****/
const myInputNumber = document.getElementById("number-input");
myInputNumber.addEventListener("input", function () {
  const instantValue = myInputNumber.value;
  const nextButton = document.getElementById("next-btn");
  console.log(instantValue.length);
  if (arrays.length > 0 && instantValue.length>=1) {
    nextButton.disabled= false;
    nextButton.classList.remove("opacity-30");
  }
  if (instantValue.length === 0) {
    nextButton.disabled= true;
    nextButton.classList.add("opacity-30");
  }
});