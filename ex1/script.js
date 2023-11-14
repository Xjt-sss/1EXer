let Numero1 = prompt("Dijite o primeiro numero")
let Numero2 = prompt("Dijite o segundo numero")
Numero1 = Number(Numero1)
Numero2 = Number(Numero2)

const sum = Numero1 + Numero2
const sub = Numero1 - Numero2
const multi = Numero1 * Numero2
const div = Numero1 / Numero2
const restDiv = Numero1 % Numero2

alert("O resultado da soma é " + sum)
alert("O resulrado da subitração é " + sub)
alert("O resultado da multuplicação é " + multi)
alert("O resultado da divisão é " + div)
alert("O resto da divisão é " + restDiv)



var num = sum;
 
if (num % 2 === 0) {
  alert("A soma é par");
} else {
  alert("A soma é ímpar");
}