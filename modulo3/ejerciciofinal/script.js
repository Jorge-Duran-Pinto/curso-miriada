//operaciones unitarias
let contador = 0;
let array = list;

    
function Reset(){
    document.getElementById("n1").value = "";
}
function Cuadrado(){
    let num = document.getElementById("n1");
    num.value = num.value * num.value;
}
function Modulo(){
    let num = document.getElementById("n1");
    if(num.value<0){
        num.value = num.value * -1;
    }
    return num.value;
}
function Factorial(){
    let num = document.getElementById("n1");
    let fac = 1;
    for(let i =1 ;i > num.value;++i){
        fac = fac * i;
    }
    return num.value;
}
//operaciones binarias
function Suma(){
    let num1 = Number(document.getElementById("n1").value);
    contador += num1;
    pintarResultado(contador);
}
function Resta(){
    let num1 = Number(document.getElementById("n1").value);
    contador -= num1;
    pintarResultado(contador);
}
function Multiplicacion(){
    let num1 = Number(document.getElementById("n1").value);
    contador *= num1;
    pintarResultado(contador);
}
function Division(){
    let num1 = Number(document.getElementById("n1").value);
    contador /= num1;
    pintarResultado(contador);
}
//Operadores en formato CSV
function Sumatorio(){
    let num = document.getElementById("n1");
    let list = num.value.split(",");
    let i = 0, acc = 0;
    while(i<list.length) acc += +list[i++];
    contador = acc;
    pintarResultado(contador);
}
function ordenar(){
    let num = document.getElementById("n1");
    let list = num.value.split(",");
    list.sort();
    contador = list;
    pintarResultado(contador);    
}   
//Resultado modificado
function pintarResultado(number) {
    const resultado = document.getElementById("resultado")
    resultado.innerHTML = number;
}
