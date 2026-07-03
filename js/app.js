let respondidas = 0;

let preguntaActual = 1;

const respuestas = {};

const data={

1:{

titulo:"Jornada laboral",

piensa:`El usuario manifiesta sentirse agotado y frustrado porque diariamente debe elaborar manualmente los asientos contables en hojas de Excel. Considera que el proceso es repetitivo, consume demasiado tiempo y requiere constantes revisiones para evitar inconsistencias antes de reportar la información a la DIAN.`,

oye:`Escucha constantemente solicitudes para disminuir errores en los asientos contables, agilizar la generación de reportes y cumplir con los tiempos establecidos por la DIAN.`,

dice:`Expresa que elaborar los asientos contables en Excel es una actividad lenta, repetitiva y propensa a errores. Copia y pega información entre diferentes archivos y revisa varias veces los mismos datos.`,

ve:`Observa un proceso completamente dependiente de archivos de Excel, con múltiples versiones del mismo asiento contable, riesgo de duplicidad y alto consumo de tiempo.`,

necesidad:`Contar con un sistema que genere automáticamente los asientos contables a partir de la información almacenada en la base de datos, reduciendo errores y tiempos de procesamiento.`

},

2:{titulo:"Dificultades",piensa:"",oye:"",dice:"",ve:"",necesidad:""},

3:{titulo:"Herramientas",piensa:"",oye:"",dice:"",ve:"",necesidad:""},

4:{titulo:"Errores frecuentes",piensa:"",oye:"",dice:"",ve:"",necesidad:""},

5:{titulo:"Expectativas",piensa:"",oye:"",dice:"",ve:"",necesidad:""}

};

const tarjetas=document.querySelectorAll(".question-card");

tarjetas.forEach(card=>{

card.onclick=()=>{

tarjetas.forEach(c=>c.classList.remove("active-question"));

card.classList.add("active-question");

preguntaActual=card.dataset.question;

document.getElementById("questionTitle").innerHTML=data[preguntaActual].titulo;

//document.getElementById("answerText").innerHTML=data[preguntaActual].respuesta;
document.getElementById("questionTitle").innerHTML=data[preguntaActual].titulo;

document.getElementById("piensa").value=data[preguntaActual].piensa;

document.getElementById("oye").value=data[preguntaActual].oye;

document.getElementById("dice").value=data[preguntaActual].dice;

document.getElementById("ve").value=data[preguntaActual].ve;

document.getElementById("necesidad").value=data[preguntaActual].necesidad;

const ul=document.getElementById("findings");

ul.innerHTML="";

if(data[preguntaActual].hallazgos.length===0){

ul.innerHTML="<li>Sin hallazgos registrados.</li>";

}else{

data[preguntaActual].hallazgos.forEach(h=>{

ul.innerHTML+=`<li>${h}</li>`;

});

}

}

});

document.getElementById("btnResponder").onclick=()=>{

const tarjeta=document.querySelector(`.question-card[data-question="${preguntaActual}"]`);

const estado=tarjeta.querySelector(".estado");

if(!estado.classList.contains("respondida")){

estado.className="estado respondida";

estado.innerHTML="Respondida";

respondidas++;

actualizarDashboard();

}

};

function actualizarDashboard(){

document.getElementById("kpiRespondidas").innerHTML=respondidas;

let porcentaje=(respondidas/5)*100;

document.getElementById("barraProgreso").style.width=porcentaje+"%";

document.getElementById("porcentaje").innerHTML=porcentaje+"%";

document.getElementById("kpiHallazgos").innerHTML=respondidas*2;

}