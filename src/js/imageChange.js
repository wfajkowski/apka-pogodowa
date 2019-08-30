

const now = new Date();
const hour = now.getHours();

const header = document.querySelector('header');


const afternoon = [];

afternoon[0] = "C:Users/Emil Małańczak/Desktop/KURS/apka-pogodowa/src/img/afternoon0";
afternoon[1] = "C:Users/Emil Małańczak/Desktop/KURS/apka-pogodowa/src/img/afternoon1";
afternoon[2] = "C:Users/Emil Małańczak/Desktop/KURS/apka-pogodowa/src/img/afternoon2";
afternoon[3] = "C:Users/Emil Małańczak/Desktop/KURS/apka-pogodowa/src/img/afternoon3";
afternoon[4] = "C:Users/Emil Małańczak/Desktop/KURS/apka-pogodowa/src/img/afternoon4";
afternoon[5] = "C:Users/Emil Małańczak/Desktop/KURS/apka-pogodowa/src/img/afternoon5";

const dsa = [];

export function imageChange() {
    var i = Math.floor(Math.random() * 5) +1;
    if(hour < 17){
        header.style.background ="url("+afternoon[i]+")";
    } else {
        header.style.background ="url("+afternoon[i]+")";
    }
}
console.log(imageChange())
// function setAfternoonBackground() {
//     header.style.backgroundImage ="url("+afternoon[i]+")";
// }
// function setDayBackground(){
//     header.style.backgroundImage ="url("+afternoon[i]+")";
// }
