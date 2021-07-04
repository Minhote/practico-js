//Formula de precio a pagar
//precio - (precio*descuento/100)
let precioBase = document.querySelector('#inputPrecio')
let des = document.querySelector('#inputDescuento')
let precioFinal 
let b = document.querySelector('#btn')

function calculaDescuento(){
    let precio = parseInt(precioBase.value)
    let descuento = parseInt(des.value)
    precioFinal = precio - (precio*descuento/100)
    let p = document.querySelector('#parrafoPrecio')
    p.innerHTML= `El precio a pagar es: ${precioFinal}` 
}

