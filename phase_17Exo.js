document.getElementById("formulaire").addEventListener("submit", function (e) {
    e.preventDefault();

    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var sexef = document.getElementById("sexef");
    var sexem = document.getElementById("sexem");
    var date = document.getElementById("date");
    var cp = document.getElementById("cp");
    var adresse = document.getElementById("adresse");
    var ville = document.getElementById("ville");
    var email = document.getElementById("email");
    var sujet = document.getElementById("sujet");
    var question = document.getElementById("question");
    var check = document.getElementById("check");

    var Erreur1 = "";
    var Erreur2 = "";
    var Erreur3 = "";
    var Erreur4 = "";
    var Erreur5 = "";
    var Erreur6 = "";
    var Erreur7 = "";
    var Erreur8 = "";
    var Erreur9 = "";
    var Erreur10 = "";
    var Erreur11 = "";

    if (!check.checked) {
        Erreur11 = "Veuillez accepter les conditions.";
    }

    if (!question.value) {
        Erreur10 = "Veuillez entrer votre question.";
    }

    if (sujet.value === "") {
        Erreur9 = "Veuillez sélectionner un sujet.";
    }

    if (!email.value) {
        Erreur8 = "Veuillez entrer votre email.";
    }

    if (!ville.value) {
        Erreur7 = "Veuillez entrer votre ville.";
    }

    if (!adresse.value) {
        Erreur6 = "Veuillez entrer votre adresse.";
    }

    if (!cp.value) {
        Erreur5 = "Veuillez entrer votre code postal.";
    }

    if (!date.value) {
        Erreur4 = "Veuillez entrer votre date de naissance.";
    }

    if (!sexef.checked && !sexem.checked) {
        Erreur3 = "Veuillez sélectionner votre sexe.";
    }

    if (!prenom.value) {
        Erreur2 = "Veuillez entrer votre prénom.";
    }

    if (!nom.value) {
        Erreur1 = "Veuillez entrer votre nom.";
    }

    document.getElementById("erreur1").textContent = Erreur1;
    document.getElementById("erreur2").textContent = Erreur2;
    document.getElementById("erreur3").textContent = Erreur3;
    document.getElementById("erreur4").textContent = Erreur4;
    document.getElementById("erreur5").textContent = Erreur5;
    document.getElementById("erreur6").textContent = Erreur6;
    document.getElementById("erreur7").textContent = Erreur7;
    document.getElementById("erreur8").textContent = Erreur8;
    document.getElementById("erreur9").textContent = Erreur9;
    document.getElementById("erreur10").textContent = Erreur10;
    document.getElementById("erreur11").textContent = Erreur11;

    if (!Erreur1 && !Erreur2 && !Erreur3 && !Erreur4 && !Erreur5 && !Erreur6 && !Erreur7 && !Erreur8 && !Erreur9 && !Erreur10 && !Erreur11) {
        alert('Formulaire envoyé !');
    }
});

