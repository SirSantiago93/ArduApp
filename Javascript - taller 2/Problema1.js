 
var edades = []
var n_personas = 0
var menores_edad = 0
var mayores_edad = 0
var adultos_mayores = 0
var menor_edad = 121
var mayor_edad = 0
var suma = 0

function registrarPersona(){

    if (n_personas<10){

        let edad = parseInt(document.getElementById("edades").value)

        if (isNaN(edad)){
            alert("La edad debe ser un numero")
            return
        }

        if (edad < 1 || edad > 120){
            alert("La edad debe estar entre 1-120")
            return
        }

        edades.push(edad)
        n_personas++
        var resultado = "Personas registradas = " + n_personas
        document.getElementById("n_personas").innerHTML = resultado

        if (edad < 18){
            menores_edad++
        } else{
            mayores_edad++
            if (edad >= 60){
                adultos_mayores++
            }
        }

        if (edad < menor_edad){
            menor_edad = edad
        }

        if (edad > mayor_edad){
            mayor_edad = edad
        }

        suma += edad

    } else{
        alert("Solo se pueden registrar 10 personas")
    }

}

function mostrarDatos(){

    if (n_personas != 10){
        alert("Debe registrar 10 personas")
        return
    }

    console.log(edades)

    let resultado = "<h3>Datos</h3>"
    resultado += "Menores de edad = " + menores_edad + "<br>"
    resultado += ("Mayores de edad = " + mayores_edad + "<br>")
    resultado += ("Adultos mayores = " + adultos_mayores + "<br>")
    resultado += ("Menor edad = " + menor_edad + "<br>")
    resultado += ("Mayor edad = " + mayor_edad + "<br>")
    resultado += ("Promedio = " + suma/10 + "<br>")

    document.getElementById("datos").innerHTML = resultado
}