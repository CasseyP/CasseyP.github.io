
function showDetails(menuId) {
    document.getElementById("homePage").style.display = "none";
    document.querySelectorAll(".content-card").forEach(div => div.style.display = "none");
    document.getElementById(menuId).style.display = "block";
}
function showHome() {
    document.getElementById("homePage").style.display = "block";
    document.querySelectorAll(".content-card").forEach(div => div.style.display = "none");
}

