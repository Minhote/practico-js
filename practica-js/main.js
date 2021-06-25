/*//Codigo del cuadrado
//Lados
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);
//Perimetro
const perimetroCuadrado =  (lado) =>  lado * 4
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado)} cm`);
//Area
const areaCuadrado = (lado) => Math.pow(lado, 2)
console.log(`El area del cuadrado es: ${areaCuadrado(ladoCuadrado)} cm2`);
console.groupEnd()

//Código del triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5
console.log(`los lados del triangulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);
console.log(`La altura del triangulo es: ${alturaTriangulo}`);
//Perimetro Triangulo
const perimetroTriangulo = (lado1, lado2, lado3) => lado1+lado2+lado3
console.log(`El perimetro del triangulo es ${perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo)} cm`);
//Area
const areaTriangulo = (base, altura) => (base*altura)/2
console.log(`El area del triangulo es ${areaTriangulo(baseTriangulo,alturaTriangulo)} cm2`);
console.groupEnd()

//Codigo del circulo
console.group("Circulo")
const radioCirculo = 4
console.log(`El radio del circulo es ${radioCirculo} cm`);
//Siametro Circulo
const diametroCirculo = (radio) => radio * 2
console.log(`El diametro del circulo es: ${diametroCirculo(radioCirculo)} cm`);
// Numero pi
const PI = Math.PI
console.log(`El valor de PI es ${PI}`);
//Circunferencia Circulo
const circuferenciaCirculo = (diametro, pi) => diametro * pi
console.log(`La circunferencia del circulo es: ${circuferenciaCirculo(diametroCirculo(radioCirculo), PI)} cm`);
//Area Circulo
const areaCirculo = (radio, pi) => pi * Math.pow(radio, 2)
console.log(`El área del circulo es: ${areaCirculo(radioCirculo, PI)} cm2`);
console.groupEnd()*/

//Interactividad
function calcularPerimetroCuadrado(){
    let inputCuadrado = parseInt(document.getElementById("inputCuadrado").value)
    alert(`El perimetro del cuadrado es ${inputCuadrado*4} cm`)
}

function calcularAreaCuadrado(){
    let inputCuadrado = parseInt(document.getElementById("inputCuadrado").value)
    alert(`El área del cuadrado es ${Math.pow(inputCuadrado, 2)}`)
}
