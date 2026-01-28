const testBtn = document.getElementById("myBtn");
const idolLists = document.querySelectorAll(".idol-list li");
let selectedIdol = "";


testBtn.addEventListener("click", () => {
    idolLists.forEach(idolList => {
        idolList.style.visibility = "visible";
    });
});

idolLists.forEach(idolList => {
    idolList.addEventListener("click", () => {
        selectedIdol = idolList.textContent;
        console.log("Selected Idol:", selectedIdol);
        let newh1 = document.createElement("h1");
        newh1.className = "selected-bias";
        newh1.textContent = "Your selected bias is: " + selectedIdol;
        document.getElementById("selected-bias-container").appendChild(newh1);
    });
});

