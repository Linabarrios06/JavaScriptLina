function mostar(){

opc=parseInt(prompt("Ingresa: /n opcion 1: Area rectangulo /n opcion 2: Area cuadrado /n opcion 3: Area triangulo /n Opcion salir"))
switch(op){
    case 1 :
        b=parseInt(prompt("Ingresa la base"));
        a=parseInt(prompt("Ingresa la altura"));
        var resultado=b*a;
           if (b!=0 && a!=0){
            document.write("El resultado del area del rectangulo es:")
           } else{
            document.write("Verifica tus datos de base y altura")
           }
           break;
    case 2 :
        b=parseInt(prompt("Ingresa la medida de los lados del cuadrado"));
        var resultado=b**2
        document.write("El resultado del area del cuadrado es:")
        break
    case 3 :
        b=parseInt(prompt("Ingresa la base"));
        a=parseInt(prompt("Ingresa la altura"));
        var resultado=b*a/2
        document.write("El resultado del area del triangulo es:")
        break
    case 4 :
        break 
}

}
