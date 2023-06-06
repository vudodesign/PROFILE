const text = document.querySelector(".text-ani");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Fashion.";
    }, 0);

    setTimeout(() => {
        text.textContent = "Modern.";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Creative.";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);