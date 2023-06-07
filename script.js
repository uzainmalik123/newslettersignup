let sectionOne = document.getElementById("section-1");
let sectionTwo = document.getElementById("section-2");
let sectionOneVal = sectionOne.getAttribute("data-status");
let sectionTwoVal = sectionTwo.getAttribute("data-status");
let subscribeBtn = document.getElementById("subscribe-button");
let dismissBtn = document.getElementById("dismiss-button");
let textInput = document.getElementById("text-input");
let errorLabel = document.getElementById("error-label");

subscribeBtn.addEventListener("click", () => {
  if (sectionOneVal == "active" && sectionTwoVal == "notactive") {
    let textInputVal = document.getElementById("text-input").value;
    if (textInputVal.includes("@") == true) {
      sectionOneVal = "notactive";
      sectionTwoVal = "active";
      sectionOne.style.display = "none";
      sectionTwo.style.display = "flex";
      errorLabel.style.display = 'none'
      errorLabel.style.transition = '0.2s'
      textInput.style.borderColor = 'hsl(231, 7%, 60%)';
      textInput.style.color = 'hsl(235, 18%, 26%)';
      textInput.style.backgroundColor = '#fff';
    }
    else if(textInputVal.includes('@') == false) {
        errorLabel.style.display = 'block'
        errorLabel.style.transition = '0.2s'
        textInput.style.borderColor = 'hsl(4, 100%, 67%)';
        textInput.style.color = 'hsl(4, 100%, 67%)';
        textInput.style.backgroundColor = '#FFE8E6';
    }
  }
});
dismissBtn.addEventListener("click", () => {
  if (sectionOneVal == "notactive" && sectionTwoVal == "active") {
    sectionOneVal = "active";
    sectionTwoVal = "notactive";
    sectionOne.style.display = "flex";
    sectionTwo.style.display = "none";
  }
});
