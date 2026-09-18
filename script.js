const knapp = document.querySelector("#tipsKnapp");
const extraTips = document.querySelector("#extraTips");
function visaTips() {
    extraTips.textContent = "Träna mycket på närspel och puttning för att sänka dina scorer.";
}
knapp.addEventListener("click", visaTips);