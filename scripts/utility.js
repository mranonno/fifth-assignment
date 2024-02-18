/***** count down seat *****/
function countDown(id) {
    const initialValue = document.getElementById(id);
      const valueText = initialValue.innerText;
      const valueNumber = parseInt(valueText);
      const leftNumber = valueNumber - 1;
      initialValue.innerText = leftNumber;
}
/***** count up seat *****/
function countUp(id) {
    const initialValue = document.getElementById(id);
      const valueText = initialValue.innerText;
      const valueNumber = parseInt(valueText);
      const leftNumber = valueNumber + 1;
      initialValue.innerText = leftNumber;
}
/***** seat details add to container *****/
function addToContainer(id, seatNumber) {
    const seatContainer = document.getElementById(id);
        const ul= document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        li1.innerText = seatNumber;
        li2.innerText = 'Economy';
        li3.innerText = '550';
        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
    ul.classList.add('flex', 'justify-between');
    seatContainer.appendChild(ul);
}
/***** update total price *****/
function getTotalPrice(id) {
      const initialTotal = document.getElementById(id);
      const totalPriceText = initialTotal.innerText;
        const totalPrice = parseInt(totalPriceText);
        const newTotal = totalPrice + 550;
        initialTotal.innerText = newTotal;
}
