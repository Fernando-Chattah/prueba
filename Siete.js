function mostrar() {

var contador=0;
var acumulador=0;
var promedio;
var sexobaja;
var maximo=0;
var minimo=10;
var cantidadnotas;
const cantNotaMax = 2
    
    for (cantidadnotas = 0; cantidadnotas < cantNotaMax; cantidadnotas++) {
        let nota;
        let sexo;

        nota = prompt("Ingrese su nota: ");
        nota = parseInt(nota);
                          
        while(isNaN(nota) || (nota < 0 || nota > 10)) {
            nota = prompt("Ingrese su nota: ");
            nota = parseInt(nota);
        }
            
        sexo = prompt("Ingrese el sexo: f o m");

        while(sexo != "f" && sexo != "m") {
            sexo = prompt("El sexo es invalido, porfavor ingrese f o m");
        }
    
        acumulador = acumulador + nota;
    
        if (nota > maximo) {
            maximo = nota;
        }
    
        if (nota < minimo) {
            minimo=nota;
            sexobaja=sexo;
        }
                            
        if (sexo == "m" && nota >= 6) {
            contador++;
        }
        
        function promedio (acumulador, cantidadnotas) {
            promedio = acumulador / cantidadnotas;
            return promedio;
        }
        
        function cantNotasM() {
            return contador;
        } 
        
    } 

    alert("El promedio es : " + promedio(acumulador, cantidadnotas));
    alert("La nota minima es " + minimo + " y el sexo " + sexobaja);
    alert("La cantidad de varones con nota mayor o igual a 6 son " + cantNotasM());
}
