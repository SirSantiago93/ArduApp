
var edad = 0
var sexo = 1

var menor_edad = 9999999
var n_mujeres = 0
var n_hombres = 0
var promedio_hombres = 0
var promedio_mujeres = 0

do{
    edad = parseInt(prompt("Digite la edad de la persona:"))
    if (edad >= 18){
        if (edad < menor_edad){
            menor_edad = edad
        }
        sexo = parseInt(prompt("Digite [1] si es mujer y [2] si es hombre:"))
        switch (sexo){
            case 1:
                n_mujeres += 1
                promedio_mujeres += edad
                break
            case 2:
                n_hombres += 1
                promedio_hombres += edad
                break;
            default:
                alert("La opción digitada no exite")
        }
    } else if (edad != 0){
        alert("No se permiten menores de edad en la fiesta")
    }
} while (edad != 0)

if ((n_hombres + n_mujeres) > 0){
    document.write("Edad persona más joven: " + menor_edad + "<br>")
    document.write("N° de personas que asistieron: " + (n_mujeres+n_hombres) + "<br>")
    document.write("N° de hombres que asistieron: " + n_hombres + "<br>")
    document.write("N° de mujeres que asistieron: " + n_mujeres + "<br>")

    if (n_mujeres > 0){
        promedio_mujeres = promedio_mujeres/n_mujeres
        document.write("Promedio de edades [Mujeres]: " + (promedio_mujeres + "<br>"))
    } else{
        document.write("Promedio de edades [Mujeres]: 0" + "<br>")
    }

    if (n_hombres > 0){
        promedio_hombres = promedio_hombres/n_hombres
        document.write("Promedio de edades [Hombres]: " + (promedio_hombres + "<br>"))
    } else{
        document.write("Promedio de edades [Hombres]: 0" + "<br>")
    }

} else{
    document.write("No se registro ningún asistente")
}