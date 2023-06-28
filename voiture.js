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

// Récupérer les éléments de réponse
const reponses = document.querySelectorAll('.reponse');

// Ajouter un écouteur d'événement à chaque réponse
reponses.forEach(reponse => {
    reponse.addEventListener('click', function () {
        const reponseSelectionnee = this;
        const estBonneReponse = reponseSelectionnee.classList.contains('bonne');

        // Modifier les classes en fonction de la réponse sélectionnée
        reponses.forEach(reponse => {
            if (reponse === reponseSelectionnee) {
                if (estBonneReponse) {
                    reponse.classList.add('gg-question');
                    question.classList.remove("question-active");
                } else {
                    reponse.classList.add('fausse');
                }
            }
        });

        // Afficher un message en fonction de la réponse sélectionnée
        const pop = document.getElementById('pop');
        if (estBonneReponse) {
            pop.innerText = 'Bonne réponse !';
        } else {
            pop.innerText = 'Mauvaise réponse !';
        }
    });
});