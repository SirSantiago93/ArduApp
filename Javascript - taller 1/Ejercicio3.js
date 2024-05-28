 


 const salario_minimo = 737717
 var nombre, cedula
 var dias_laborados
 var salario_basico, sueldo_devengado, aux_transporte, ventas, comisiones, prestamos, salario_neto

 nombre = prompt("Nombre:")
 cedula = prompt("Cédula:")
 dias_laborados = parseInt(prompt("Digite el número de dias que laboro:"))

 if (dias_laborados > 0 && dias_laborados <= 30){
    salario_basico = parseFloat(prompt("Digite el salario básico:"))
    sueldo_devengado = salario_basico * dias_laborados/30
    if (salario_basico <= (salario_minimo*2)){
        aux_transporte = 83140 * dias_laborados/30
    } else{
        aux_transporte = 0
    }
    ventas = parseFloat(prompt("Digite el valor de las ventas realizadas:"))
    comisiones = ventas * 0.02
    prestamos = parseFloat(prompt("Digite el valor de los préstamos:"))
    salario_neto = sueldo_devengado + comisiones + aux_transporte - prestamos

    document.write("Nombre empleado: " + nombre + "<br>")
    document.write("Cédula empleado: " + cedula + "<br>")
    document.write("Sueldo devengado: $" + sueldo_devengado.toFixed(2) + "<br>")
    document.write("Auxilio de transporte: $" + aux_transporte.toFixed(2) + "<br>")
    document.write("Comision de ventas: $" + comisiones.toFixed(2) + "<br>")
    document.write("Préstamos: $" + prestamos + "<br>")
    document.write("Salario neto: $" + salario_neto.toFixed(2) + "<br>")

 } else {
    document.write("Los dias laborados deben estar entre 1 y 30" + "<br>")
 }