
let isWhite = true;


function alterb() {

    if (isWhite) {

        //BUTTON COLOR
        let btncolor = document.getElementById("alterbtn")
        btncolor.style.backgroundColor = "#2c2827"


        // // PAPER BACKGROUND
        document.body.style.backgroundColor = '#57675c'

        let popup = document.getElementById("popup");
        popup.style.display = "block";


        // LEFT SIDE
        var altpic = document.getElementById('altpic');
        altpic.src = 'AlterPic.jpg';

        let lside = document.getElementById("lside");
        lside.style.backgroundColor = "#2c2827";

        let icon = document.getElementsByClassName("icon");
        for (i = 0; i < icon.length; i++) {
            icon[i].style.color = "#610a10";
        }

        let bluebar = document.getElementsByClassName("bluebar");
        let whitebar = document.getElementsByClassName("whitebar");
        let skillbar = document.getElementsByClassName("skillbar");
        for (i = 0; i < bluebar.length; i++) {
            bluebar[i].style.backgroundColor = "#610a10";
        }

        // RIGHT SIDE
        let rside = document.getElementById("rside");
        rside.style.backgroundColor = "#c9c5c2";

        let icontxt = document.getElementsByClassName("icontxt");
        for (i = 0; i < icontxt.length; i++) {
            icontxt[i].style.color = "white";
        }

        let iconstar = document.getElementsByClassName("iconstar");
        for (i = 0; i < iconstar.length; i++) {
            iconstar[i].style.color = "gold";
        }
        isWhite = false;

    }
    else {

        // BUTTON COLOR
        let btncolor = document.getElementById("alterbtn")
        btncolor.style.backgroundColor = ""

        // // PAPER BACKGROUND
        document.body.style.backgroundColor = ''

        popup.style.display = "none";

        // LEFT SIDE
        var altpic = document.getElementById('altpic');
        altpic.src = 'CasseyResumePic.jpg';

        lside.style.backgroundColor = "";

        let icon = document.getElementsByClassName("icon");
        for (i = 0; i < icon.length; i++) {
            icon[i].style.color = "";
        }

        let bluebar = document.getElementsByClassName("bluebar");
        let whitebar = document.getElementsByClassName("whitebar");
        let skillbar = document.getElementsByClassName("skillbar");
        for (i = 0; i < bluebar.length; i++) {
            bluebar[i].style.backgroundColor = "";
        }

        // RIGHT SIDE
        let rside = document.getElementById("rside");
        rside.style.backgroundColor = "";

        let icontxt = document.getElementsByClassName("icontxt");
        for (i = 0; i < icontxt.length; i++) {
            icontxt[i].style.color = "";
        }

        let iconstar = document.getElementsByClassName("iconstar");
        for (i = 0; i < iconstar.length; i++) {
            iconstar[i].style.color = "";
        }

        isWhite = true;
    }


}