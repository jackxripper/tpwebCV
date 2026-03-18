//audio autoplay when user clicks pour page index.html
document.addEventListener("click", () => {
    const audio = document.getElementById("player");
    audio.play().catch(err => console.log(err));
}, { once: true });

//consultation temps
function showDateTime() {
    const now = new Date();
    document.getElementById("temps").textContent = 
    now.toLocaleTimeString() + " " + now.toLocaleDateString();
}
