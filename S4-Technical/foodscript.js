function showDetails(menuId) {
    let homePage = document.getElementById("homePage");
    let contentCard = document.getElementById(menuId);

    homePage.classList.remove("show"); 

    setTimeout(() => {
        homePage.style.display = "none";
        contentCard.style.display = "block"; 
        setTimeout(() => {
            contentCard.classList.add("show"); 
        }, 50);
    }, 500);
}

function showHome() {
    let contentCards = document.querySelectorAll(".content-card");

    contentCards.forEach(card => {
        if (card.style.display === "block") {
            card.classList.remove("show");

            setTimeout(() => {
                card.style.display = "none"; 
                let homePage = document.getElementById("homePage");
                homePage.style.display = "block";
                setTimeout(() => {
                    homePage.classList.add("show");
                }, 50);
            }, 500);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homePage").classList.add("show");

    let menuCards = document.querySelectorAll(".menu-card");
    menuCards.forEach(card => {
        setTimeout(() => {
            card.classList.add("show");
        }, Math.random() * 300);
    });
});
