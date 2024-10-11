
function operacion ()
{
    let n1=document.getElementById("n1").values;
    let n2=document.getElementById("n2").values;
    let tipo=document.getElementById("tipo").values;

    switch (tipoope)
    {
        case "suma":ope=n1+n2;break;
        case "resta":ope=n1-n2;break;
        case "multiplicacion":ope=n1*n2;break;
        case "division":ope=n1/n2;break;
    }
    
}

let.resultado=document.getElementById("resultado");
resul.innerhtml=`<h2>$(ope)</h2>`
