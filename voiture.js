var voiture = document.getElementsByClassName('ferrari-arriere');

document.querySelectorAll(".ferrari-arriere").forEach(voiture => {
    voiture.addEventListener("click", () => {
        voiture.classList.toggle("ferrari-arriere-active");
    });

});

var etoileg = document.getElementsByClassName('etoile-coupe-gauche');
var charles = document.getElementsByClassName('charles');
var ferraricote = document.getElementsByClassName('ferrari-cote')[0];
var question = document.getElementsByClassName('question')[0];

var reponses = document.getElementsByClassName('reponse');

// Parcourir les réponses et ajouter un écouteur de clic à chacune
for (var i = 0; i < reponses.length; i++) {
    reponses[i].addEventListener("click", function () {
        var selectedAnswer = this.getAttribute("data-reponse");

        // Vérifier si la réponse sélectionnée est correcte ou incorrecte
        if (selectedAnswer === "bonne") {
            this.classList.add("reponse-correcte");
        } else {
            this.classList.add("reponse-incorrecte");
        }
    });
}

document.querySelectorAll(".etoile-coupe-gauche").forEach((etoileg, index) => {
    etoileg.addEventListener("click", () => {
        etoileg.classList.toggle("etoile-coupe-gauche-active");
        for (var i = 0; i < charles.length; i++) {
            charles[i].classList.toggle("charles-active");
            setTimeout((index) => {
                charles[index].classList.remove("charles-active");
                ferraricote.classList.add("ferrari-cote-active");
                question.classList.add("question-active");
            }, 2000, i);
        }
    });
});




