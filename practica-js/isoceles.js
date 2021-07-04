//Calcular altura , perímetro y área de un triangulo isoceles

let altura
let area
let perimetro
function isoceles(lado1,lado2,base) {
    if(lado1 !== lado2){
        alert("Este no es un triángulo isóceles")
    }else{
        console.group("Resultados")
        //Altura
        altura = Math.sqrt(Math.pow(lado1,2)-Math.pow((base/2),2))
        console.log(`La altura del triangulo es ${altura} cm`);
        //Perímetro
        perimetro = lado1 + lado2 + base
        console.log(`El perímetro del triangulo es: ${perimetro} cm`);
        //Área
        area = (base*altura)/2
        console.log(`El área del triangulo es: ${area} cm2`);
        console.groupEnd()
    }
}

isoceles(6,6,8)