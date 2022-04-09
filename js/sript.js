const text = ["Антон,", "у тебя не будет ли,", "тысяча ,", "рублей?"];
let letters = ["\nНУ?", "\nЕсть?", "\nАло?"]

let line = 0;
let count = 0;
let result = "";
let min = 100;
let max = 250;
let iterator = 0;

function typeLine() {
  if (line >= text.length){
    if (iterator++ > 20){
      letters = ["\nНУ, АНТОН ДАВАЙ ДЕНЬГИ?", "\nГОНИ БАБЛО ЧЕРТЯГА?", "\nЭЭЭЭ ДЕНЬГИ ДАЙ?"];
    }
    min = 300;
    max = 500;
    document.querySelector("pre").innerHTML = result + letters[getRandomInt(0,3)];
  } else {
    result += text[line][count++];
    if (count >= text[line].length){
      result += "\n";
      line++;
      count = 0;
    }
    document.querySelector("pre").innerHTML = result + "_ ";
  }
  setTimeout(typeLine, getRandomInt(min,max));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Start
typeLine();