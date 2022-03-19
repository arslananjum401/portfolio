let PreviewButton = document.querySelectorAll('.Project a');
// console.log(PreviewButton);
const changeColor = (button) => {
    button.style.color = "white";
    button.style.backgroundColor = "#707070";
    button.style.transition = "all .3s";
    setTimeout(() => {
        button.style.color = "black";
        button.style.backgroundColor = "#E28A67";
        button.style.transition = "all .1s";
        button.setAttribute("style", "");
    }, 600)
}

let NavBtns = document.querySelectorAll('.NavBtns a');
console.log(NavBtns);
NavBtns.forEach((val, index, arr) => {
    val.addEventListener("click",(e) => {
        e.preventDefault();
        document.querySelector(val.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
     
    })
});