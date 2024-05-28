
const precio_kilo = 4200
var descuento = 0

var nkilos = parseFloat(prompt("Digite el número de kilos:"))

var precio = nkilos * precio_kilo

if (nkilos>2 && nkilos <= 5){
    descuento = precio*0.1
} else if(nkilos > 5 && nkilos <= 10){
    descuento = precio*0.15
} else if(nkilos > 10){
    descuento = precio*0.2
}

var precio_final = precio - descuento

document.write("La compra de " + nkilos + " kilos tiene un valor de $" + precio + "<br>")
document.write("La compra tiene un descuento por valor de $" + descuento + "<br>")
document.write("El valor a pagar es de $" + precio_final)
