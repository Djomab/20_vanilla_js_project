const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['a', 'a', 'c', 'a', 'c']; //les reponses
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (i = 1; i <= 5; i++)
    {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verifFunc(tableauResultats);
    tableauResultats = [];
});

// Vérifier les resultats
function verifFunc(tabResultat) {
    for(i = 0; i < 6; i++) {
        if(tabResultat[i] === reponses[i])
        {
            verifTableau.push(true);
        }
        else
        {
            verifTableau.push(false);
        }
    }
    afficherResultat(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

// Afficher le resultat en fonction
// de nombre de fautes
function afficherResultat(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
            aideResultat.innerText = "";
            noteResultat.innerText = "5/5";
            break;
        case 1:
            titreResultat.innerText = "✨ Vous y êtes presque ! ✨";
            aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "4/5";
            break;
        case 2:
            titreResultat.innerText = "✨ Encore un effort... 👀";
            aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "3/5";
            break;
        case 3:
            titreResultat.innerText = "✨ Il reste encore quelques erreurs. 😭";
            aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "2/5";
            break;
        case 4:
            titreResultat.innerText = "😭 Peut mieux faire ! 😭";
            aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "1/5";
            break;
        case 5:
            titreResultat.innerText = "👎 Peut mieux faire ! 👎";
            aideResultat.innerText = "Retentez une autre reponse dans la case rouge, puis re-validez !";
            noteResultat.innerText = "0/5";
            break;
        default:
            console.log("Oups, cas inattendu.");;
    }
}

function couleursFonction(param) {
    for (let i = 0; i < param.length - 1; i++) {
        if (param[i] === true) {
            toutesLesQuestions[i].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[i].style.background = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[i].classList.remove('echec');
            }, 500)
        }
        
    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = 'white';
    })
})