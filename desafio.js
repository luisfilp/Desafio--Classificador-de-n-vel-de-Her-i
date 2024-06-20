let nome = "luis";
let xpHeroi = 10000;

switch (true){
case xpHeroi <= 1000:
console.log("O Herói de nome " + nome + " está no nível de Ferro");
break;

case xpHeroi >= 1001 && xpHeroi <= 2000 :
console.log("O Herói de nome " + nome +  " está no nível de Bronze");
break;

case xpHeroi >= 2001 && xpHeroi <= 5000:
console.log("O Herói de nome " + nome + " está no nível de Prata");
break;

case xpHeroi >= 5001 && xpHeroi <= 7000:
console.log("O Herói de nome " + nome + " está no nível de Ouro");
break;

case xpHeroi >= 7001 && xpHeroi <= 8000:
console.log("O Herói de nome " + nome + " está no nível de Platina");
break;

case xpHeroi >= 8001 && xpHeroi <= 9000:
console.log("O Herói de nome " + nome + " está no nível de Ascendente");
break;

case xpHeroi >= 9001 && xpHeroi <=10000:
console.log("O Herói de nome " + nome + " está no nível de Imortal");
break;

case xpHeroi >= 10001:
console.log("O Herói de nome " + nome + " está no nível de Radiante");
break;
}