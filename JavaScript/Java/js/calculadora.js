function calcular() {
    var operacion = parseInt(prompt("Elige un numero 1.Suma ,2.Resta ,3.Multiplicacion ,4.Division ,5.¿Cual es Mayor?"))
    switch (operacion) {
         case 1: //suma
            a = parseFloat(prompt("Digita un numero:"))
            b = parseFloat(prompt("Digita otro numero:"))
            resultado = a + b;
            document.write("El resultado es: "+resultado)
            break;
        case 2: //Resta
            a = parseFloat(prompt("Digita un numero:"))
            b = parseFloat(prompt("Digita otro numero:"))
            document.write("El resultado es: "+resultado)
            resultado = a - b;
            break;
        case 3: //Multiplicacion
            a = parseFloat(prompt("Digita un numero:"))
            b = parseFloat(prompt("Digita otro numero:"))
            document.write("El resultado es: "+resultado)
            resultado = a * b;
            break;
        case 4: //Dision
            a = parseFloat(prompt("Digita un numero:"))
            b = parseFloat(prompt("Digita otro numero:"))
            resultado = a / b;
            document.write("El resultado es: "+resultado)
            break;
        case 5: //
            a = parseFloat(prompt("Digita un numero:"))
            b = parseFloat(prompt("Digita otro numero:"))
            var resultado = a / b;
            if (a > b){
                document.write(+a+"  ES MAYOR QUE "+b)
            }else{
                document.write(+b+"  ES MAYOR QUE "+a)
            }
            break;
        default:
            resultado = "Operación no válida Lo siento :(";
            break;
    }
}