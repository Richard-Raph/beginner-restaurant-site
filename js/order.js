const logo = document.querySelector(".log");

logo.addEventListener("mouseover", () => {
    logo.style.letterSpacing = "5px";
})

logo.addEventListener("mouseout", () => {
    logo.style.letterSpacing = "0px";
});