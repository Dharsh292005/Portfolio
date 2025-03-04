document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const words = ["Web Developer", "Frontend Designer", "Creative Coder"];
    let index = 0;

    function typeEffect() {
        textElement.textContent = words[index];
        index = (index + 1) % words.length;
        setTimeout(typeEffect, 2000);
    }

    typeEffect();
});
