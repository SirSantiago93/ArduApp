
var arreglo1 = []
var arreglo2 = []
var ready1 = false
var ready2 = false

function verificarArreglo1(){

    arreglo1 = document.getElementById("arreglo1").value.split(" ")
    
    if (arreglo1.length<=0 || arreglo1.length > 5){
        alert("El arreglo 1 debe tener entre 1-5 numeros")
        return
    }

    for(var i=0; i<arreglo1.length; i++){
        var n = parseInt(arreglo1[i])
        arreglo1[i] = n
    }

    for(var i=0; i<arreglo1.length; i++){
        if (isNaN(arreglo1[i])){
            alert("El arreglo 1 debe tener entre 1-5 numeros")
            return
        }
    }

    var arreglo_ordenado = arreglo1.slice()
    arreglo_ordenado.sort((a,b) => a-b)

    for(var i=0; i<arreglo1.length; i++){
        if (arreglo1[i] != arreglo_ordenado[i]){
            alert("El arreglo 1 debe estar ordenado")
            return
        }
    }

    ready1 = true
}

function verificarArreglo2(){
    
    arreglo2 = document.getElementById("arreglo2").value.split(" ")
    
    if (arreglo2.length > 5){
        alert("El arreglo 2 debe tener entre 1-5 numeros")
        return
    } 

    for(var i=0; i<arreglo2.length; i++){
        var n = parseInt(arreglo2[i])
        arreglo2[i] = n
    }

    for(var i=0; i<arreglo2.length; i++){
        if (isNaN(arreglo2[i])){
            alert("El arreglo 2 debe tener entre 1-5 numeros")
            return
        }
    }

    var arreglo_ordenado = arreglo2.slice()
    arreglo_ordenado.sort((a,b) => a-b)

    for(var i=0; i<arreglo2.length; i++){
        if (arreglo2[i] != arreglo_ordenado[i]){
            alert("El arreglo 2 debe estar ordenado")
            return
        }
    }

    ready2 = true
}

function generarLista(){
    ready1 = false
    ready2 = false
    verificarArreglo1()
    verificarArreglo2()
    if (ready1 && ready2){
        var lista = arreglo1.concat(arreglo2)
        lista.sort((a,b) => a-b)
        var resultado = "Lista ordenada = "
        for(var i=0; i<lista.length; i++){
            resultado += (lista[i] + " ")
        }
        document.getElementById("lista").innerHTML = resultado
    }
}