/*
//exercice 1

var jeunes=0;
var adultes=0;
var vieux=0;
var personnes;

do {
    personnes= prompt("entrez votre âge");

if (personnes<20){
    
    jeunes++;
    console.log(jeunes);
}
else if ((personnes>=20) && (personnes<=40)){

    adultes++;
    console.log(adultes);
}
else if ((personnes>40) && (personnes<=100)){

    vieux++;
    console.log(vieux);
}
}
while(personnes<100);
alert("Il y a"+" "+jeunes+" "+"jeunes\n"+"Il y a"+" "+adultes+" "+"adultes\n"+"Il y a"+" "+vieux+" "+"vieux\n"+"dont"+" "+"1"+" "+"centenaire");


//exercice 2

n=parseInt (window.prompt("Entrez un nombre"));

function tablemultiplication(nombre){
    for(let i=1;i<=15;i++){
        console.log(nombre+"*"+i+"="+nombre*i);
        document.write(nombre+"*"+i+"="+nombre*i+"<br>");
    }
}
tablemultiplication(n);

*/
//exercice 3

var tab = ["Audrey","Aurélien","Flavien","jérémy","Laurent","Mélik","Nouara","Salem","Samuel","Stéphane"];
{
    var saisi=window.prompt("saisissez un prénom Audrey,Aurélien,Flavien,jérémy,Laurent,Mélik,Nouara,Salem,Samuel,Stéphane");
    var rang=tab.indexOf(saisi);

    if(rang>=0)
{
    var sup= tab.splice(rang,1);
    console.log("rang"+sup);

    var nb=tab.push("");

    console.log(tab);
}
else{
alert("erreur");
}
}


























