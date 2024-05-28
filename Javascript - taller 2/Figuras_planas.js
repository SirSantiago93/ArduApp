
function triangulo(){
    let a = parseInt(document.getElementById("a_triangulo").value)
    let b = parseInt(document.getElementById("b_triangulo").value)
    let c = parseInt(document.getElementById("c_triangulo").value)
    let h = parseInt(document.getElementById("h_triangulo").value)

    let perimetro = a + b + c
    let area = (b*h)/2

    let resultado = "<br> Perímetro: " + perimetro + "<br>"
    resultado += ("Área: " + area + "<br>")

    document.getElementById("resultados_triangulo").innerHTML = resultado
}

function rectangulo(){
    let a = parseInt(document.getElementById("a_rectangulo").value)
    let b = parseInt(document.getElementById("b_rectangulo").value)

    let perimetro = 2 * (a+b)
    let area = a*b

    let resultado = "<br> Perímetro: " + perimetro + "<br>"
    resultado += ("Área: " + area + "<br>")

    document.getElementById("resultados_rectangulo").innerHTML = resultado
}

function cuadrado(){
    let a = parseInt(document.getElementById("a_cuadrado").value)

    let perimetro = 4*a
    let area = a*a

    let resultado = "<br> Perímetro: " + perimetro + "<br>"
    resultado += ("Área: " + area + "<br>")

    document.getElementById("resultados_cuadrado").innerHTML = resultado
}

function circulo(){
    let r = parseInt(document.getElementById("r_circulo").value)

    let perimetro = 2*Math.PI*r
    let area = Math.PI*r*r

    let resultado = "<br> Perímetro: " + perimetro.toFixed(2) + "<br>"
    resultado += ("Área: " + area.toFixed(2) + "<br>")

    document.getElementById("resultados_circulo").innerHTML = resultado
}