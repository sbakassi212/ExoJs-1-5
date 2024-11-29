var MaDiv = document.getElementById("MaDiv");


function ModifText(texte) {
  
    setTimeout(function() {
        alert("je vais modifier la div");
        MaDiv.innerHTML = texte;
    }, 2000); 
}
ModifText('Hello');