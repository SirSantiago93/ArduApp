
var n_personas = 0
var arreglo = []

function registrarPersona(){

    if (n_personas>=6){
        alert("Solo se pueden registrar 6 personas")
        return
    }

    var nombre = document.getElementById("nombre").value
    var cedula = document.getElementById("cedula").value
    var f_nacimiento = document.getElementById("f_nacimiento").value
    var correo = document.getElementById("correo").value
    var c_residencia = document.getElementById("c_residencia").value
    var c_origen = document.getElementById("c_origen").value

    var artista = document.getElementById("artista").value
    var titulo1 = document.getElementById("titulo1").value
    var titulo2 = document.getElementById("titulo2").value
    var titulo3 = document.getElementById("titulo3").value

    if (nombre.replaceAll(" ","") == "" || cedula.replaceAll(" ","") == "" || f_nacimiento.replaceAll(" ","") == ""){
        alert("Diligencie todos los campos")
        return
    }

    if (correo.replaceAll(" ","") == "" || c_residencia.replaceAll(" ","") == "" || c_origen.replaceAll(" ","") == ""){
        alert("Diligencie todos los campos")
        return
    }

    if (artista.replaceAll(" ","") == "" || titulo1.replaceAll(" ","") == "" || titulo2.replaceAll(" ","") == ""){
        alert("Diligencie todos los campos")
        return
    }

    if (titulo3.replaceAll(" ","") == ""){
        alert("Diligencie todos los campos")
        return
    }

    arreglo.push([nombre, cedula, f_nacimiento, correo, c_residencia, c_origen, [artista, titulo1, titulo2, titulo3]])
    n_personas++

    var resultado = "Personas registradas = " + n_personas
    document.getElementById("n_personas").innerHTML = resultado

}

function buscarPersona(){

    var pos = parseInt(document.getElementById("pos").value)

    if (isNaN(pos) || pos<0 || pos>5){
        document.getElementById("datos").innerHTML = ""
        alert("La posición debe ser un número entre 0-5")
        return
    }

    if (arreglo[pos] == undefined){
        document.getElementById("datos").innerHTML = ""
        alert("La posición se encuentra vacia")
        return
    }

    console.log(arreglo)

    var resultado = "<br>Nombre = " + arreglo[pos][0] + "<br>"
    resultado += ("Cédula = " + arreglo[pos][1] + "<br>")
    resultado += ("Fecha de nacimiento = " + arreglo[pos][2] + "<br>")
    resultado += ("Correo electrónico = " + arreglo[pos][3] + "<br>")
    resultado += ("Ciudad de residencia = " + arreglo[pos][4] + "<br>")
    resultado += ("Ciudad de origen = " + arreglo[pos][5] + "<br><br>")
    resultado += ("Artista = " + arreglo[pos][6][0] + "<br>")
    resultado += ("Título 1 = " + arreglo[pos][6][1] + "<br>")
    resultado += ("Título 2 = " + arreglo[pos][6][2] + "<br>")
    resultado += ("Título 3 = " + arreglo[pos][6][3] + "<br>")
    document.getElementById("datos").innerHTML = resultado

}