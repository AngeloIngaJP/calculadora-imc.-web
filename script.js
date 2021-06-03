


btnCalcular.onclick=function(){
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = document.getElementById("estatura").value/100;
    var imc = (peso / (estatura*estatura)).toFixed(2);
    var edad = document.getElementById("edad").value;
    //gen
    var iedad = document.getElementById("imcedad"); 
    var estat = document.getElementById("imcest");
    var ipeso = document.getElementById("imcpeso");
    var perso = document.getElementById("imcperso");
    var estado = document.getElementById("imcestado");
    var ideal = document.getElementById("imcideal");
    var idiagnos = document.getElementById("imcdiagnos");

    iedad.innerHTML= edad;
    estat.innerHTML= estatura+" m";
    ipeso.innerHTML= peso+" kg";
    perso.innerHTML= imc;
    ideal.innerHTML= (peso-5.7)+" kg - "+(peso+2.4)+" kg";
    
    if(imc<18.5){     

        estado.innerHTML = "Bajo peso";
        document.getElementById("fontcolor").style.backgroundColor= "#5AE3E5";
        document.getElementById("fonttext").style.color="black";
        document.getElementById("fontcolordiag").style.backgroundColor= "#5AE3E5";
        document.getElementById("fonttextdiag").style.color="black";
        idiagnos.innerHTML = "El bajo peso puede ser causado por una deficiente alimentación o alguna enfermedad. Acude con un especialista para analizar las causas y ayudarte a llegar a tu peso ideal";
        
    }else if(imc>=18.5 && imc<=24.9){
        
        estado.innerHTML = "Peso normal";
        document.getElementById("fontcolor").style.backgroundColor= "#CCEF86";
        document.getElementById("fonttext").style.color="black";
        document.getElementById("fontcolordiag").style.backgroundColor= "#CCEF86";
        document.getElementById("fonttextdiag").style.color="black";
        idiagnos.innerHTML = "¡Tu IMC indica que estás en tu peso normal. Al estar en este nivel, se reducen los riesgos a la salud mejorando tu calidad de vida en todos los sentidos!";

    }else if(imc>=25 && imc<=29.9){

        estado.innerHTML = "Sobrepeso";
        document.getElementById("fontcolor").style.backgroundColor= "#F5E76D";
        document.getElementById("fonttext").style.color="black";
        document.getElementById("fontcolordiag").style.backgroundColor= "#F5E76D";
        document.getElementById("fonttextdiag").style.color="black";
        idiagnos.innerHTML = "¡El sobrepeso incrementa el riesgo de enfermedad cardiovascular. Asesórate con un especialista, sigue un plan de alimentación y ejercítate regularmente; así llegarás a tu IMC normal!";

    }else if(imc>=30 && imc<=34.9){
        
        estado.innerHTML = "Obesidad tipo 1 (Leve)";
        document.getElementById("fontcolor").style.backgroundColor= "#F7B274";
        document.getElementById("fonttext").style.color="black";
        document.getElementById("fontcolordiag").style.backgroundColor= "#F7B274";
        document.getElementById("fonttextdiag").style.color="black";
        idiagnos.innerHTML = "Riesgo de desarrollar enfermedades cardiovasculares. Visita a un especialista, apégate al plan de alimentación, ejercicios e indicaciones. Recuerda, restablecer tu salud requiere de un compromiso.";

    }else if(imc>=35 && imc<=39.9){

        estado.innerHTML = "Obesidad tipo 2 (Media)";
        document.getElementById("fontcolor").style.backgroundColor= "#F79D69";
        document.getElementById("fonttext").style.color="black";
        document.getElementById("fontcolordiag").style.backgroundColor= "#F79D69";
        document.getElementById("fonttextdiag").style.color="black";
        idiagnos.innerHTML = "Riesgo elevado para enfermedades cardiovasculares. Visita a un especialista lo más pronto posible y sigue sus indicaciones para iniciar un programa para bajar de peso.";

    }else if(imc>=40){

        estado.innerHTML = "Obesidad tipo 3 (Mórbida)";
        document.getElementById("fontcolor").style.backgroundColor= "#EE6666";
        document.getElementById("fonttext").style.color="black";
        document.getElementById("fontcolordiag").style.backgroundColor= "#EE6666";
        document.getElementById("fonttextdiag").style.color="black";
        idiagnos.innerHTML = "Riesgo muy elevado de enfermedades cardiovasculares. ¡Cuidado! No dejes pasar más tiempo y consulta a un especialista de inmediato, él te ayudará a analizar las causas y te brindará un programa adecuado.";

    }
}


