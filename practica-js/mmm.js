// Media , Noda y Mediana
//Promedio
let lista = [1,2,3,4,5]
function media(arr) {
    let total = 0
    let f = arr.reduce((acc,el)=>{
        acc += el
        return acc
    })
    total = f / arr.length
    //console.log(total);
}
media(lista)

//Mediana
let lista2 = [1500,2,86,450,1100000]

function mediana(arr) {
    const mitadLista = arr.length / 2
    let listaOrdenada = arr.sort((a,b) => a - b)
    if (arr.length%2 == 1) {
        //console.log(`La mediana es: ${listaOrdenada[Math.floor(mitadLista)]}`);
    }else{
        let mediana = (listaOrdenada[mitadLista-1]+listaOrdenada[mitadLista])/2
        console.log(`La mediana es: ${mediana}`);
    }
}

mediana(lista2)

//Moda

/*const lista3 = [1,2,3,3,3,4,4,4,5,5,5]

function moda(lista) {
    const listaObj = {};
    lista.map(
        function(e) {
            if(listaObj[e]) {
                listaObj[e] += 1;
            } else {
                listaObj[e] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );
    //console.log(listaArray);
    let mayor = listaArray[listaArray.length-1][1]
    let moda = []
    //console.log(mayor);
    listaArray.map((el) =>{
        //console.log(el);
        if (el[1] == mayor) {
            moda.push(el[0])
        }
    })
    //console.log(moda);
    if (moda.length == 1) {
        console.log(`La moda es ${moda}`);
    }else{
        let texto = ""
        for (let i = 0; i < moda.length; i++) {
            texto += moda[i]+" "
        }
        console.log(`La moda es: ${texto}`);
    }
};
moda(lista3)*/

const lista4 = [1,1,2,2,3,3,4,4]
function moda2(lista) {
    const listaObj = {};
    //Le otrogamos key y value al objeto
    lista.map(
        function(e) {
            if(listaObj[e]) {
                listaObj[e] += 1;
            } else {
                listaObj[e] = 1;
            }
        }
    );
    //Creamos un multiarray ordenado
    const listaArray = Object.entries(listaObj).sort(
        function (eA, eB) {
            return eA[1] - eB[1];
        }
    );
    //console.log(listaArray);
    //inicialiso la variable mayor para tomar de referencia
    let mayor = listaArray[listaArray.length-1][1]
    let confirmacion = []
    let moda = []
    //Confirmo si existe o no exite moda
    for (let i = 0; i < listaArray.length; i++) {
        if (!confirmacion.includes(listaArray[i][1])) {
            confirmacion.push(listaArray[i][1])
        }
        //console.log(listaArray[i][1])    
    }
    if (confirmacion.length == 1) {
        //Si no existe moda aqui termina la funcion
        console.log(`No hay moda`);
    }else{
        //console.log(mayor);
        //Recorro el array para saber si existe mas de una moda
        listaArray.map((el) =>{
            //console.log(el);
            if (el[1] == mayor) {
                moda.push(el[0])
            }
        })
        //console.log(moda);
        //Imprimo mensaje dependiendo de la cantida de moda que haya
        if (moda.length == 1) {
            console.log(`La moda es ${moda}`);
        }else{
            let texto = ""
            for (let i = 0; i < moda.length; i++) {
                texto += moda[i]+" "
            }
            console.log(`La moda es: ${texto}`);
        }
    }
    
};
moda2(lista4)


//RETO: Establecer la formula de la media armonica
