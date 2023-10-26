document.getElementById("formulaire").addEventListener("submit",function(e){
    e.preventdefault();

    var nom=document.getElementById("nom");
    var prenom=document.getElementById("prénom");
    var sexef=document.getElementById("sexef");
    var sexem=document.getElementById("sexem");
    var date=document.getElementById("date");
    var cp=document.getElementById("cp");
    var adresse=document.getElementById("adresse");
    var ville=document.getElementById("ville");
    var email=document.getElementById("email");
    var sujet=document.getElementById("sujet");
    var question=document.getElementById("question");
    var checkbox=document.getElementById("checkbox");

    alert('Formulaire envoyé !');

});

var Erreur1;
var Erreur2;
var Erreur3;
var Erreur4;
var Erreur5;
var Erreur6;
var Erreur7;
var Erreur8;
var Erreur9;
var Erreur10;
var Erreur11;

if (!nom.value) {
    Erreur1="veuillez entrer votre nom";
}
if(!prénom.value) {
    Erreur2="veuillez entrer votre prénom";
}
if(!sexef.checked && !sexem.checked) {
    Erreur3="veuillez entrer votre sexe";
}
if(!date.value) {
    Erreur4="veuillez entrer votre date de naissance";
}
if(!cp.value) {
    Erreur5="veuillez entrer votre code postal";
}
if(!adresse.value) {
    Erreur6="veuillez entrer votre adresse";
}
if(!ville.value) {
    Erreur7="veuillez entrer votre ville";
}
if(!email.value) {
    Erreur8="veuillez entrer votre email";
}
if(!sujet.value) {
    Erreur9="veuillez entrer votre sujet";
}
if(!question.value) {
    Erreur10="veuillez entrer votre question";
}
if(!checkbox.cheked) {
    Erreur11="veuillez accepter";
}
if (!Erreur1 && Erreur2 && Erreur3 && Erreur4 && Erreur5 && Erreur6 && Erreur7 && Erreur8 && Erreur9 && Erreur10 && Erreur11) {
    alert('Formulaire envoyé !');
}


