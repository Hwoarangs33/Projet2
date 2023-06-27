const toggle = document.getElementById("toggle");
const toggleBall = document.getElementById("toggle-ball")
const priceStarter = document.getElementById("price-starter");
const pricePro = document.getElementById("price-pro");
const priceBus = document.getElementById("price-business");
const yearlyTags = document.querySelectorAll(".yearly-tag");
var acc = document.getElementsByClassName("accordion");
var i;


let toggleIsActive = false;

toggle.addEventListener("click", () => {
    if(toggleIsActive === true) {
        toggleBall.className = "toggle-ball";
        toggleIsActive = false;
        displayText(toggleIsActive)
        displayPrice(toggleIsActive)
    } else {
        toggleBall.className += " toggle-activate";
        toggleIsActive = true;
        displayText(toggleIsActive)
        displayPrice(toggleIsActive)
    }

})

function displayText(isActive) {
    yearlyTags.forEach((tag) => {
        if(isActive) {
            tag.innerHTML = "BILLED YEARLY";
        } else {
            tag.innerHTML = "";
        }
    })
}


function displayPrice(isActive) {
    if(isActive){
        priceStarter.innerHTML = 24;
        pricePro.innerHTML = 39;
        priceBus.innerHTML = 79;
    } else {
        priceStarter.innerHTML = 17;
        pricePro.innerHTML = 32;
        priceBus.innerHTML = 52;
    }
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
