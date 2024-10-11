//Hola
/*
comentario de varias lines

*/

// alert("HOLA soy un arlet")

//variables

var nombre="SOSA LESLIE";

// recomendada
let nombre21="nombre2";

//variables
var nombre="LESLIE";
let nombre2="JOSELIN";
let edad=20;
let estatura=1.80;
let logico=true;

//mostrar en pantalla console
console.log("Hola estoy en la consola");
console.log("Hola tengo"+edad+"anios");

//mostrar en pantalla writw
document.write("Hola estoy en la pantalla <br>");
document.write("<h2>Hola tengo "+edad+" anios<h2>");

//mostrar en pantalla getElementById
let datos=document.getElementById("informacion");
datos.innerHTML="Hola este es el contenido de innerhtml"
datos.innerHTML+="<hr><h3>Hola este es el contenido de innerhtml</h3>"
datos.innerHTML+="<hr><h3>Mido: "+estatura+" metros </h3>"
datos.innerHTML += `
    <br>
    <hr>
    <h1>
        Hola, soy contenido de innerHTML. Mi nombre es:  $
        {nombre}
        <br> y mi estatura es: $ {estatura} 
    </h1>;
`;

//condicionales

if(edad>=18)
datos.innerHTML+=`
<hr> soy mayor de edad
else 
datos.innerHTML+= <hr> soy menor de edad;
`
//ciclos

for(let i=1; 1<=200, i++)
{
    datos.innerHTML+=`<hr><h3>el numero es ${i} </h3>`
}

/*
let i=1;
while(i<=5)
}
    datos.innerHTML+=`<hr><h3>el numero es ${i}</h3>`
    i++;
}

*/


//funciones

//funcion que no recibe parametros y no regresa valor
function suma1()

{
let n1=2
let n2=3;
suma=n1+n2;
datos.innerhtml+=`<hr><h3>El resultado de la suma es: $
(suma)</h3>
}

suma3(23,45);
//funcion que no recibe parametros y regresa valor
//funcion que recibe parametros y no regresa valor
// funcion que recibe parametros y regresa valor


//arreglos
/*let animales=();
animales(0)="perro";
animales(1)="gatos";
animales(2)="ave";

let animales2=("tigre","leon","elefante");

for(let i=0; i<animales,length;i++)
{
    datos.innerHTML+=`<hr><h1>el animal es $(animales(i)) </h1>`;
}

*/