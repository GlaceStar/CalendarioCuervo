
var A1 = '{"Mes": "Octubre","Dia": "1","Año": "2019","Titulo": "Aniversario","Descripcion": "43 aniversario del Instituto Tecnologico de Nuevo León"}';
var A2 = '{"Mes": "Noviembre","Dia": "19","Año": "2019","Titulo": "Solicitudes","Descripcion": "Solicitudes de comite academico"}';
var A3 = '{"Mes": "Noviembre","Dia": "15","Año": "2019","Titulo": "Fin de curso","Descripcion": "Finaliza el ciclo escolar agosto-diciembre 2019"}';


var ToJson = JSON.parse(A1);

console.log(ToJson);

window.onload = function what(){
document.getElementById('Tit').innerHTML = ToJson.Titulo;
document.getElementById('Desc').innerHTML = ToJson.Descripcion;
document.getElementById('Fecha').innerHTML = ToJson.Dia+" de "+ToJson.Mes +" del "+ ToJson.Año;
}








