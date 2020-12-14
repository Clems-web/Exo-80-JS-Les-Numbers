/* exo 1 */
let pIsInteger = document.getElementById("is-integer");
let numberInteger = parseFloat(pIsInteger.innerHTML);

if (Number.isInteger(numberInteger)) {
    pIsInteger.innerHTML = numberInteger + " est un nombre entier";
}

else {
    pIsInteger.innerHTML = numberInteger + " n'est pas un nombre entier";
}
/* exo 2 */
let pNan = document.getElementById("is-nan");
let pNanTexte = pNan.innerHTML;

if (Number.isNaN(pNanTexte)) {
    pNan.innerHTML = pNanTexte + " est un nombre";
}

else {
    pNan.innerHTML = pNanTexte + " est NaN";
}
/* exo 3 */
let pParse = document.getElementById("parse-float");
let number = parseFloat(pParse.innerHTML);
pParse.innerHTML = (number*23) + " % de la population blablabla";

/* exo 4 */
let paraParseInt = document.getElementById("parse-int");
let number2 = parseInt(paraParseInt.innerHTML);
paraParseInt.innerHTML = (number2 * 23) + "px";

/* exo 5 */
let paraFixed = document.getElementById("to-fixed");
let numberFixed = parseFloat(paraFixed.innerHTML);
paraFixed.innerHTML = numberFixed.toFixed(2);
