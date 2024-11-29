function ModifText(texte) {
    var divs = document.getElementsByName("maDiv");


    setTimeout(function () {
        alert("je vais modifier les divs");

        for (var i = 0; i < divs.length; i++) {
            divs[i].innerHTML = texte;
        }
    }, 2000);
}
ModifText("Hello");
