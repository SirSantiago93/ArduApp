// console.log()
// alert()
// document.write()

var intereses = 2/100
var meses = 5*12

var v_presente = parseFloat(prompt("Digite el saldo a depositar:"))

var v_futuro = v_presente * (1+intereses)**(meses)
v_futuro = v_futuro.toFixed(2)

document.write("Valor consignado: $" + v_presente + "<br>")
document.write("\nValor futuro en 5 años: $" + v_futuro)