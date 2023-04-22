//  _                             _   
// | |                           | |  
// | |     __ _ _   _  ___  _   _| |_ 
// | |    / _` | | | |/ _ \| | | | __|
// | |___| (_| | |_| | (_) | |_| | |_ 
// |______\__,_|\__, |\___/ \__,_|\__|
//               __/ |                
//              |___/                 
// Generate Layout and Responsiveness

function updateButtonsHeight() {
  const buttons = document.querySelectorAll(".button");
  if (window.innerWidth <= 1250) {
    const multiplier = window.innerWidth / window.innerHeight;
    buttons.forEach((button) => {
      button.style.height = `${multiplier * 15}vh`;//15 = current button vw
    });
  }
  buttons.forEach((button) => {
    button.style.height = `${multiplier * 15}vh`;//15 = current button vw
  });
}  
window.addEventListener("resize", updateButtonsHeight);
window.addEventListener("DOMContentLoaded", updateButtonsHeight);

let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>`;
let secondButtonsContainer = `
    <div class="buttonsContainer" id="buttons_2"></div>`;
const position = 'beforeend';
linksBlockLeft.insertAdjacentHTML(position, firstButtonsContainer);
linksBlockRight.insertAdjacentHTML(position, secondButtonsContainer);
